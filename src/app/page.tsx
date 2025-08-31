"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Sectionsecond from "./components/Sectionsecond";
import Sectionfour from "./components/Sectionfour";
import Sectionthree from "./components/Sectionthree";
import Sectionfive from "./components/Sectionfive";
import Sectionsix from "./components/Sectionsix";
import Sectionseven from "./components/Sectionseven";
import Sectioneight from "./components/Sectioneight";
import Footer from "./components/Footer";

const images = [
  "/3/1.png",
  "/3/2.png",
  "/3/3.png",
  "/3/4.png",
  "/3/5.png",
  "/3/6.png",
  "/3/7.png",
  "/3/8.png",
  "/3/9.png",
];

export default function Home() {
  return (
    <>
      <div
        className="h-screen w-full bg-cover bg-top relative"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        <Navbar />

        {/* Absolute positioned block */}
        <div className="absolute bottom-[120px] left-1/2 -translate-x-1/2 flex flex-col items-center justify-center w-full px-4">
          {/* Image first */}
          {/* <div className="relative w-full max-w-[500px] h-20 sm:h-24 md:h-24 mb-6">
          <Image
            src="/text.png"
            alt="We’re restoring the meaning of wellness"
            fill
            className="object-contain"
          />
        </div> */}

          <motion.div
            className="relative w-full max-w-[500px] h-20 sm:h-24 md:h-24 mb-6"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 12,
              duration: 0.6,
            }}
          >
            <Image
              src="/text.png"
              alt="We’re restoring the meaning of wellness"
              fill
              className="object-contain"
            />
          </motion.div>

          {/* Text below image */}
          <div className="max-w-[500px] text-center">
            <p className="text-white text-sm leading-wide fractul-light">
              Welcome to Wellthmind Holistics, where wellness isn't green
              packaging, it's conscious decisions, repeated daily.
            </p>
          </div>
        </div>

        {/* Floating scroll button */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <motion.button
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg cursor-pointer transition"
          >
            <ArrowDown className="w-6 h-6 text-green-600" />
          </motion.button>
        </motion.div>
      </div>

      <Sectionsecond />

     <Sectionthree backgroundImage="/3/123.png" />

      <Sectionfour />

      <Sectionfive />

      <Sectionsix /> 

      <Sectionseven />

      <Sectioneight />  

      <Footer />


    </>
  );
}
