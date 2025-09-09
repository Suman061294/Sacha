"use client";

import Image from "next/image";
import { motion, Variants  } from "framer-motion";

export default function Section7() {

    const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const item: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring" as const, // ✅ TypeScript needs literal
            stiffness: 80,
            damping: 15,
        },
    },
};

    return (
        <section className="relative py-12 px-4 sm:py-20 sm:px-6 overflow-x-hidden">
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
                    <h2 className="text-[#224936] font-bold text-5xl text-left sm:text-6xl leading-tight fractul-light mb-6">

                        <span className="fractul-medium"><em>Cleaned Ritual.<br />
                            Pure Love!</em></span><br />

                    </h2>

                    <p className="text-[#224936] font-normal text-xl text-left sm:text-2xl md:text-2xl leading-tight fractul-thin mb-6">
                        The <span className="fractul-medium"><em>same taste,</em></span> but <span className="fractul-medium"><em>100% organic!</em></span> <br />
                        That’s exactly what our hearts and <br />
                        bodies have been craving. </p>


                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button className="px-10 sm:px-16 py-3 bg-[#224936] text-white font-medium shadow-lg hover:bg-white hover:text-[#224936] hover:border transition fractul-light text-lg sm:text-xl">JOIN THE GANG</button>
                        <button className="px-10 sm:px-16 py-3 border-2 border-[#224936] text-[#224936] font-bold shadow-lg hover:bg-[#224936] hover:text-white transition fractul-medium text-lg sm:text-xl">BUY NOW</button>
                    </div>
                </motion.div>

                {/* Right Side Image */}
                <motion.div
                    className="relative w-full h-auto"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="max-w-7xl mx-auto grid grid-cols-10 gap-2 sm:gap-4">
                        {/* ---------- Row 1 ---------- */}
                        {/* Left (70%) */}
                        <motion.div
                            variants={item}
                            className="col-span-6 h-30 sm:h-40 relative overflow-hidden"
                        >
                            <Image
                                src="/product/p-1.png"
                                alt="Large Left"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Right (30%) */}
                        <motion.div
                            variants={item}
                            className="col-span-4 h-30 sm:h-40 relative overflow-hidden"
                        >
                            <Image
                                src="/product/p-2.png"
                                alt="Right Small"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* ---------- Row 2 ---------- */}
                        {/* Left Tall (50% width, full height) */}
                        <motion.div
                            variants={item}
                            className="col-span-4 row-span-2 relative h-[248px] sm:h-[350px] overflow-hidden"
                        >
                            <Image
                                src="/product/p-3.png"
                                alt="Tall Left"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Right Top (full width of right side) */}
                        <motion.div
                            variants={item}
                            className="col-span-6 relative h-32 sm:h-44 overflow-hidden"
                        >
                            <Image
                                src="/product/p-4.png"
                                alt="Right Top"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Right Bottom (split into 2 columns) */}
                        <motion.div
                            variants={item}
                            className="col-span-3 relative h-28 sm:h-40 overflow-hidden"
                        >
                            <Image
                                src="/product/p-5.png"
                                alt="Right Bottom Left"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        <motion.div
                            variants={item}
                            className="col-span-3 relative h-28 sm:h-40 overflow-hidden"
                        >
                            <Image
                                src="/product/p-6.png"
                                alt="Right Bottom Right"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
