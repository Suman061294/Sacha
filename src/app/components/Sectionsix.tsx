"use client";

import Image from "next/image";

export default function Sectionsix() {
    return (
        <section className="relative bg-[#FAFAF2] py-16 px-4 sm:py-20 sm:px-6">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">

                {/* Left Side Content */}
                {/* Left Side Content */}
                <div className="flex-1 text-left flex flex-col justify-start items-start pt-10">
                    <h1 className="text-green-800 font-bold text-8xl sm:text-8xl md:text-8xl leading-tight fractul-medium mb-0">
                        SACHA
                    </h1>
                    <p className="text-green-700 text-2xl sm:text-2xl ms-1 fractul-light">
                        is step one
                    </p>

                    <p className="text-[#224936] text-2xl sm:text-xl ms-1 fractul-light my-10">
                        No drama. No Jargons.<br />
                        Just real Chai as it used to be!
                    </p>

                    <button className="px-6 py-3 rounded-xl bg-[#224936] text-white font-medium shadow-lg hover:bg-green-800 transition fractul-light text-3xl">
                        TRY NOW
                    </button>
                </div>


                {/* Center Image (3/5 width) */}
                <div className="flex-[2] relative w-full h-[300px] sm:h-[400px] lg:h-[550px] flex items-center justify-center">
                    <Image
                        src="/3/product.png"
                        alt="Circle hand"
                        fill
                        quality={100}
                        className="object-contain"
                    />
                </div>

                {/* Right Side Content */}
                <div className="flex-1 text-center lg:text-left flex flex-col justify-center gap-0">
                    <p className="text-[#224936] font-light text-4xl sm:text-5xl leading-tight raf">
                        Your same OG<br />
                        Kadak Chai
                    </p>

                    <p className="text-[#224936] font-normal text-4xl sm:text-4xl leading-tight fractul-light transform rotate-3">
                        But Organic.
                    </p>
                </div>
            </div>
        </section>
    );
}
