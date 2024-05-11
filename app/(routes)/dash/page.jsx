"use client"
import React, { useEffect, useState } from 'react'
import { UserButton, useUser } from '@clerk/nextjs';
import CardsInfo from './_components/cards';
import { db } from '@/utils/dbConfig';
import { SQL, desc, eq, getTableColumns, sql } from 'drizzle-orm';
import { Grades, Teams } from '@/utils/schema';
function Dash() {
  const {user}=useUser();

  const [teamsList,setteamsList]=useState([]);
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
    <div>
      <div className='p-8'>
        <h2 className='font-bold text-3xl'>Hi,{user?.fullName}🙋</h2>
        <p className='text-grey-500'>Here's the grady for the needy</p>
      <CardsInfo teamsList={teamsList}/>
      </div>
    </div>
  );
}

export default Dash