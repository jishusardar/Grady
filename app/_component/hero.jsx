"use client";
import React from "react";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Script from "next/script";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";

function Hero() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="relative" id="home">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>
      <div>
        <div className="relative pt-36 ml-auto">
          <div className="lg:w-2/3 text-center mx-auto">
            <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
              Get Ready For Grady
              <span className="text-primary dark:text-white">
                The Grade Analytical Tool.
              </span>
            </h1>
            <p className="mt-8 text-gray-700 dark:text-gray-300">
              Grady Is A Platform Capable of Multi User Calculation & Data
              Visualization
            </p>
            <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
              <a
                href="/dash"
                className="relative flex h-11 w-max items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-semibold text-white">
                  Get started
                </span>
              </a>
              <a
                href="#"
                className="relative flex h-11 w-max items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
              >
                <span>
                  <Button
                    className="relative text-base font-semibold text-primary dark:text-white"
                    variant="transparent"
                    onClick={() => toast("Just Get Started and Learn")}
                  >
                    Learn more
                  </Button>
                </span>
              </a>
            </div>
            <div className="relative mt-10">
              <HeroVideoDialog
                className="block dark:hidden"
                animationStyle="from-center"
                videoSrc="#"
                thumbnailSrc="https://blogger.googleusercontent.com/img/a/AVvXsEgRTi0Sl3ATzRxk_GGcsluebgqdfuKyEq64oT4Ro1K1K5uSnzLPrUJLyBdXbKRcfJHoFKgR1kX0E1TOlxsMDreQJjrM6K3Q8KVt30HFl0O-3MTCwLhcNKMIFaS1VzUHLTBH9Y31NIQslFxldXuei00vNuK9Qy1ryZ1xvp1V4y3AIbqELDqb41jkT8I"
                thumbnailAlt="Hero Video"
              />
              <HeroVideoDialog
                className="hidden dark:block"
                animationStyle="from-center"
                videoSrc="#"
                thumbnailSrc="https://blogger.googleusercontent.com/img/a/AVvXsEgRTi0Sl3ATzRxk_GGcsluebgqdfuKyEq64oT4Ro1K1K5uSnzLPrUJLyBdXbKRcfJHoFKgR1kX0E1TOlxsMDreQJjrM6K3Q8KVt30HFl0O-3MTCwLhcNKMIFaS1VzUHLTBH9Y31NIQslFxldXuei00vNuK9Qy1ryZ1xvp1V4y3AIbqELDqb41jkT8I"
                thumbnailAlt="Hero Video"
              />
            </div>
            <div className=" py-8 ml-5 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                  The Pros
                </h6>
                <p className="mt-2 text-gray-500"> Stay Organised</p>
                <p className="mt-2 text-gray-500"> Stay Updated</p>
                <p className="mt-2 text-gray-500"> Stay Loved</p>
              </div>
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                  What Really Matters
                </h6>
                <p className="mt-2 text-gray-500">You</p>
              </div>
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                  The Cons
                </h6>
                <p className="mt-2 text-gray-500">Not Available Currently</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Hero;
