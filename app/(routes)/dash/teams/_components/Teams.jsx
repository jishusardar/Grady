import { Grades } from '@/utils/schema'
import Link from 'next/link'
import React from 'react'

function TeamsListss({team}) {
  
  const calculateProgressperc = () => {
    const percn = (team.totalsum / team.points) * 100;
    return percn.toFixed(2);
}

  return (
    <Link href={'/dash/grades/'+team?.id}>
      <div className='p-5 border rounded-lg hover:shadow-md cursor-pointer h-[170px]'>
      <div className='flex gap-2 items-center justify-between'>
      <div className='flex gap-2 items-center'>
        <h2 className='text-2xl p-3 px-4
         bg-slate-100 rounded-full'>{team?.icon}</h2>
        <div>
          <h2 className='font-bold'>{team.name}</h2>
          <h2 className='font-sm text-gray-400'>{team.totalgrade} Grades</h2>
        </div>
      </div>
      <h2>{team.totalsum?team.totalsum:0}</h2>
      </div>
      <div className='mt-5'>
        <div className='flex items-centre justify-between mb-3'>
          <h2 className='text-xs text-slate-400'>Min: 0</h2>
          <h2 className='text-xs text-slate-400'>Max: {team.points}</h2>
        </div>
        <div className='w-full bg-slate-300 h-2 rounded-full'>
          <div className='bg-black h-2 rounded-full' style={{width:`${calculateProgressperc()}%`}}></div>
        </div>
      </div>
      </div>
    </Link>
  )
}

export default TeamsListss