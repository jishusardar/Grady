"use client"
import { db } from '@/utils/dbConfig'
import { Grades, Teams } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { desc, eq, getTableColumns, sql } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import TeamsListss from '../../teams/_components/Teams'
import Addgrades from '../_components/Addgrades'
import GradeListTable from '../_components/GradeListTable'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Pen, PenBox, Trash } from 'lucide-react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import Editgrade from '../_components/Editgrade'



function Gradescreen({ params }) {
  const { user } = useUser();
  const [teamInfo, setteamInfo] = useState();
  const [gradesList, setgradesList] = useState([]);
  const route=useRouter();
  useEffect(() => {
    user && getTeamsInfo();
  }, [user])

  //Teams Information
  const getTeamsInfo = async() => {
    const result = await db.select({
      ...getTableColumns(Teams),
      totalsum: sql`sum(${Grades.points})`.mapWith(Number),
      totalgrade: sql`count(${Grades.id})`.mapWith(Number)
    }).from(Teams)
      .leftJoin(Grades, eq(Teams.id, Grades.TeamId))
      .where(eq(Teams.createdBy, user?.primaryEmailAddress?.emailAddress))
      .where(eq(Teams.id, params.id))
      .groupBy(Teams.id)

    setteamInfo(result[0]);
    getGradesList();
  }
  //get expanse list
  const getGradesList = async () => {
    const result = await db.select().from(Grades)
      .where(eq(Grades.TeamId, params.id)).orderBy(desc(Grades.id));
    setgradesList(result);
    console.log(result)
  }
  //delte teams
  const deleteteam=async()=>{
    const deleteteamresult=await db.delete(Grades)
    .where(eq(Grades.TeamId,params.id))
    .returning()
    if(deleteteamresult)
      {
        const result=await db.delete(Teams)
        .where(eq(Teams.id,params.id))
        .returning();
      }
      toast('Team Deleted!')
      route.replace('/dash/teams');

  }
  return (
    <div className='p-10'>
      <h2 className='text-2xl font-bold  gap-2 flex justify-between items-center'>
      <span className='flex gap-2 items-center'>
        <ArrowLeft onClick={()=>route.back()} className='cursor-pointer'/>
        Grades
      </span>
      <div className='flex gap-2 items-center'>
        <Editgrade teamInfo={teamInfo} refreshData={()=>getTeamsInfo()}/>
      <AlertDialog>
        <AlertDialogTrigger asChild>
        <Button className="flex gap-2" variant="destructive">
        <Trash />Delete</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the team
              and remove its data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={()=>deleteteam()}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      </div>
      </h2>


      <div className='grid grid-cols-1 md:grid-cols-2 mt-6 gap-5'>
        {teamInfo ? <TeamsListss team={teamInfo} /> :
          <div className='h-[150px] w-full bg-slate-200 rounded-lg'>
          </div>}
        <Addgrades teamId={params.id} refreshData={() => getTeamsInfo()} />
      </div>
      <div className='mt-4'>
        <GradeListTable gradesList={gradesList} refreshData={() => getTeamsInfo()} />
      </div>
    </div>
  )
}

export default Gradescreen