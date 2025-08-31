"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Section5() {
  return (
    <section className="relative py-16 px-4 sm:py-20 sm:px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">
        
        {/* Left Side Content (60%) */}
        <motion.div
          className="relative w-full lg:w-[50%] h-[250px] sm:h-[400px] lg:h-[150px]"
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
          <Image
            src="/product/5-1.png"
            alt="Wellness Image"
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Right Side Content (40%) */}
        <motion.div
          className="relative w-full lg:w-[40%] h-[125px] sm:h-[200px] lg:h-[135px] flex items-center justify-center"
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
            src="/product/5-2.png"
            alt="Wellness Image"
            fill
            className="object-contain"
          />
        </motion.div>

      </div>
    </section>
  );
}
