"use client"
import React from 'react'
import Image from 'next/image'
import { useUser } from '@clerk/nextjs'

function Hero() {
  const {user,isSignedIn}=useUser();
  return (
    <section>
      <div className="bg-gray-50 flex items-center flex-col">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
          >
            Get Ready For Grady

            <span className="sm:block"> :The Grade Analytical Tool</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Grady Is A Platform Capable of Multi User Calculation & Data Visualization
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {isSignedIn ?
              <a
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-purple-600 hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="./dash"
              >
                Dashboard
              </a> :
              <a
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-purple-600 hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="./sign-in"
              >
                Sign In
              </a>
            }
          </div>
        </div>
      </div>
      {isSignedIn?
      <Image src='/dashboard.png' alt="Seems Like You Haven't Signed Up yet" width={1000} height={700} className='-mt-9 rounded-xl border-2' />:
      <Image src='/dashboard.png' alt="Seems Like You Haven't Signed Up yet" width={1000} height={700} className='-mt-9 rounded-xl border-2' />}
      </div>
    </section>
  )
}

export default Hero
