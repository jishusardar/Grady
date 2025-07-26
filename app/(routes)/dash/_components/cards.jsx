"use client"
import { useUser } from '@clerk/nextjs';
import { ListChecks, UsersRound } from 'lucide-react'
import React, { useEffect, useState } from 'react'

function CardsInfo(teamList) {
    useEffect(() => {
    }, [teamList])
    return (
        <div>
            { teamList?
            <div className='mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className='p-7 border rounded-lg flex items-center justify-between'>
                    <div>
                        <h2 className='text-sm'>Total Teams</h2>
                        <h2 className='font-bold text-2xl'>0</h2>
                    </div>
                    <UsersRound className='bg-black p-3 h-12 w-12 rounded-full  text-white' />
                </div>
                <div className='p-7 border rounded-lg flex items-center justify-between'>
                    <div>
                        <h2 className='text-sm'>Marked</h2>
                        <h2 className='font-bold text-2xl'>0</h2>
                    </div>
                    <ListChecks className='bg-black p-3 h-12 w-12 rounded-full  text-white' />
                </div>
                <div className='p-7 border rounded-lg flex items-center justify-between'>
                    <div>
                        <h2 className='text-sm'>Unmarked</h2>
                        <h2 className='font-bold text-2xl'>0</h2>
                    </div>
                    <UsersRound className='bg-black p-3 h-12 w-12 rounded-full  text-white' />
                </div>
            </div>
            :
            <div className='mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        { [1,2,3].map((item,index)=>(
            <div className='h-[110px] w-full bg-slate-200 animate-pulse rounded-lg'>
            </div>
        ))}
        </div>
    }
    </div>
    )
}

export default CardsInfo