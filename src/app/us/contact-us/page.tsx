import Image from "next/image";
import Link from "next/link";
import design from "public/assets/DESIGN1.svg";
import apple from "/public/assets/image 1.svg";
import android from "/public/assets/image 2.svg";
import Nav from "../../../components/nav";

export default function Faq() {
  return (
    <div>
      <Nav />
      <section className=" bg-[#82C708] bg-opacity-[8%] ">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-4  flex  w-full  justify-center pt-40">
          <div>
            <h1 className="text-[50px] font-bold text-[#2D3247] text-center">
              Contact Us
            </h1>
            <p className=" text-[#313131] leading-8 text-center">
              Aequitatem praeterea legere stultorum atomum pro <br />
              multo cura sed distinguique Nisi cui videtur: Laetetur <br />
              Brutus cetero dolor Theophrastus existimo{" "}
            </p>

            <div className=" justify-center flex space-x-4 pt-12 ">
              <Link href="https://play.google.com/store/apps/details?id=com.payterminal.payterminal">
                <Image src={apple} alt="logo" />
              </Link>
              <Link href="/">
                <Image src={android} alt="logo" />
              </Link>
            </div>
          </div>

          {/* part2 */}
          <div className="flex jusify-center">
            <Image src={design} alt="design" />
          </div>
        </div>
      </section>

      {/* section2 */}
      <section>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-4  flex  w-full  justify-center pt-40 w-[80%]">
          <div>
            <form className="mx-auto container w-80% md:w-[50rem] " >
              <label className="text-[#050038] opacity-[60%]">Full Name</label>
              <br />
              <input
                type="text"
                name="firstname"
                className="text-black border-[0.7px]  w-80% md:w-[50rem] h-[52px] bg-[#82C708] bg-opacity-[8%] rounded-[8px] mb-[24px]"
              />
              <br />

              {/* email */}
              <label className="text-[#050038] opacity-[60%] ">
                Email address
              </label>
              <br />
              <input
                type="email"
                name="email"
                className="text-black border-[0.7px] w-80% md:w-[50rem] h-[52px] bg-[#82C708] bg-opacity-[8%] rounded-[8px] mb-[24px] "
              />
              <br />

              {/* message */}
              <label className="text-[#050038] opacity-[60%]">
                Send us a message
              </label>
              <br />
              <textarea
                name="message"
                className="text-black border-[0.7px] w-[559px] h-[222px] bg-[#82C708] bg-opacity-[8%] rounded-[8px]"
              ></textarea>
              <br />
            </form>
          </div>

          {/* part2 */}
          <div
            className="bg-cover bg-center bg-no-repeat w-[90%] h-[15.6rem] mx-auto mt-12"
            style={{ backgroundImage: `url('/assets/tuym.png')` }}
          >

<h1 className="text-[#272727] leading-[54px] text-[42px] text-center ">Tell us what is <br />
 on your mind</h1>
<p className="leading-[36.72px] text-[20px] pt-12 text-[#313131]"> 
Aequitatem praeterea legere stultorum atomum pro <br />
 multo cura sed distinguique Nisi cui videtur: Laetetur <br />
  Brutus cetero dolor Theophrastus existimo 
</p>
          </div>
        </div>
      </section>
    </div>
  );
}
