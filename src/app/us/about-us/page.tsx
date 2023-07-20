import Image from "next/image";
import Link from "next/link";
import apple from "/public/assets/image 1.svg";
import android from "/public/assets/image 2.svg";
import Nav from "../../../components/nav";
import group527 from "public/assets/Group 527.svg";
import group528 from "public/assets/Group 528.svg";
import group529 from "public/assets/Group 529.svg";
import group534 from "public/assets/Group 534.svg";
import ojo from "public/assets/OJO4YQ0 1.png";
import "../../../app/app.css"


export default function Contact() {
  return (
    <div className="overflow-hidden">
      <Nav/>
      <div className=" mx-auto  h-[40rem] ">
        <div
          className="bg-cover bg-center bg-no-repeat w-[100%] h-[50.5rem] mx-auto   "
          style={{ backgroundImage: `url('/assets/Subtract.svg')` }}
        >
          <div className="pt-60 mx-auto container w-[90%] md:w-full  ">
            <h1 className=" flex justify-center text-[43px] font-bold text-[#2D3247] ">
              Our Story
            </h1>
            <p className="text-center ">
              Aequitatem praeterea legere stultorum atomum pro multo cura sed
              distinguique <br /> Nisi cui videtur: Laetetur Brutus cetero dolor
              Theophrastus existimo{" "}
            </p>

            <div className="md:flex space-x-4 hidden justify-center pt-[48px]">
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
      {/* section 2 */}
      <section className="rounded-[20px] w-90% md: mx-auto mt-[124px]">
        <div
          className="hidden  md:bg-cover bg-center bg-no-repeat w-[60rem] h-[7rem] mx-auto  "
          style={{ backgroundImage: `url('/assets/WP.svg')` }}
        >
          <h1 className="text-center pt-6 text-[36px] text-[#272727] font-bold">
            {" "}
            <span className="font-light">why</span> Payterminal
          </h1>
          <p className="text-center  pt-6">
            Aequitatem praeterea legere stultorum atomum pro multo cura sed{" "}
            <br />
            distinguique Nisi cui videtur: Laetetur Brutus cetero dolor
            Theophrastus existimo{" "}
          </p>
        </div>

        {/* part2 */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3  justify-center mx-auto mt-[155px] items-center  ">
          <div className="mx-auto">
            <Image src={group527} alt="527" />
          </div>
          <div className="mx-auto">
            <Image src={group528} alt="528" />
          </div>
          <div className="mx-auto">
            {" "}
            <Image src={group529} alt="529" />
          </div>
        </div>
        {/* part3 */}
        <div className="grid grid-reverse-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-4  flex mt-[125px] bg-[#00061C]  ">
          <div
            className="bg-cover bg-center bg-no-repeat w-[90%] md:w-[55rem] h-[38rem] mx-auto"
            style={{ backgroundImage: `url('/assets/OJO4YQ0 1.png')` }}
          >
            <div className="mx-auto md:mx-32 md:mt-20">
              <Image src={group534} alt="group534" />
            </div>
          </div>

          {/* section2 */}
          <div className="mt-12 md:mt-[125px]  mx-auto  w-[90%] md:w-full pb-8">
            <p className="text-[#B0FF25]">Our story</p>
            <h1 className="leading-[59px] text-[42px] font-bold text-white">
              This is how we started yet <br />
              we are great
            </h1>
            <p className="text-white pt-[18px]">
              With our intuitive platform, you can swiftly make <br />
              payments, seamlessly send and receive money, and <br />
              effortlessly stay connected to a wide range of local and <br />
              international services that hold a special place in your <br />
              heart. Say goodbye to the hassle of traditional payment <br />
              methods and embrace a convenient, secure, and <br />
              interconnected experience
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
