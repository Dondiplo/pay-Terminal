"use client"
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/assets/logo 1.svg";
import apple from "/public/assets/image 1.svg";
import android from "/public/assets/image 2.svg";


export default function Nav() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCloseMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="mx-10 pt-12">
      <div></div>
      <div className="flex justify-between items-center relative  fixed top-0 left-0 w-full z-10">
        <Link href="/"
        onClick={handleCloseMenu}>
          <Image src={logo} alt="logo" />
          
        </Link>

        <div className="space-x-4 lg:space-x-10 md:flex hidden text-[#313131]">
          <Link className="text-[#313131] hover:font-bold" href="/us/home">
            Home
          </Link>
          <Link className="hover:font-bold" href="/us/about-us">
            About Us
          </Link>
          <Link className="hover:font-bold" href="/us/faq">
            FAQ
          </Link>
          <Link className="hover:font-bold" href="/us/contact-us">
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

      {/* mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute fixed bg-white z-10 self-end py-8 space-y-6 bg-white sm:w-auto left-6 right-6 drop-shadow-md flex flex-col justify-center items-center">
          <Link
            className="hover:font-bold"
            href="/us/home"
            onClick={handleCloseMenu}
          >
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
            href="/us/faq"
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
