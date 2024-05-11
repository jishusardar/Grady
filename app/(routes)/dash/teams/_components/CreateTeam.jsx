"use client"
import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import EmojiPicker from 'emoji-picker-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { db } from '@/utils/dbConfig'
import { Teams } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { toast } from "sonner"

function CreateTeam({refreshData}) {
  const [emojiIcon,setEmojiIcon]=useState('🧑‍💻');
  const [EmojiPicker,setEmojiPicker]=useState(false);

  const [name,setName]=useState();
  const [points,setPoints]=useState();

  const {user}=useUser();

  const onCreateTeam=async()=>{
    const result=await db.insert(Teams)
    .values({
      name:name,
      points:points,
      createdBy:user?.primaryEmailAddress?.emailAddress,
      icon:emojiIcon
    }).returning({insertedId:Teams.id})
    if(result)
      {
        refreshData()
        toast('Team Created Successfully')
      }
  }
  return (
    <div>
      <Dialog>
  <DialogTrigger asChild>
  <div className='bg-slate-100 p-10 rounded-md items-center flex flex-col border-2'>
        <h2 className='text-3xl border-dotted cursor-pointer hover:shadow-md'>+</h2>
        <h2>Create New Team</h2>
      </div>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Create New Team</DialogTitle>
      <DialogDescription>
        <div className='mt-5'>
        <Button variant="outline"
        size="lg" className="text-lg">{emojiIcon}</Button>
      <div>
      </div>
      <div className='mt-2'>
        <h2 className='text-black font-medium my-1'>Team Name</h2>
        <Input placeholder="e.g.Team Name" onChange={(e)=>setName(e.target.value)}/>
      </div>
      <div className='mt-2'>
        <h2 className='text-black font-medium my-1'>Total/Maximum Marks</h2>
        <Input  type="number"placeholder="e.g.100,200" onChange={(e)=>setPoints(e.target.value)}/>
      </div>
        </div>
      </DialogDescription>
    </DialogHeader>
    <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
          <Button disabled={!(name)} className='m-5' onClick={()=>onCreateTeam()}>Create Team</Button>
          </DialogClose>
        </DialogFooter>
  </DialogContent>
</Dialog>
    </div>
  )
}

export default CreateTeam