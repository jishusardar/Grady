"use client"
import { Button } from '@/components/ui/button'
import { redirect } from 'next/navigation'
import Header from './_component/header'
import Hero from './_component/hero'
import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
function page() {
  const { user }=useUser();
  useEffect(() => {
    if (user) {
      redirect('/dash')
    }
  }, [user]);
  return (
    <div>
      <Header/>
      <Hero/>
    </div>
  )
}
export default page
