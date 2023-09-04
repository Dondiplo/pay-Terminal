import React from "react";
import Image from "next/image";
import Link from "next/link";
import group513 from "public/assets/Group 513.svg";
import group144 from "public/assets/Group144.svg";
import group515 from "public/assets/Group 515 .svg";
import group522 from "public/assets/Group 522.svg";
import apple from "/public/assets/image 1.svg";
import android from "/public/assets/image 2.svg";
import group524 from "public/assets/Group524.svg";
import footlo from "public/assets/footLO.svg";
import facebook from "public/assets/Facebook.svg";
import linkedin from "public/assets/Linkedin.svg";
import shape from "public/assets/Twitter.svg";

const Hero2 = () => {
  return (
    <div className="overflow-hidden ">
      <section className="container mx-auto pt-0 md:pt-28 pb-28  ">
        {/* section2 */}
        <div
          className="bg-cover bg-center bg-no-repeat  md:h-[30rem]  mx-auto rounded-2xl mt-12"
          style={{
            backgroundImage: `url('/assets/Group 523.svg')`,
            backgroundPosition: "center calc(50% + 10rem)",
          }}
        >
          <div className="grid grid-reverse-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-4 w-[95%] ">
            <div>
              {" "}
              <Image src={group522} alt="group522" />
            </div>

            {/* part 2 */}
            <div>
              <div className="space-y-4 md:pt-64 justify-content relative lg:bottom-6">
                <h1 className="text-[#2D3247] text-[42px] text-center font-bold ">
                  Come join us
                </h1>
                <p className="font-light text-center">
                  With our intuitive platform, you can swiftly make payments,{" "}
                  <br />
                  seamlessly send and receive money, and effortlessly stay
                  connected <br />
                  to a wide range of local and international services .
                </p>
                <div className="flex justify-center  space-x-8  ">
                  <Link href="https://play.google.com/store/apps/details?id=com.payterminal.payterminal">
                    <Image src={apple} alt="logo" />
                  </Link>
                  <Link href="/">
                    <Image src={android} alt="logo" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* footer */}
      </section>
      <footer className="bg-[#262B3E] mt-0 md:mt-[181px] pt-28 pb-8 ">
        <div className="grid grid-reverse-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-4   container mx-auto ">
          <div className=" flex justify-between mx-auto w-[90%] md:w-full">
            <div className="space-y-4 text-[#D0DAF5] font-light">
              <h1 className="font-bold">Contact</h1>
              <p>0703 XXX XXX </p>
              <p>0706 XXX XXX</p>
              <p>Hello@payterminal.ng</p>
              <p>
                customerservice@ <br /> payterminal.ng
              </p>
            </div>

            <div className="space-y-4 text-[#D0DAF5] font-light">
              <h1 className="font-bold">Explore</h1>
              <p>Resources </p>
              <p>Blog</p>
              <p>Terms & Condition</p>
              <p>Privacy Policy</p>
              <p>Whistleblower policy</p>
              <p>Connect</p>
            </div>
          </div>

          {/* part2 */}
          <div className=" flex justify-between  w-[95%] lg:w-full mx-auto">
            <div className=" hidden md:block space-y-4 text-[#D0DAF5] font-light ">
              <h1 className="font-bold">Explore</h1>
              <p>Resources </p>
              <p>Blog</p>
              <p>Terms & Condition</p>
              <p>Privacy Policy</p>
              <p>Whistleblower policy</p>
              <p>Connect</p>
            </div>

            <div className="mx-auto">
              <div className="space-y-6 text-[#D0DAF5] font-light bg-white bg-opacity-[20%] bg-blur-[20px] rounded-2xl px-8 py-4 border-[0.5px] border-white blur-2xl]  justify-center">
                <h1 className="font-bold ">Subscribe</h1>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  ></label>
                  <div className="relative  rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                    <input
                      type="text"
                      name="email"
                      id="price"
                      className="block w-full rounded-md border-0 py-1.5 px-10  placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 h-[49px] "
                      placeholder="Email Address"
                    />
                    <div className="absolute inset-y-0 right-[-8px] flex ">
                      <span
                        id="currency"
                        className="h-full rounded-md border-0 bg-transparent py-0  pl-4 focus:outline-none  text-gray-500  sm:text-sm"
                      >
                        <Image className="h-[49px]" src={group524} alt="image524" />
                      </span>
                    </div>
                  </div>
                </div>

                <p>
                  Hello, we are ABC. trying to make an <br />
                  effort to put the right people for you to <br />
                  get the best results. Just insight
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[0.2px] bg-[#D0DAF5] w-[83%] flex   mx-auto border-dotted mt-8 mb-8"></div>

        {/* end footer  */}
        <div className="container mx-20  justify-between flex  text-[#D0DAF5] mb-8">
          <div className="py-4 ">
            <Image src={footlo} alt="footlo" />
            <p className="opacity-[50%]  ">No 1 katakuma plaza Gudu Abuja</p>
          </div>

          <ul className=" hidden md:flex space-x-4 pt-6 text-[14px] font-bolder lg:pr-32 ">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
          </ul>

          {/* 3rd */}
          <ul className="flex  space-x-4  ">
            <Image src={linkedin} alt="linkedin" />
            <Image src={facebook} alt="facebook" />
            <Image src={shape} alt="shape" />
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Hero2;
