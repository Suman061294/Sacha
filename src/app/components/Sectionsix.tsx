"use client";

import { motion } from "framer-motion";
import Image from "next/image";


const textVariant = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: i * 0.2,
        },
    }),
};

const letterVariant = {
    hidden: { opacity: 0, y: 20, rotate: -10 },
    visible: { 
        opacity: 1, 
        y: 0, 
        rotate: 0, 
        transition: { type: "spring" as const, stiffness: 300, damping: 20 } 
    },
};


export default function Sectionsix() {

    const firstLine = "Your same OG\nKadak Chai";
    const secondLine = "But Organic.";

    const renderText = (text: string) =>
        text.split("").map((char, index) => {
            if (char === "\n") return <br key={index} />;
            return (
                <motion.span key={index} variants={letterVariant}>
                    {char}
                </motion.span>
            );
        });

    return (
        <section className="relative py-12 px-4 sm:py-20 sm:px-6 overflow-x-hidden">

             {/* --- Mobile Layout --- */}
            <div className="flex flex-col lg:hidden gap-8">
                {/* Left Content */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="w-full flex flex-col items-center text-center"
                >
                    <h1 className="text-green-800 font-bold text-8xl leading-tight fractul-medium mb-2">
                        SACHA
                    </h1>
                    <p className="text-[#007746] text-3xl fractul-light mt-[-5px]">
                        is step one
                    </p>
                    <p className="text-[#224936] text-2xl fractul-light mt-4">
                        No drama. No Jargons.<br />
                        Just real Chai as it used to be!
                    </p>
                </motion.div>

                {/* Center Image */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 220, damping: 18, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="relative w-full h-[300px] sm:h-[400px] flex items-center justify-center"
                >
                    <Image
                        src="/3/product.png"
                        alt="Product"
                        fill
                        quality={100}
                        className="object-contain"
                    />
                </motion.div>

                {/* Right Text */}
                <motion.div
                    variants={textVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="w-full flex flex-col items-center text-center gap-2"
                >
                    <p className="text-[#224936] font-light text-5xl leading-[40px] raf">
                        {renderText(firstLine)}
                    </p>

                    <p className="text-[#224936] font-normal text-4xl leading-[40px] fractul-light transform rotate-3">
                        {renderText(secondLine)}
                    </p>
                </motion.div>

                {/* Button */}
                <motion.button
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="px-6 py-3 rounded-xl bg-[#224936] text-white font-medium shadow-lg hover:bg-green-800 transition text-2xl sm:text-3xl mx-auto"
                >
                    TRY NOW
                </motion.button>
            </div>

             <div className="hidden lg:flex max-w-7xl mx-auto flex-row gap-12">

                {/* Left Side Content */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex-1 text-left flex flex-col justify-start items-start pt-10 space-y-0"
                >
                    <h1 className="text-green-800 font-bold text-8xl sm:text-9xl leading-tight fractul-medium mb-0">
                        SACHA
                    </h1>
                    <p className="text-[#007746] text-2xl sm:text-4xl ms-1 fractul-light mt-[-15px]">
                        is step one
                    </p>

                    <p className="text-[#224936] text-2xl sm:text-2xl ms-1 fractul-light my-10">
                        No drama. No Jargons.<br />
                        Just real Chai as it used to be!
                    </p>

                    <motion.button
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.4 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="px-6 py-3 rounded-xl bg-[#224936] text-white font-medium shadow-lg hover:bg-green-800 transition fractul-light text-3xl"
                    >
                        TRY NOW
                    </motion.button>
                </motion.div>

                {/* Center Image */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 220, damping: 18, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex-[2] relative w-full h-[300px] sm:h-[400px] lg:h-[550px] flex items-center justify-center"
                >
                    <Image
                        src="/3/product.png"
                        alt="Circle hand"
                        fill
                        quality={100}
                        className="object-contain"
                    />
                </motion.div>

                {/* Right Side Content */}
                <motion.div
                    variants={textVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex-1 text-center lg:text-left flex flex-col justify-center gap-4"
                >
                    <p className="text-[#224936] font-light text-4xl sm:text-5xl leading-[40px] raf">
                        {renderText(firstLine)}
                    </p>

                    <p className="text-[#224936] font-normal text-4xl sm:text-4xl leading-tight fractul-light transform rotate-3">
                        {renderText(secondLine)}
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
