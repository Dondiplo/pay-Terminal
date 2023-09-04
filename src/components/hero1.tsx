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
import group266 from "public/assets/Group 266.svg";
import group513 from "public/assets/Group 513.svg";
import group144 from "public/assets/Group144.svg";
import group515 from "public/assets/Group 515 .svg";
import group510m from "public/assets/Group 510m.svg";


const Hero1 = () => {
  return (
    <div className="overflow-hidden">
      <div className="mt-20 md:mt-40  bg-[#f7f7f7]">
        <div
          className="bg-cover bg-center bg-no-repeat md:h-[40rem] h-[73rem]  w-full "
          style={{ backgroundImage: `url('/assets/Group470.svg')` }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-4    w-full  justify-center mx-auto">
            <div>
              <div className="order-first md:order-first justify-center mt-0 md:mt-20 ml-6  md:ml-32 pr-6 md:pr-0">
                <h1 className="font-bold lg:text-[38px] text-[25px] text-[#2D3247] pt-8">
                  Unlock a new world of <br />
                  possibilities with the ultimate <br />
                  freedom of Payment
                </h1>
                <p className="pt-6 text-[#313131]">
                  With our intuitive platform, you can swiftly make <br />
                  payments, seamlessly send and receive money, and <br />
                  effortlessly stay connected to a wide range of local and
                  <br />
                  international services that hold a special place in your
                  <br />
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
            <div className="order-last md:order-last justify-center w-[80%]   "></div>
            <Image
              className="hidden md:block mt-12"
              src={group510}
              alt="group510"
            />
            <Image
              className="md:hidden w-[80%] mx-auto"
              src={group510m}
              alt="group510m"
            />
            <div className="space-y-[10rem]"></div>
          </div>
        </div>
      </div>

      <div className=" pt-40 container mx-auto ">
        {/* section2 */}
        <section className="md:pt-12 mt-18 md:mt-0  ">
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-4 md:pt-12 md:pb-12  bg-[#00082B] rounded-[40px]  ">
            <div>
              <div className="order-first md:order-first justify-center mt-0 md:mt-16 ml-16 pr-6 md:pr-0 w-[80%]">
                <p className="text-[#B0FF25] pt-6 ">
                  Pay any bill services as long as it exists
                </p>
                <h1 className="font-bold lg:text-[38px] text-[25px] text-white">
                  Wide and Increased <br /> Range of Service
                </h1>
                <p className="pt-6  text-white ">
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
            <div className="order-last md:order-last justify-center mx-auto flex   ">
              <Image src={rotate} alt="rotate" className="" />
            </div>
          </div>
        </section>

        {/* third part */}
        <section className="pt-24">
          <div
            className="bg-no-repeat bg-cover bg-center h-full w-[80%] mx-auto"
            style={{ backgroundImage: `url('/assets/ymiswu.svg')` }}
          >
            <h1 className="text[#2D3247] font-bold text-[42px] text-center ">
              Your money is safe with us
            </h1>
          </div>
          <p className="text-center w-[100%]">
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
                    <p className="text-[#313131] text-right font-thin">
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
                <div className="pt-40">
                  <h1 className="text[#2D3247] font-bold text-[24px] lg:pl-4">
                             Bank Level Security
                  </h1>
                  <div className="flex space-x-4">
                    {" "}
                    <p className="text-[#313131] text-right font-thin">
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
              <div className="flex justify-content pt-8">
                <Image
                  className="hidden md:block"
                  src={group511}
                  alt="group511"
                />
              </div>
            </div>

            {/* part3 */}
            <div>
              <div className="flex justify-center lg:justify-start ">
                <div>
                  <div>
                    <h1 className="text[#2D3247] font-bold text-[24px] lg:pl-3">
                      Secure Transactions
                    </h1>
                    <div className="flex space-x-4">
                      {" "}
                      <span className="h-[85px] border-l-2 border-[#82C708]"></span>
                      <p className="text-[#313131] font-thin">
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
                    <h1 className="text[#2D3247] font-bold text-[24px] pl-3">
                      Security and Privacy
                    </h1>
                    <div className="flex space-x-4">
                      {" "}
                      <span className="h-[85px] border-l-2 border-[#82C708]"></span>
                      <p className="text-[#313131] font-thin">
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

      {/* payterminal for business  */}

      <section className=" pt-8 md:pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-4">
          <div>
            <div className="flex justify-center  md:justify-start ">
              <Image src={group266} className="" alt="group266" />
            </div>
          </div>

          {/* lower part */}

          <div className="flex justify-center md:justify-start container  mx-auto  md:w-full">
            <div className="flex justify-center mx-auto w-[80%]">
              <div className="space-y-6">
                <p className="text-[#558205]">Payterminal for business </p>
                <h1 className="text-[#050038] text-[20px] md:text-[38px]   font-[600] relative">
                  Let’s help you power up your business, streamline operations
                  and Accelerate growth.{" "}
                  
                </h1>
                <p className="text-[#313131] font-thin">
                  Supercharge and take your business to the next level with{" "}
                  <br />
                  payterminal. Money moves better with Payterminal.
                </p>
                <ul className="list-disc text-[#313131] pl-4 font-thin">
                  <li>Get a free business account</li>
                  <li>Access to Pos Device</li>
                  <li>Organise your business with easy to use tools</li>
                  <li>Increase sales and revenue with modern solutions</li>
                  <li>Track and cut down employee theft</li>
                  <li>Built for your success</li>
                </ul>
                <Image className="" src={group144} alt="group144" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto pt-40">
        <div className="grid grid-reverse-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-4   ">
          <div className="flex justify-center  container  mx-auto w-[80%] md:w-full     ">
            <div className="space-y-6">
              <h1 className="text-[#050038] text-[20px] md:text-[38px]   font-[600] relative">
                Unlock a new world of <br />
                possibilities on Payteminal <br />
                Pos
                <span className="rounded-lg bg-[#FF57571A] text-sm px-4 py-2 relative lg:bottom-2 ml-4 text-[#FF5757] ">
                <span className="text-5xl">.</span> Coming Soon 
                </span>
              </h1>
              <p className="font-light leading-7">
                With our intuitive platform, you can swiftly make payments,
                seamlessly send and receive money, and effortlessly stay
                connected to a wide range of local and international services
                that hold a special place in your heart. Say goodbye to the
                hassle of traditional payment methods and embrace a convenient,
                secure, and interconnected experience
              </p>

              <Image className="" src={group144} alt="group144" />
            </div>
          </div>

          {/* part2 */}
          <div
            className="bg-cover bg-center bg-no-repeat "
            style={{ backgroundImage: `url('/assets/OJO.svg')` }}
          >
            <Image className=" w-[80%] mx-auto" src={group515} alt="image515" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero1;
