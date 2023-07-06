import React from "react";
import Link from "next/link";
import group470 from "public/assets/Group470 .svg";
import Image from "next/image";
import "../app/app.css";
import apple from "/public/assets/image 1.svg";
import android from "/public/assets/image 2.svg";
import rotate from "public/assets/rotate.svg";
import apple1 from "public/assets/appstore.97e12ae9 3.svg";
import android1 from "public/assets/googleplay.efaebdd2 1.svg";
import group510 from "public/assets/Group 510.svg";
import group511 from "public/assets/Group 511.svg";

const Hero1 = () => {
  return (
    <div className="container mx-auto pt-40  ">
      <div
        className="bg-cover bg-center bg-no-repeat md:h-full h-[60rem]  w-full "
        style={{ backgroundImage: `url('/assets/Group470.svg')` }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-4  flex ">
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
          <div className="order-last md:order-last justify-center w-[80%] "></div>
          <Image src={group510} alt="group510" />
        </div>
      </div>

      {/* section2 */}
      <section className="md:pt-12 mt-60 md:mt-0 ">
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-4 md:pt-28  flex bg-[#00082B] rounded-[30px]  ">
          <div>
            <div className="order-first md:order-first justify-center mt-0 md:mt-20 ml-16 pr-6 md:pr-0">
              <p className="text-[#B0FF25] pt-6 ">
                Pay any bill services as long as it exists
              </p>
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
            <Image
              src={rotate}
              alt="rotate"
              className="animate-slower-rotate"
            />
          </div>
        </div>
      </section>

      {/* third part */}
      <section className="pt-24">
        <h1 className="text[#2D3247] font-bold text-[42px] text-center">
          Your money is safe with us
        </h1>
        <p className="text-center">
          Start sending money and paying your bills faster today.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 justify-center mx-auto pt-12 items-center  ">
          {/* higher element */}
          <div className="flex justify-center lg:justify-end">
            <div>
            <div>
              <h1 className="text[#2D3247] font-bold text-[24px]">
                Security and Privacy
              </h1>
              <div className="flex space-x-4">
                {" "}
                <p>
                  We take your security and privacy <br />
                  very seriously and we are committed <br />
                  to protecting your account with the <br />
                  highest standards of security <br />
                  available.
                </p>
                <span className="h-[85px] border-l-2 border-[#82C708]"></span>
              </div>
            </div>

            {/* lower element */}
            <div className="pt-20">
              <h1 className="text[#2D3247] font-bold text-[24px]">
              Bank Level Security
              </h1>
              <div className="flex space-x-4">
                {" "}
                <p>
                We use state of the art data <br />
                 encryption technology when handling <br />
                 all financial information and standard <br />
                  two-factor authentication (2FA) <br />
                   protection.
                </p>
                <span className="h-[85px] border-l-2 border-[#82C708]"></span>
              </div>
            </div>

            </div>
           
          </div>
           {/* part2 */}
          <div>
            <div className="flex justify-content">
            <Image src={group511} alt="group511" />
            </div>
          </div>

          {/* part3 */}
          <div>
          <div className="flex justify-center lg:justify-start ">
            <div>
            <div>
              <h1 className="text[#2D3247] font-bold text-[24px]">
              Secure Transactions
              </h1>
              <div className="flex space-x-4">
                {" "}
                <span className="h-[85px] border-l-2 border-[#82C708]"></span>
                <p>
                  We take your security and privacy <br />
                  very seriously and we are committed <br />
                  to protecting your account with the <br />
                  highest standards of security <br />
                  available.
                </p>
                
              </div>
            </div>

            {/* lower element */}
            <div className="pt-20">
              <h1 className="text[#2D3247] font-bold text-[24px]">
                Security and Privacy
              </h1>
              <div className="flex space-x-4">
                {" "}
                <span className="h-[85px] border-l-2 border-[#82C708]"></span>
                <p>
                  We take your security and privacy <br />
                  very seriously and we are committed <br />
                  to protecting your account with the <br />
                  highest standards of security <br />
                  available.
                </p>
                
              </div>
            </div>

            </div>
           
          </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero1;
