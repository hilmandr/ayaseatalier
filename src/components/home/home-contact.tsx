"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/locales/client";

export default function HomeContact() {
  const t = useI18n();
  return (
    <>
      <h1 className=" text-5xl font-normal text-center pt-24" id="contact">
        {t("contact.title")}
      </h1>
      <div className=" grid lg:grid-cols-2 sm:grid-cols-1 lg:px-32 px-0 lg:py-20 py-10 gap-y-20 gap-x-10">
        <div className=" aspect-[7/10] relative max-w-xs hidden md:block">
          <Image className="" src="/image/contact.jpg" alt="" fill></Image>
        </div>
        <div className=" flex flex-col">
          <p className=" leading-loose">{t("contact.postTitle")}</p>
          <div className=" pt-10">
            <label htmlFor="">{t("contact.labelName")}</label>
            <input
              type="text"
              className=" h-10 w-full border-b border-black px-2 py-1 focus:outline-none"
              placeholder="Enter your name"
            />
          </div>
          <div className=" pt-10">
            <label htmlFor="">{t("contact.labelEmail")}</label>
            <input
              type="text"
              className=" h-10 w-full border-b border-black px-2 py-1 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div className=" pt-10 justify-start">
            <button className=" flex w-36 h-14 bg-black text-white border rounded-full py-2 justify-center items-center hover:text-black hover:bg-white transition-all duration-150 hover:border-stone-800">
              <p className=" text-center">{t("contact.button")}</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
