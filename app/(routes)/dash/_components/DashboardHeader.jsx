import { UserButton } from '@clerk/nextjs'
import React from 'react' 

function DashboardHeader() {
  return (
    <div className='p-5 shadow-sm border-b flex justify-between'>
      <div>
        <div className='flex justify-between block sm:hidden gap-20'>
        <div className='font-bold cursor-pointer '>        
        <a href='/dash'>DashBoard</a>
        </div>
        <div className='font-bold cursor-pointer'>
          <a href='/dash/teams'>Teams</a>
        </div>
        <div className='font-bold cursor-pointer'>
          <a href='/dash/grades'>Grades</a>
        </div>
      </div>
      </div>
        <div>
            <UserButton/>
        </div>
    </div>
  )
}

export default DashboardHeader