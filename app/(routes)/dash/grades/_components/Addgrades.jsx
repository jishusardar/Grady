import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { db } from '@/utils/dbConfig'
import React, { useState } from 'react'
import { Grades } from '@/utils/schema'
import { Teams } from '@/utils/schema'
import { toast } from 'sonner'
import { useUser } from '@clerk/nextjs'

function Addgrades({teamId,refreshData}) {
   const [name,setName]=useState();
   const [points,setPoints]=useState();

   const {user}=useUser();

    const addNewMarks=async()=>{
        const result=await db.insert(Grades)
        .values({
            name:name,
            points:points,
            TeamId:teamId,
            createdBy:user?.primaryEmailAddress?.emailAddress
        }).returning({insertedId:Teams.id});
        console.log(result);
        if(result)
        {
            refreshData()
            toast('Marks Are Added')
        }
    }
    return (
        <div className='border p-5  rounded-lg'>
            <h2 className='font-bold text-black text-lg'>Add Grades</h2>
            <div className='mt-2'>
                <h2 className='text-black font-medium my-1'>Judge Id/Name</h2>
                <Input placeholder="e.g. J.sardar/Judge 1" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='mt-2'>
                <h2 className='text-black font-medium my-1'>Marks</h2>
                <Input  type="number"placeholder="Entre Marks" onChange={(e)=>setPoints(e.target.value)}/>
            </div>
            <Button disabled={!(name)} onClick={()=>addNewMarks()} className="mt-3 w-full text-white bg-black
            hover:bg-black hover:text-sky-500
            ">Add Marks</Button>
        </div>
    )
}

export default Addgrades