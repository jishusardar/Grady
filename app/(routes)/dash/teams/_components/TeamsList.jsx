"use client"
import React, { useEffect, useState } from 'react'
import CreateTeam from './CreateTeam'
import { db } from '@/utils/dbConfig'
import { SQL, desc, eq, getTableColumns, sql } from 'drizzle-orm'
import { Grades, Teams } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import TeamsListss from './Teams'

function TeamsList() {

  const [teamsList,setteamsList]=useState([]);
  const { user }=useUser();
  useEffect(() => {
    user&&getTeamList();
  }, [user])
  /* Getting Teams List with total sum of points and total grades           
     */
  const getTeamList=async()=>{
    const result=await db .select({
      ...getTableColumns(Teams),
      totalsum:sql`sum(${Grades.points})`.mapWith(Number),
      totalgrade:sql `count(${Grades.id})`.mapWith(Number)
    }).from (Teams)
    .leftJoin(Grades,eq(Teams.id,Grades.TeamId))
    .where(eq(Teams.createdBy,user?.primaryEmailAddress?.emailAddress))
    .groupBy(Teams.id)
    .orderBy(desc(Teams.id));

    setteamsList(result);       
  }

  return (
    <div className='mt-7'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      <CreateTeam refreshData={()=>getTeamList()}/>
      {teamsList?.length>0? teamsList.map((team,index)=>(
        <TeamsListss team={team}/>
      ))
      :[1,2,3,4,5].map((item,index)=>(
        <div key={index} className='w-full bg-gray-200 rounded-lg h-[145px]'>

        </div>
      ))
    }
    </div>
    </div>
  )
}

export default TeamsList