"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Sectioneight() {
  return (
    <section className="relative bg-[#FAFAF2] py-16 px-4 sm:py-20 sm:px-6 overflow-x-hidden">
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
          <h2 className="text-green-800 font-bold text-2xl text-left sm:text-5xl md:text-5xl leading-tight fractul-medium mb-6">
            No diets. No fear. Just real<br />
            conversations and cleaner<br /> choices.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-10 sm:px-16 py-3 bg-[#224936] text-white font-medium shadow-lg hover:bg-white hover:text-[#224936] hover:border transition fractul-light text-lg sm:text-xl">
              JOIN THE GANG
            </button>

            <button className="px-10 sm:px-16 py-3 border border-[#224936] text-[#224936] font-medium shadow-lg hover:bg-[#224936] hover:text-white transition fractul-light text-lg sm:text-xl">
              BUY NOW
            </button>
          </div>
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
            src="/3/v3.png"
            alt="Wellness Image"
            fill
            className="object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
