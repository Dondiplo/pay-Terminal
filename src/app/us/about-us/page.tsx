import Image from "next/image";
import Link from "next/link";
import apple from "/public/assets/image 1.svg";
import android from "/public/assets/image 2.svg";

export default function Contact() {
  return (
    <div>
      {" "}
      <div className="pt-60 mx-auto bg-[#99AAB5] h-[34rem] rounded-b-[22rem] ">
        <div
          className="bg-cover bg-center bg-no-repeat w-[43%] h-[7.5rem] mx-auto  "
          style={{ backgroundImage: `url('/assets/Ourstory.svg')` }}
        >
          <h1 className=" flex justify-center text-[43px] font-bold text-[#2D3247] ">
            Our Story
          </h1>
          <p>
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
  );
}
