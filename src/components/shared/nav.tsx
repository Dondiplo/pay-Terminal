"use client";
import React, { useState,useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/assets/logo 1.svg";
import apple from "/public/assets/image 1.svg";
import android from "/public/assets/image 2.svg";
import { useRouter } from "next/navigation";



export default function Nav(){
  const router = useRouter();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCloseMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="mx-10 bg  overflow-hidden">
      <div className="w-full   left-0   w-full z-10 fixed   h-[5rem] pt-4 ">
        <div className="flex justify-between items-center  mx-8 ">
          <Link href="/" onClick={handleCloseMenu}>
            <Image src={logo} alt="logo" />
          </Link>

          <div className="space-x-4 lg:space-x-10 md:flex hidden text-[#313131]">
            <Link className={`text-[#313131] hover:font-bold ${router.pathname === "/" ? "selected" : ""}`} href="/">
              Home
            </Link>
            <Link className={`hover:font-bold ${router.pathname === "/us/about-us" ? "selected" : ""}`} href="/us/about-us">
              About Us
            </Link>
            <Link className={`hover:font-bold ${router.pathname === "/us/faqs" ? "selected" : ""}`} href="/us/faqs">
              FAQ
            </Link>
            <Link className={`hover:font-bold ${router.pathname === "/us/contact-us" ? "selected" : ""}`} href="/us/contact-us">
              Contact Us
            </Link>
          </div>
          <div className="md:flex space-x-4 hidden">
            <Link href="https://play.google.com/store/apps/details?id=com.payterminal.payterminal">
              <Image src={apple} alt="logo" />
            </Link>
            <Link href="/">
              <Image src={android} alt="logo" />
            </Link>
          </div>

          {/* mobile */}
          <div className="md:hidden">
            <GiHamburgerMenu
              onClick={handleToggleMenu}
              className={isMobileMenuOpen ? "hidden" : "cursor-pointer"}
            />
            <GrClose
              onClick={handleCloseMenu}
              className={isMobileMenuOpen ? "cursor-pointer" : "hidden"}
            />
          </div>
        </div>
      </div>

      {/* mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-12 bg-white z-10 self-end py-8 space-y-6 bg-white sm:w-auto left-6 right-6 drop-shadow-md flex flex-col justify-center items-center">
          <Link className="hover:font-bold" href="/" onClick={handleCloseMenu}>
            Home
          </Link>
          <Link
            className="hover:font-bold"
            href="/us/about-us"
            onClick={handleCloseMenu}
          >
            About Us
          </Link>
          <Link
            className="hover:font-bold"
            href="/us/faqs"
            onClick={handleCloseMenu}
          >
            FAQ
          </Link>
          <Link
            className="hover:font-bold"
            href="/us/contact-us"
            onClick={handleCloseMenu}
          >
            Contact Us
          </Link>
        </div>
      )}
    </div>
  );
}
