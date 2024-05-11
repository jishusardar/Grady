import { db } from '@/utils/dbConfig'
import { Grades } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import { index } from 'drizzle-orm/pg-core'
import { Trash } from 'lucide-react'
import React from 'react'
import { toast } from 'sonner'

function GradeListTable({gradesList,refreshData}) {
  const deletegrade=async(grade)=>{
    const result=await db.delete(Grades)
    .where(eq(Grades.id,grade.id))
    .returning();
    if(result)
      {
        toast('Marks Deleted!')
        refreshData()
      }
  }
  return (
    <div className='mt-3'>
        <div className='grid grid-cols-3 bg-slate-200 p-2'>
            <h2 className='font-bold'>Judge Id/Name</h2>
            <h2 className='font-bold'>Grade</h2>
            <h2 className='font-bold'>Action</h2>
        </div>
        {gradesList.map((grades,index)=>(
          <div className='grid grid-cols-3 bg-slate-50 p-2'>
          <h2>{grades.name}</h2>
          <h2>{grades.points}</h2>
          <h2>
            <Trash className='text-red-600 cursor-pointer'
            onClick={()=>deletegrade(grades)}
            />
          </h2>
      </div>
        ))}
    </div>
  )
}

export default GradeListTable