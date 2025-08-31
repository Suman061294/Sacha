"use client";

import Image from "next/image";

export default function Sectionfour() {
    return (
        <section className="relative bg-[#FAFAF2] py-16 px-4 sm:py-20 sm:px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Side Content */}
                <div className="text-center lg:text-left">
                    <h2 className="text-green-800 font-bold text-4xl sm:text-6xl md:text-7xl leading-tight fractul-medium mb-6">
                        Your health <br />
                        was marketed!
                    </h2>
                    <p className="text-base sm:text-lg text-[#004728] fractul-light mb-6 max-w-xl mx-auto lg:mx-0">
                        No matter how pretty the packet looks, toxins can still
                        seep in. So, how do you make sure what  you’re buying
                        is truly safe?<br/><br/>
                        The easiest way — check for any one or more
                        certifications on the label: FSSAI ( ensures food safety),
                        India Organic, APEDA, Jaivik Bharat, ( are some to
                        certify the produce is organic)<br/><br/>
                        <span className="raf font-normal text-[30px]">If it's not certified, it's not worth it.</span>
                     </p>
                   
                </div>

                {/* Right Side Image */}
                <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
                    <Image
                        src="/3/circle.png" // replace with your main image
                        alt="Wellness Image"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
}
