import React from "react";
import Link from "next/link";
import group470 from "public/assets/Group470 .svg";
import Image from "next/image";
import "../app/app.css";
import apple from "/public/assets/image 1.svg";
import android from "/public/assets/image 2.svg";
import rotate from 'public/assets/rotate.svg'
import apple1 from "public/assets/appstore.97e12ae9 3.svg";
import android1 from "public/assets/googleplay.efaebdd2 1.svg";



const Hero1 = () => {
  return (
    <div className="container mx-auto pt-40 ">
      <div
        className="bg-cover bg-center relative h-[700px] relative"
        style={{ backgroundImage: "url(public/assets/Group 470.png)" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-4 pt-28 flex ">
          <div>
            <div className="order-first md:order-first justify-center mt-0 md:mt-20 ml-16 pr-6 md:pr-0">
              <h1 className="font-bold lg:text-[38px] text-[25px] text-[#2D3247]">
                Unlock a new world of <br />
                possibilities with the ultimate <br />
                freedom of Payment
              </h1>
              <p className="pt-6 ">
                With our intuitive platform, you can swiftly make <br />
                payments, seamlessly send and receive money, and <br />
                effortlessly stay connected to a wide range of local and <br />
                international services that hold a special place in your <br />
                heart. Say goodbye to the hassle of traditional payment <br />
                methods and embrace a convenient, secure, and <br />
                interconnected experience
              </p>
              <div className=" md:flex space-x-4 pt-12">
              <Link href="https://play.google.com/store/apps/details?id=com.payterminal.payterminal">
                <Image src={apple} alt="logo" />
              </Link>
              <Link href="/">
                <Image src={android} alt="logo" />
              </Link>
            </div>
            </div>
          </div>

          {/* second part */}
          <div className="order-last md:order-last justify-center">

          </div>
        </div>
      </div>

      <section className="pt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-4 md:pt-28 pt:12 flex bg-[#00082B] rounded-[30px]  ">
          <div>
            <div className="order-first md:order-first justify-center mt-0 md:mt-20 ml-16 pr-6 md:pr-0">

                <p className="text-[#B0FF25]">Pay any bill services as long as it exists</p>
              <h1 className="font-bold lg:text-[38px] text-[25px] text-white">
              Wide and Increased <br /> Range of Service
              </h1>
              <p className="pt-6  text-white">
              Goodbye to long bank queues. Make swift <br />
               transactions and manage your finances <br />
                better with Payterminal
              </p>
              <div className=" md:flex space-x-4 pt-12">
              <Link href="https://play.google.com/store/apps/details?id=com.payterminal.payterminal">
                <Image src={apple1} alt="logo" />
              </Link>
              <Link href="/">
                <Image src={android1} alt="logo" />
              </Link>
            </div>
            </div>
          </div>

          {/* second part */}
          <div className="order-last md:order-last justify-center mx-auto  ">
<Image src={rotate} alt="rotate" className="animate-slower-rotate"/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero1;
