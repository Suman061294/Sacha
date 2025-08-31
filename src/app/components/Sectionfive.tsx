"use client";

import Image from "next/image";

export default function Sectionfive() {
    return (
        <section className="relative bg-[#FAFAF2] py-16 px-4 sm:py-20 sm:px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">

                {/* Left Side Content */}
                <div className="text-center lg:text-left">
                    <h2 className="text-green-800 font-bold text-2xl sm:text-3xl md:text-5xl leading-tight fractul-medium mb-6">
                        Clean feels<br />
                        different in the body
                    </h2>
                    <div className="relative w-full h-[300px] sm:h-[300px] lg:h-[320px] flex items-center justify-start">
                        <Image
                            src="/3/peace.png"
                            alt="Circle hand"
                            fill
                            className="object-contain object-left"
                        />
                    </div>


                </div>

                {/* Right Side Image */}

                <div className="text-center lg:text-right">
                    <p className="text-green-800 font-bold text-xl sm:text-2xl md:text-2xl leading-tight fractul-light mb-6">
                        It’s lighter. Sharper. Like your<br />
                        body’s finally being heard.
                    </p>
                    <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[320px]">

                        {/* 3 Shaped Buttons */}
                        <div className="absolute inset-0 flex flex-col items-end justify-end gap-6 p-0">
                            <button className="px-6 py-3 rounded-xl bg-[#007746] text-white font-medium shadow-lg hover:bg-green-800 transition raf text-4xl w-[90%]">
                                It helps reduce toxic load
                            </button>
                            <button className="px-6 py-3 rounded-xl bg-[#007746] text-white font-medium shadow-lg hover:bg-green-800 transition raf text-4xl w-[90%] ">
                                ease stress
                            </button>
                            <button className="px-6 py-3 rounded-xl bg-[#007746] text-white font-medium shadow-lg hover:bg-green-800 transition raf text-4xl w-[90%]">
                                and elevate focus
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
