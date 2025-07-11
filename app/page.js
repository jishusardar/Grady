"use client"
import { Button } from '@/components/ui/button'
import { redirect } from 'next/navigation'
import Header from './_component/header'
import Hero from './_component/hero'
import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import Footer from './_component/footer'
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
      <Footer/>
    </div>
  )
}
export default page
