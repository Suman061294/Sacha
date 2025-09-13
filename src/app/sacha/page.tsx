"use client";

import Image from "next/image";
import Navbarlight from "../components/Navbarlight";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Seperator from "../components/Seperator";
import Section5 from "../components/Section5";
import Section6 from "../components/Section6";
import Section7 from "../components/Section7";
import Footersacha from "../components/Footersacha";
import Loadersacha from "../components/Loadersacha";



export default function Home() {
    return (
        <>
            <Loadersacha />
            <div className="bg-[#F3F0E8]">
                {/* <div className="w-full min-h-[40vh] sm:min-h-screen bg-[#F3F0E8] flex flex-col">
          
                <Navbarlight />

       
                <div className="flex-1 flex items-center justify-center mt-20">
                    <div className="relative w-[100%] h-auto aspect-[16/9]">
                        <Image
                            src="/product/full.png"
                            alt="We’re restoring the meaning of wellness"
                            fill
                            className="object-contain" // ensures no cropping
                            priority
                        />
                    </div>
                </div>
            </div> */}

                <section className="relative w-full h-[130vh] overflow-hidden bg-[#F3F0E8]">
                    <Navbarlight />

                    <picture>
                        {/* Mobile Image */}
                        <source srcSet="/product/1-mob.png" media="(max-width: 768px)" />

                        {/* Desktop Image */}
                        <Image
                            src="/product/1.png"
                            alt="Wellness Image"
                            fill
                            priority
                            className="object-cover"
                        />
                    </picture>

                    {/* Mobile Try Now button */}
                    <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 sm:hidden">
                        <button className="bg-[#224936] text-white px-6 py-3 font-semibold  fractul-light uppercase">
                            Try Now
                        </button>
                    </div>
                </section>





                <Section2 />

                <Section3 />

                <Section4 />


                <Seperator />

                <Section5 />

                <Section6 />

                <Section7 />

                <Footersacha />

            </div>



        </>
    );
}
