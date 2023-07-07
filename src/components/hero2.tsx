import React from "react";
import Image from "next/image";
import Link from "next/link";
import group513 from "public/assets/Group 513.svg";
import group144 from "public/assets/Group144.svg";
import group515 from "public/assets/Group 515 .svg";
import group522 from "public/assets/Group 522.svg"

const Hero2 = () => {
  return (
    <div>
      <section className="container mx-auto pt-40">
        <div className="grid grid-reverse-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-4  flex ">
          <div className="flex justify-center  container  mx-auto   ">
            <div className="space-y-6">
              <h1 className="text-[#050038] text-[20px] md:text-[38px]   font-[600] relative">
                Unlock a new world of <br />
                possibilities on Payteminal <br />
                Pos
                <span className="absolute bottom-1 md:bottom-4">
                  <Image src={group513} alt="group513" />{" "}
                </span>
              </h1>
              <p className="font-light leading-7">
                With our intuitive platform, you can swiftly make <br />
                payments, seamlessly send and receive money, and <br />
                effortlessly stay connected to a wide range of local and <br />
                international services that hold a special place in your <br />
                heart. Say goodbye to the hassle of traditional payment <br />
                methods and embrace a convenient, secure, and <br />
                interconnected experience
              </p>

              <Image className="" src={group144} alt="group144" />
            </div>
          </div>

          {/* part2 */}
          <div
            className="bg-cover bg-center bg-no-repeat  "
            style={{ backgroundImage: `url('/assets/OJO.svg')` }}
          >
            <Image className="w-[80%]" src={group515} alt="image515" />
          </div>
        </div>

        {/* section2 */}
        <div className="bg-cover bg-center bg-no-repeat h-[20rem] w-[70rem] mx-auto rounded-2xl mt-12 "  style={{ backgroundImage: `url('/assets/Group 523.svg')` }}>
          <div className="grid grid-reverse-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-4  flex ">
            <div> <Image src={group522} alt="group522"/></div>
            <div>kljefvnlkefn</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero2;
