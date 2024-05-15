"use client"
import React from 'react'
import Image from 'next/image'
import { useUser } from '@clerk/nextjs'

function Hero() {
  const {user,isSignedIn}=useUser();
  return (
<section className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
      Get Ready For Grady.
        <strong className="font-extrabold text-sky-700 sm:block"> The Grade Analytical Tool. </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
      Grady Is A Platform Capable of Multi User Calculation & Data Visualization
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
      {isSignedIn ?
        <a
          className="block w-full rounded bg-sky-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-sky-700 focus:outline-none focus:ring active:bg-sky-500 sm:w-auto"
          href="./dash"
        >
          Dashboard
        </a>:
        <a
        className="block w-full rounded bg-sky-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-sky-700 focus:outline-none focus:ring active:bg-sky-500 sm:w-auto"
        href="./sign-in"
      >
        SignIn
      </a>
        }
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero
