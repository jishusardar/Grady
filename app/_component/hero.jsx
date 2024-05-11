import React from 'react'

function Hero() {
  return (
    <section className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex">
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Get Ready For Grady

        <span className="sm:block"> :The Smart Grade Calculator</span>
      </h1>

      <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
        Grady Is A Platform For Calculation Of Grades
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-purple-600 hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="./sign-up"
        >
          Get Started
        </a>

        <a
          className="block w-full rounded border border-blue-600  bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-purple-600 hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="./dash"
        >
          Dashboard
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero