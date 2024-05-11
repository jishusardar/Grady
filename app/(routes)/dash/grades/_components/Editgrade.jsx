"use client"
import { Button } from '@/components/ui/button'
import { PenBox } from 'lucide-react'
import React, { useEffect, useState } from 'react'
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
import { useUser } from '@clerk/nextjs';
import { Input } from '@/components/ui/input'
import { db } from '@/utils/dbConfig'
import { Teams } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import { toast } from 'sonner'


function Editgrade({teamInfo,refreshData}) {
    const [emojiIcon,setEmojiIcon]=useState('🧑‍💻');
    const [EmojiPicker,setEmojiPicker]=useState(false);
  
    const [name,setName]=useState();
    const [points,setPoints]=useState();
  
    const {user}=useUser();

    useEffect(()=>{
        if(teamInfo)
            {
                setEmojiIcon(teamInfo?.icon)
                setName(teamInfo.name)
                setPoints(teamInfo.points)
            }
    },[teamInfo])

    const onupdateTeam=async()=>{
        const result=await db.update(Teams).set({
            name:name,
            points:points,
            icon:emojiIcon,
        }).where(eq(Teams.id,teamInfo.id))
        .returning();

        if(result)
            {
                refreshData()
                toast('Teams Updated!')
            }
    }
  
    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                <Button className='flex gap-2'><PenBox />Edit</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Update Team</DialogTitle>
                        <DialogDescription>
                            <div className='mt-5'>
                                <Button variant="outline"
                                    size="lg" className="text-lg">{emojiIcon}</Button>
                                <div>
                                </div>
                                <div className='mt-2'>
                                    <h2 className='text-black font-medium my-1'>Team Name</h2>
                                    <Input placeholder="e.g.Team Name" defaultValue={teamInfo?.name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className='mt-2'>
                                    <h2 className='text-black font-medium my-1'>Total/Maximum Marks</h2>
                                    <Input type="number" placeholder="e.g.100,200"  defaultValue={teamInfo?.points} onChange={(e) => setPoints(e.target.value)} />
                                </div>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="sm:justify-start">
                        <DialogClose asChild>
                            <Button disabled={!(name)} className='m-5' onClick={() => onupdateTeam()}>Update Team</Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Editgrade