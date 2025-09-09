"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loadersacha() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 4, duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 flex flex-col items-center justify-center bg-white z-[9999] overflow-hidden"
    >
      {/* Animated Blobby Wave Background */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-gradient-to-r from-[#7ADAA5] via-[#A3DC9A] to-[#ADEED9] opacity-40"
        style={{ borderRadius: "40% 60% 70% 30% / 30% 40% 60% 70%" }}
        animate={{
          borderRadius: [
            "40% 60% 70% 30% / 30% 40% 60% 70%",
            "50% 50% 60% 40% / 40% 60% 50% 60%",
            "60% 40% 50% 50% / 50% 50% 40% 60%",
            "40% 60% 70% 30% / 30% 40% 60% 70%",
          ],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      {/* Smaller blob on top for layered effect */}
      <motion.div
        className="absolute w-[300px] h-[300px] bg-gradient-to-r from-[#ADEED9] to-[#A3DC9A] opacity-50"
        style={{ borderRadius: "60% 40% 30% 70% / 50% 60% 40% 50%" }}
        animate={{
          borderRadius: [
            "60% 40% 30% 70% / 50% 60% 40% 50%",
            "50% 50% 60% 40% / 40% 60% 50% 60%",
            "40% 60% 70% 30% / 30% 40% 60% 70%",
            "60% 40% 30% 70% / 50% 60% 40% 50%",
          ],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      {/* Text container */}
      <div className="relative flex flex-col items-center space-y-2 z-10">
        {/* WELLTHMIND */}
        <div className="relative">
          <h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-widest relative z-20 fractul-medium"
            style={{
              WebkitTextStroke: "2px #FDA71B",
              color: "transparent",
            }}
          >
            SACHA
          </h1>

          {/* Gradient animation L→R */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            initial={{ x: "-200%" }}
            animate={{ x: ["-100%", "0%", "0%", "200%"] }}
            transition={{
              duration: 3.5,
              times: [0, 0.4, 0.7, 1],
              ease: "easeInOut",
            }}
            style={{
              background: "linear-gradient(90deg, #FDA71B, #fab23eff, white)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-widest fractul-medium">
              SACHA
            </h1>
          </motion.div>
        </div>

        {/* HEALTHMIND */}
        <div className="relative">
          <h1
            className="text-3xl sm:text-5xl md:text-7xl lg:text-7xl font-normal tracking-widest relative z-20 raf"
            style={{
              WebkitTextStroke: "2px #224936",
              color: "transparent",
            }}
          >
            Your Kadak Chai!
          </h1>

          {/* Gradient animation R→L */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            initial={{ x: "250%" }}
            animate={{ x: ["100%", "0%", "0%", "-250%"] }}
            transition={{
              duration: 3.5,
              times: [0, 0.4, 0.7, 1],
              ease: "easeInOut",
            }}
            style={{
              background: "linear-gradient(-90deg, #06653dff, #087450ff, white)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <h1 className="text-3xl sm:text-7xl md:text-7xl lg:text-7xl font-extrabold tracking-widest raf">
              Your Kadak Chai!
            </h1>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
