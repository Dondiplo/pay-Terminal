"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import curl from "public/assets/curl.svg"

export default function About() {
  const handleAccordionClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const accordion = event.currentTarget;
    accordion.classList.toggle("active");

    const panel = accordion.nextElementSibling as HTMLDivElement;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  };

  return (
    <div>
      <div className="mx-auto container pt-24">
        <div
          className="bg-cover bg-center bg-no-repeat w-[80%] h-[5rem] mx-auto"
          style={{ backgroundImage: `url('/assets/hcwhu.svg')` }}
        >
          <h1 className="text-[43px] text-[#2D3247] font-bold text-center">
            How can we help you?
          </h1>
        </div>
<Image className="absolute" src={curl} alt="curl"/>
        <div className="relative flex justify-center pt-16">
          <input
            type="text"
            className="border border-gray-300 rounded-md py-4 pl-10 pr-4 w-80% md:w-[50rem] focus:outline-none focus:ring-2 focus:ring-blue-500 "
            placeholder="Search your question here"
          />
          <CiSearch
            size={35}
            className="hidden md:block absolute left-2 md:left-[40%] lg:left-[25%] top-[5rem] text-gray-400 pointer-events-none"
          />

        </div>

        <div className="grid grid-reverse-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-4  flex  container mx-auto  pt-12">
          <div>piwhjfisdlvdkn</div>
          <div>kdbniodakhiodknlkd</div>
        </div>
      </div>
    </div>
  );
}
