"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import Sectionsecond from "./components/Sectionsecond";
import Sectionfour from "./components/Sectionfour";
import Sectionthree from "./components/Sectionthree";
import Sectionfive from "./components/Sectionfive";
import Sectionsix from "./components/Sectionsix";
import Sectionseven from "./components/Sectionseven";
import Sectioneight from "./components/Sectioneight";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Sectionsixnew from "./components/Sectionsixnew";

export default function Home() {
  const nextSectionRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState(true);

  const handleScroll = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };



  return (
    <>
      <Loader />
      <div
        className="h-screen w-full bg-cover bg-top relative"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        <Navbar />

        {/* Absolute positioned block */}
        <div className="absolute bottom-[90px] left-1/2 -translate-x-1/2 flex flex-col items-center justify-center w-full px-4">
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
            <p className="text-white text-md leading-wide fractul-light">
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
          className="absolute bottom-1 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={handleScroll}
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg cursor-pointer transition"
          >
            <ArrowDown className="w-6 h-6 text-green-600" />
          </motion.button>
        </motion.div>
      </div>

      {/* Attach ref to the next section */}
      <div ref={nextSectionRef}>
        <Sectionsecond />
      </div>

      <Sectionthree backgroundImage="/3/123.png" />
      <Sectionfour />
      <Sectionfive />
      {/* <Sectionsix /> */}
      <Sectionsixnew />
      <Sectionseven />
      <Sectioneight />
      <Footer />
    </>
  );
}
