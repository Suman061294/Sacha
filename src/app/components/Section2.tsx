"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Section2() {
    return (
        <section className="relative bg-[#F3F0E8] py-16 px-4 sm:py-20 sm:px-6 overflow-x-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Side Content */}
                <motion.div
                    className="text-center lg:text-left"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 80,
                        damping: 15,
                        duration: 0.6,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 className="text-green-800 font-bold text-2xl text-left sm:text-5xl md:text-5xl leading-tight fractul-light mb-6">
                        YOU HAVE BEEN<br />
                        <span className="fractul-medium"><em>SIPPING TOXINS</em></span><br />
                        <span className="fractul-medium"><em>3</em></span> TIMES A DAY
                    </h2>

                    <p className="text-green-800 font-normal text-xl text-left sm:text-xl md:text-xl leading-tight font-space mb-6">
                        You drink chai 3–4 times a day. That’s not a habit.<br />
                        That’s a</p>
                </motion.div>

                {/* Right Side Image */}
                <motion.div
                    className="relative w-full h-[175px] sm:h-[380px] lg:h-[500px]"
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 80,
                        damping: 15,
                        duration: 0.6,
                        delay: 0.2,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <Image
                        src="/product/2-1.png"
                        alt="Wellness Image"
                        fill
                        className="object-contain"
                    />
                </motion.div>
            </div>
        </section>
    );
}
