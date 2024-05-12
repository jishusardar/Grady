"use client"
import React, { useEffect, useState } from 'react'
import { UserButton, useUser } from '@clerk/nextjs'
import CardsInfo from './_components/cards'
import { db } from '@/utils/dbConfig'
import { SQL, desc, eq, getTableColumns, sql } from 'drizzle-orm'
import { Grades, Teams } from '@/utils/schema'
import BarChartDash from './_components/BarChartDash'
import { index } from 'drizzle-orm/pg-core'
import TeamsListss from './teams/_components/Teams'
import { User } from 'lucide-react';
import GradeListTable from './grades/_components/GradeListTable'
function Dash() {
  const { user } = useUser();

  const [teamList, setteamsList] = useState([]);
  const [gradesList, setgradesList] = useState([]);

  useEffect(() => {
    if (user) {
      getTeamList();
    }
  }, [user]);

  const getTeamList = async () => {
    if (user && user.primaryEmailAddress && user.primaryEmailAddress.emailAddress) {
      const result = await db.select({
        ...getTableColumns(Teams),
        totalsum: sql`sum(${Grades.points})`.mapWith(Number),
        totalgrade: sql`count(${Grades.id})`.mapWith(Number)
      }).from(Teams)
        .leftJoin(Grades, eq(Teams.id, Grades.TeamId))
        .where(eq(Teams.createdBy, user.primaryEmailAddress.emailAddress))
        .groupBy(Teams.id)
        .orderBy(desc(Teams.id));

      setteamsList(result);
      GetAllGrades();
    }
  };

  const GetAllGrades = async () => {
    if (user && user.primaryEmailAddress && user.primaryEmailAddress.emailAddress) {
      const result = await db.select({
        id: Grades.id,
        name: Grades.name,
        points: Grades.points,
      }).from(Teams)
        .rightJoin(Grades, eq(Teams.id, Grades.TeamId))
        .where(eq(Grades.createdBy, user?.primaryEmailAddress?.emailAddress))
        .groupBy(Grades.id)
        .orderBy(desc(Grades.id));

      setgradesList(result);
    }
  };

  return (
    <div className='p-8'>
      <h2 className='font-bold text-3xl'>Hi, {user?.fullName}🙋</h2>
      <p className='text-grey-500'>Here's the grady for the needy</p>
      <div className='grid grid-col-1 md:grid-cols-3 mt-6 gap-5'>
        <div className='md:col-span-2'>
          <BarChartDash teamList={teamList}/>
          <GradeListTable gradesList={gradesList} refreshData={() => getTeamList()}/>
        </div>
        <div className='grid gap-5'>
          <h2 className='font-bold text-lg'>Teams</h2>
          {teamList && teamList.map((team, index) => (
            <TeamsListss team={team} key={index}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dash;