"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface SectionthreeProps {
  backgroundImage: string;
}

const Sectionthree: React.FC<SectionthreeProps> = ({ backgroundImage }) => {
  return (
    <section className="relative w-full h-[60vh] sm:h-[120vh] lg:h-[150vh] flex items-center justify-center my-12 sm:my-20 overflow-x-hidden">
      {/* Fullscreen background image */}
      <Image
        src={backgroundImage}
        alt="wellness background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
        <div className="text-center max-w-3xl">
          {/* Heading with motion */}
          <motion.h2
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2,
            }}
            viewport={{ once: true, amount: 0.4 }}
            className="text-xl sm:text-4xl font-semibold text-[#007746] mb-5 sm:mb-20 leading-relaxed fractul-medium"
          >
            Non Toxic, Pesticide Free, Clean & <br /> Transparent gifts from nature
          </motion.h2>

          {/* Button with motion */}
          <motion.button
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 18,
              delay: 0.6,
            }}
            viewport={{ once: true, amount: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 border-2 border-[#224936] rounded-xl 
                       text-xl sm:text-lg md:text-3xl text-[#224936] font-medium 
                       hover:bg-[#224936] hover:text-white transition raf"
          >
            How we implement wellness?
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Sectionthree;
