"use client"
import React, { useEffect } from 'react'
import Sidenav from './_components/sidenav'
import DashboardHeader from './_components/DashboardHeader'
import { db } from '@/utils/dbConfig'
import { Teams } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import { useRouter } from 'next/navigation'

function Dashlayout({children}) {
  const {user}=useUser();
  const router=useRouter();

  useEffect(()=>{
    user&&checkUserTeams();
  },[user])

  const checkUserTeams= async()=>{
    const result=await db.select()
    .from(Teams)
    .where(eq(Teams.createdBy,user?.primaryEmailAddress?.emailAddress))
    console.log(result)
    if(result?.length==0)
    {
      router.replace('/dash/teams')
    }

  }
  return (
    <div>
        <div className='fixed md:w-64 hidden md:block'>
            <Sidenav/>
        </div>
        <div className='md:ml-64'>
          <DashboardHeader/>
        {children}
        </div>
        </div>
  )
}

export default Dashlayout