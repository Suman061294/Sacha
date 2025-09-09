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
        <div className="pro-gradient">
            <div className="w-full min-h-[40vh] sm:min-h-screen bg-[#F3F0E8] flex flex-col">
                {/* Navbar stays on top */}
                <Navbarlight />

                {/* Full-height responsive image container */}
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
            </div>



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
