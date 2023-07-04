import React from "react";
import apple from "/public/assets/image 1.svg";
import android from "/public/assets/image 2.svg";
import Image from "next/image";
import Link from "next/link";
import phone1 from "/public/assets/Group 508.svg";
import rectangle7 from "public/assets/Rectangle 7.svg"
import logos from "/public/assets/Group 509.svg"

export default function Hero() {
  return (
    <div className="lg:container lg:mx-auto">
      <div className="bg-cover bg-center h-[950px] relative" style={{ backgroundImage:"url(/assets/Rectangle%202.svg)" }}>
      
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-4 pt-28">
  <div className="order-first md:order-first justify-center mt-0 md:mt-20 ml-16">
    <h1 className="text-[#3C5F00] font-thin lg:text-[50px] md:text-[35px]">Fastest way to make</h1>
    <h2 className="text-[#3C5F00] font-extrabold lg:text-[50px] md:text-[35px]" >Secured payment.</h2>
    <p className="lg:text-[18px] md:text-[15px] pt-12 lg:leading-[33px]">Send money to friends, support local businesses, pay online <br />
     vendors, and manage subscriptions—all in a few clicks. With <br />
      our payment app, streamline your transactions effortlessly.</p>
      

      <div className=" md:flex space-x-4 pt-12">
          <Link href="https://play.google.com/store/apps/details?id=com.payterminal.payterminal">
            <Image src={apple} alt="logo" />
          </Link>
          <Link href="/">
            <Image src={android} alt="logo" />
          </Link>
        </div>
  </div>
  <div className="order-last md:order-last justify-center">
   <Image src={phone1} alt="phone1"/>
  </div>
</div>

    
      </div>
      <div className="rounded-3xl bg-zinc-50  mx-auto py-8 mt-[35rem] md:mt-0 ">
<Image className="mx-auto" src={logos} alt="logos"/>
</div>

    </div>
  );
}
