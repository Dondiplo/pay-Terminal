"use client";
import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/assets/logo 1.svg";
import apple from "/public/assets/image 1.svg";
import android from "/public/assets/image 2.svg";
import { usePathname } from "next/navigation";

export const Nav = () => {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    // Set a threshold value (e.g., 50) for when to apply the white background
    setIsScrolled(scrollY > 50);
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCloseMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="mx-10   overflow-hidden">
      <div
        className={`w-full left-0 z-10 fixed bg-white bg-blur-[20px] h-[5rem] pt-4 ${
          isScrolled ? "" : "navbar-transparent"
        }`}
      >
        <div className="flex justify-between items-center  mx-8 ">
          <Link href="/" onClick={handleCloseMenu}>
            <Image src={logo} alt="logo" />
          </Link>

          <div className="space-x-4 lg:space-x-10 md:flex hidden text-[#313131]">
            <Link
              className={`${
                pathname === "/"
                  ? "bg-[#E5F9C1] rounded-lg"
                  : "text-black hover:font-bold"
              }`}
              href="/"
            >
              Home
            </Link>
            <Link
              className={`${
                pathname === "/us/about-us"
                  ? "bg-[#E5F9C1] rounded-lg"
                  : "text-black hover:font-bold"
              }`}
              href="/us/about-us"
            >
              About Us
            </Link>
            <Link
              className={`${
                pathname === "/us/faqs"
                  ? "bg-[#E5F9C1] rounded-lg"
                  : "text-black hover:font-bold"
              }`}
              href="/us/faqs"
            >
              FAQ
            </Link>

            <Link
              className={`${
                pathname === "/us/contact-us"
                  ? "bg-[#E5F9C1] rounded-lg"
                  : "text-black hover:font-bold"
              }`}
              href="/us/contact-us"
            >
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

          {/* hamburger */}

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
        <div className="md:hidden fixed top-12 z-10 self-end py-8 space-y-6 bg-white sm:w-auto left-6 right-6 drop-shadow-md flex flex-col justify-center items-center">
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
};
export default Nav;
