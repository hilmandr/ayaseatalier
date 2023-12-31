"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomeContact() {
  return (
    <>
      <h1 className=" text-5xl font-normal text-center mt-20" id="contact">
        Let's get in touch
      </h1>
      <div className=" flex grid grid-cols-2 px-32 py-20 gap-y-20 gap-x-10">
        <div className=" aspect-[7/10] relative max-w-xs">
          <Image className="" src="/../image/contact.jpg" alt="" fill></Image>
        </div>
        <div className=" flex flex-col">
          <p className=" leading-loose">
            Engage with Me: Feel Free to Get in Touch – I'm Excited to Connect
            with You!
          </p>
          <div className=" pt-10">
            <label htmlFor="">What&apos;s your name?</label>
            <input
              type="text"
              className=" h-10 w-full border-b border-black px-2 py-1 focus:outline-none"
              placeholder="Enter your name"
            />
          </div>
          <div className=" pt-10">
            <label htmlFor="">Email</label>
            <input
              type="text"
              className=" h-10 w-full border-b border-black px-2 py-1 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div className=" pt-10 justify-start">
            <button className=" flex w-36 h-14 bg-black text-white border rounded-full py-2 justify-center items-center hover:text-black hover:bg-white transition-all duration-150 hover:border-stone-800">
              <p className=" text-center">Send</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
