"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Sectioneight() {
  return (
    <section className="relative py-12 px-4 sm:py-10 sm:px-6 overflow-x-hidden">

      {/* Desktop Version */}
      <div className="hidden lg:grid max-w-7xl mx-auto grid-cols-2 gap-12 items-center">
        {/* Left Side Content */}
        <motion.div
          className="text-left"
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
          <h2 className="text-[#224936] font-bold text-5xl leading-[50px] fractul-light mb-20">
            No diets. No fear. Just real<br />
            conversations and cleaner<br /> choices.
          </h2>

          <div className="flex flex-row gap-4 justify-start">
            <button className="px-16 py-3 bg-[#224936] text-white font-medium shadow-lg hover:bg-white hover:text-[#224936] hover:border transition fractul-light text-xl">
              JOIN THE GANG
            </button>

            <button className="px-16 py-3 border-2 border-[#224936] text-[#224936] font-medium shadow-lg hover:bg-[#224936] hover:text-white transition fractul-medium text-xl">
              BUY NOW
            </button>
          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          className="relative w-full h-[300px]"
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

      {/* Mobile Version */}
      <div className="block lg:hidden w-full flex flex-col items-center gap-6 px-0">

        {/* Text first, full width */}
        <motion.h2
          className="text-[#224936] font-bold text-2xl  text-left w-full leading-snug fractul-light"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          No diets. No fear. Just real<br />
          conversations and cleaner<br /> choices.
        </motion.h2>

        {/* Image next, full width */}
        <motion.div
          className="relative w-full h-[200px] sm:h-[250px]"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 220,
            damping: 18,
            delay: 0.3,
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

        {/* Buttons last, full width */}
        <motion.div
          className="flex flex-col gap-4 w-full"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <button className="w-full px-6 py-3 bg-[#224936] text-white font-medium shadow-lg hover:bg-white hover:text-[#224936] hover:border transition fractul-light text-xl">
            JOIN THE GANG
          </button>

          <button className="w-full px-6 py-3 border border-[#224936] text-[#224936] font-medium shadow-lg hover:bg-[#224936] hover:text-white transition fractul-light text-xl">
            BUY NOW
          </button>
        </motion.div>

      </div>



    </section>
  );
}
