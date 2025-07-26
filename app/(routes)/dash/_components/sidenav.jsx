"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import {BookPlus,BarChartBig,UsersRound,UserRoundSearch} from 'lucide-react'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from '@/app/_component/Logo'

function Sidenav() {
  const menuList=[
    {
      id:1,
      name:'Dashboard',
      icon:BarChartBig,
      path:'/dash'
    },
    {
      id:2,
      name:'Teams',
      icon:UsersRound,
      path:'/dash/teams'
    },
    {
      id:3,
      name:'Grades',
      icon:BookPlus,
      path:'/dash/grades'
    }
  ]
  const path=usePathname();
  useEffect(()=>
  {
    console.log(path)
  },[path])
  return (
    <div className='h-screen p-5 border shadow-sm'>
      <Logo/>
      <div className='mt-5'>
        {menuList.map((menu,index)=>(
          <Link href={menu.path}>
          <h2 className={`flex gap-2 items-center text-black font-medium
          mb-2 
          p-5 cursor-pointer rounded-md hover:text-white hover:bg-black
          ${path==menu.path&&'text-white bg-black'}`}>
            <menu.icon/>
            {menu.name}
          </h2>
          </Link>
        ))}
      </div>
      <div className='fixed bottom-10 p-5 flex gap-2 items-center'>
        <UserButton/>
        Profile
      </div>
    </div>
  )
}

export default Sidenav