"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import curl from "public/assets/curl.svg";
import group525 from "public/assets/Group 525.svg";
import Nav from "../../../components/shared/nav";
import "../../../app/app.css";

export default function About() {
  const [showContent1, setShowContent1] = useState(false);
  const [showContent2, setShowContent2] = useState(false);
  const [showContent3, setShowContent3] = useState(false);
  const [showContent4, setShowContent4] = useState(false);
  const [showContent5, setShowContent5] = useState(false);

  const toggleContent1 = () => {
    setShowContent1((prevShowContent) => !prevShowContent);
  };

  const toggleContent2 = () => {
    setShowContent2((prevShowContent) => !prevShowContent);
  };

  const toggleContent3 = () => {
    setShowContent3((prevShowContent) => !prevShowContent);
  };

  const toggleContent4 = () => {
    setShowContent4((prevShowContent) => !prevShowContent);
  };
  const toggleContent5 = () => {
    setShowContent5((prevShowContent) => !prevShowContent);
  };

  return (
    <div className="overflow-hidden">
      <Nav />
      <div className="mx-auto container pt-40">
        <div
          className="bg-cover bg-center bg-no-repeat w-[80%] h-[5rem] mx-auto"
          style={{ backgroundImage: `url('/assets/hcwhu.svg')` }}
        >
          <h1 className="text-[43px] text-[#2D3247] font-bold text-center">
            How can we help you?
          </h1>
        </div>
        <Image className="hidden md:block absolute " src={curl} alt="curl" />
        <div className="relative flex justify-center pt-16">
          <input
            type="text"
            className=" drop-shadow-md rounded-md py-6 pl-10 md:pl-16 pr-4 w-80% md:w-[50rem] focus:outline-none focus:ring-2 focus:ring-blue-500 "
            placeholder="Search your question here"
          />
          <CiSearch
            size={30}
            className="hidden md:block absolute left-2 md:left-[6%] lg:left-[20%] top-[5rem] text-gray-400 pointer-events-none"
          />
        </div>
      </div>
      <div className="bg-[#f7f7f7]">
        <div className="grid grid-reverse-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-4  flex    pt-12 container mx-auto mt-24">
          {/* part2 */}
          <div className="lg:w-[80%] md:w-full w-[80%] text-[#313131] mx-auto  pb-[10rem] ">
            {/* Section 1 */}
            <div className="flex-col items-center border-b pt-[104px] pb-[25px]">
              <div
                className="flex justify-between mx-2"
                onClick={toggleContent1}
              >
                <h1>What is Payterminal</h1>
                {showContent1 ? (
                  <AiOutlineMinus size={18} color="black" />
                ) : (
                  <AiOutlinePlus size={18} color="black" />
                )}
              </div>
              {showContent1 && (
                <p className="text-start pt-4">
                  Lorem ipsum dolor site amet, consectetur adipiscing elit.
                  Fusce vulputate lorem at malesuada faucibus. Vivamus sagittis
                  lacinia aliquam. Quisque et felis mi. Phasellus accumsan erat
                  ac elit.
                </p>
              )}
            </div>

            {/* Section 2 */}
            <div className=" flex-col items-center border-b pt-[25px] pb-[25px]">
              <div
                className="flex  justify-between  mx-2"
                onClick={toggleContent2}
              >
                <h1>How do I pay with Payterminal?</h1>
                {showContent2 ? (
                  <AiOutlineMinus size={18} color="black" />
                ) : (
                  <AiOutlinePlus size={18} color="black" />
                )}
              </div>
              {showContent2 && (
                <p className="text-start pt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  vulputate lorem at malesuada faucibus. Vivamus sagittis
                  lacinia aliquam. Quisque et felis mi. Phasellus accumsan erat
                  ac elit.
                </p>
              )}
            </div>

            {/* Section 3 */}
            <div className=" flex-col items-center border-b pt-[25px] pb-[25px]">
              <div
                className="flex justify-between mx-2"
                onClick={toggleContent3}
              >
                <h1>What is Payterminal</h1>
                {showContent3 ? (
                  <AiOutlineMinus size={18} color="black" />
                ) : (
                  <AiOutlinePlus size={18} color="black" />
                )}
              </div>
              {showContent3 && (
                <p className="text-start pt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  vulputate lorem at malesuada faucibus. Vivamus sagittis
                  lacinia aliquam. Quisque et felis mi. Phasellus accumsan erat
                  ac elit.
                </p>
              )}
            </div>

            {/* Section 4 */}
            <div className=" flex-col items-center border-b pt-[25px] pb-[25px]">
              <div
                className="flex  justify-between mx-2"
                onClick={toggleContent4}
              >
                <h1>What are the advantages of using Payterminal?</h1>
                {showContent4 ? (
                  <AiOutlineMinus size={18} color="black" />
                ) : (
                  <AiOutlinePlus size={18} color="black" />
                )}
              </div>
              {showContent4 && (
                <p className="text-start pt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  vulputate lorem at malesuada faucibus. Vivamus sagittis
                  lacinia aliquam. Quisque et felis mi. Phasellus accumsan erat
                  ac elit.
                </p>
              )}
            </div>

            {/* Section 5 */}
            <div className="flex-col items-center border-b pt-[25px] pb-[25px]">
              <div
                className="flex justify-between mx-2"
                onClick={toggleContent5}
              >
                <h1>What are the advantages of using Payterminal?</h1>
                {showContent5 ? (
                  <AiOutlineMinus size={18} color="black" />
                ) : (
                  <AiOutlinePlus size={18} color="black" />
                )}
              </div>
              {showContent5 && (
                <p className="text-start pt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  vulputate lorem at malesuada faucibus. Vivamus sagittis
                  lacinia aliquam. Quisque et felis mi. Phasellus accumsan erat
                  ac elit.
                </p>
              )}
            </div>
          </div>
          {/* section2 */}
          <div className="mx-auto w-[90%]">
            <Image src={group525} alt="group525" />
          </div>
        </div>
      </div>
    </div>
  );
}
