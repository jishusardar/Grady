import { useUser } from '@clerk/nextjs';
import { ListChecks, UsersRound } from 'lucide-react'
import React, { useEffect, useState } from 'react'

function CardsInfo(teamList) {

    const [totalteam,settotalteam]=useState(0);
    useEffect(()=>{
        teamList&&CalculateCardInfo();
    },[teamList])

    const CalculateCardInfo=()=>{
        console.log(teamList);
        let totalteam_=teamList.length;
        console.log(totalteam_);
    } 
return (
    <div className='mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
        <div className='p-7 border rounded-lg flex items-center justify-between'>
            <div>
                <h2 className='text-sm'>Total Teams</h2>
                <h2 className='font-bold text-2xl'>{teamList?.length}</h2>
            </div>
            <UsersRound className='bg-sky-500 p-3 h-12 w-12 rounded-full  text-white' />
        </div>
        <div className='p-7 border rounded-lg flex items-center justify-between'>
            <div>
                <h2 className='text-sm'>Marked</h2>
                <h2 className='font-bold text-2xl'>0</h2>
            </div>
            <ListChecks className='bg-sky-500 p-3 h-12 w-12 rounded-full  text-white' />
        </div>
        <div className='p-7 border rounded-lg flex items-center justify-between'>
            <div>
                <h2 className='text-sm'>Unmarked</h2>
                <h2 className='font-bold text-2xl'>0</h2>
            </div>
            <UsersRound className='bg-sky-500 p-3 h-12 w-12 rounded-full  text-white' />
        </div>
    </div>
)
}

export default CardsInfo