"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import {BookPlus,BarChartBig,UsersRound,UserRoundSearch} from 'lucide-react'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
      <Image src={'/logo.svg'}
      alt='logo'
      height={100}
      width={160}
      />
      <div className='mt-5'>
        {menuList.map((menu,index)=>(
          <Link href={menu.path}>
          <h2 className={`flex gap-2 items-center text-sky-500 font-medium
          mb-2 
          p-5 cursor-pointer rounded-md hover:text-white hover:bg-sky-300
          ${path==menu.path&&'text-white bg-sky-300'}`}>
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