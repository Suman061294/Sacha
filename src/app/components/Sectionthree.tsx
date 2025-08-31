"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface SectionthreeProps {
  backgroundImage: string;
}

const Sectionthree: React.FC<SectionthreeProps> = ({ backgroundImage }) => {
  return (
    <section className="relative bg-white w-full h-[100vh] sm:h-[120vh] lg:h-[150vh] flex items-center justify-center my-20">
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
        <div className="text-center max-w-2xl">
          <h2 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold text-green-900 mb-6 leading-relaxed fractul-medium">
            Non Toxic, Pesticide Free, Clean & Transparent gifts from nature
          </h2>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 border-2 border-green-800 rounded-xl 
                       text-lg sm:text-lg md:text-3xl text-green-800 font-medium 
                       hover:bg-green-800 hover:text-white transition raf"
          >
            How we implement wellness?
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Sectionthree;
