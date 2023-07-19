import Image from "next/image";
import Link from "next/link";
import apple from "/public/assets/image 1.svg";
import android from "/public/assets/image 2.svg";
import Nav from '../../../components/nav'

export default function Contact() {
  return (
    <div>
      <Nav/>
      {" "}
      <div className=" mx-auto  h-[40rem] ">
        <div
          className="bg-cover bg-center bg-no-repeat w-[100%] h-[50.5rem] mx-auto  "
          style={{ backgroundImage: `url('/assets/Subtract.svg')` }}
        >
          <div className="pt-60 mx-auto container ">
          <h1 className=" flex justify-center text-[43px] font-bold text-[#2D3247] ">
            Our Story
          </h1>
          <p className="text-center">
            Aequitatem praeterea legere stultorum atomum pro multo cura sed
            distinguique Nisi cui videtur: Laetetur Brutus cetero dolor
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
        <div className="bg-cover bg-center bg-no-repeat w-[60rem] h-[7rem] mx-auto  "
          style={{ backgroundImage: `url('/assets/WP.svg')` }}>
           <h1> <span>why</span> Payterminal</h1>
        </div>
      </section>
    </div>
  );
}
