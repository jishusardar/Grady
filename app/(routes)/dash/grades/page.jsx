"use client"
import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { db } from '@/utils/dbConfig'
import { desc, eq, getTableColumns, sql } from 'drizzle-orm'
import { Grades, Teams } from '@/utils/schema'
import GradeListTable from './_components/GradeListTable'
function GradesTableser() {
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
        .where(eq(Grades.createdBy, user.primaryEmailAddress.emailAddress))
        .orderBy(desc(Grades.id));

      setgradesList(result);
    }
  };
  return (
    <div className='p-8'>
          <h2 className='font-bold text-3xl'>Hi,🙋</h2>
          <div>
            <GradeListTable gradesList={gradesList} refreshData={() => getTeamList()}/>
          </div>
    </div>
  )
}

export default GradesTableser