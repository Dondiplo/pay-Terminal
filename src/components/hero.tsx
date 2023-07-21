import React from "react";
import apple from "/public/assets/image 1.svg";
import android from "/public/assets/image 2.svg";
import Image from "next/image";
import Link from "next/link";
import phone1 from "/public/assets/Group 508.svg";
import rectangle7 from "public/assets/Rectangle 7.svg";
import logos from "/public/assets/Group 509.svg";
import vector from "/public/assets/Vector.svg";
import group462 from "/public/assets/Group 462.svg";
import group463 from "/public/assets/Group 463.svg";
import group464 from "/public/assets/Group 464.svg";
import line from "/public/assets/Line 1.svg";
import Nav from "./shared/nav";

import "../app/app.css";

export default function Hero() {
  return (
    <div className="overflow-hidden">
      <div className="lg:container lg:mx-auto   pt-10">
        <div
          className="bg-cover bg-center md:h-[900px] h-[35rem] relative"
          style={{ backgroundImage: "url(/assets/Rectangle%202.svg)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-4 pt-28">
            <div className="order-first md:order-first justify-center mt-0 md:mt-44  w-[90%] md:w-full ml-8 ">
              <h1 className="text-[#3C5F00]  font-light text-[35px] lg:text-[50px] md:text-[45px] ">
                Fastest way to make
              </h1>
              <h2 className="text-[#3C5F00]  font-extrabold lg:text-[50px] md:text-[45px]">
                Secured payment.
              </h2>
              <p className="lg:text-[18px] text-[#313131] md:text-[15px] font-[400] pt-[18px] lg:leading-[33px] font-extralight">
                Send money to friends, support local businesses, pay online{" "}
                <br />
                vendors, and manage subscriptions—all in a few clicks. With{" "}
                <br />
                our payment app, streamline your transactions effortlessly.
              </p>

              <div className=" md:flex space-x-4 pt-[44px]">
                <Link href="https://play.google.com/store/apps/details?id=com.payterminal.payterminal">
                  <Image src={apple} alt="logo" />
                </Link>
                <Link href="/">
                  <Image src={android} alt="logo" />
                </Link>
              </div>
            </div>
            <div className="order-last md:order-last justify-center">
              <Image className="animate-pulse" src={phone1} alt="phone1" />
            </div>
          </div>
        </div>
        <div className=" rounded-3xl bg-white shadow-slate-500 drop-shadow-2xl   mx-auto py-8 mt-[30rem] md:mt-[-95px]  w-[90%]">
          <Image className="mx-auto grayscale" src={logos} alt="logos" />
        </div>

        <div className="flex justify-end pt-8">
          <Image className="" src={vector} alt="vector" />
        </div>

        {/* section2 */}
        <section className="justify-content" id="hero2">
          <div
            className="bg-no-repeat bg-cover bg-center h-full w-[50%] mx-auto"
            style={{ backgroundImage: `url('/assets/hiw.svg')` }}
          >
            <h1 className="font-bold text-[43px] text-[#2d3247]  text-center">
              How it Works
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 justify-center mx-auto pt-12 pb-6 items-center space-y-2 md:space-y-0 text-[#313131] ">
            <div className=" h-80 mx-auto ">
              <Image src={group462} alt="group462" />
              <h1 className="font-bold text-center pt-7 ">
                Download Mobile App
              </h1>
              <p className="text-center  font-extralight">
                To get started, simply download the <br />
                Payterminal mobile application from the <br />
                app store or play store
              </p>
            </div>
            <div className="h-80 mx-auto relative">
              <div className="">
                <Image
                  className="hidden lg:block max-w-[15rem] absolute left-[-7rem] top-24 "
                  src={line}
                  alt="line"
                />
                <Image src={group463} alt="group463" />
                <Image
                  className=" hidden lg:block max-w-[15rem] absolute left-[19rem] top-24 "
                  src={line}
                  alt="line"
                />
              </div>
              <h1 className="font-bold text-center ">Create an account</h1>
              <p className="text-center  font-extralight">
                Sign up on the mobile app in less than <br />
                2 mins by providing the required KYC details <br />
              </p>
            </div>
            <div className="h-80 mx-auto">
              <Image src={group464} alt="group464" />
              <h1 className="font-bold text-center  ">Add a debit card</h1>
              <p className="text-center  font-extralight">
                Add a debit card or fund your account <br />
                and you’re good to go
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
