"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const videos = [
  "/videos/v1.mp4",
  "/videos/v2.mp4",
  "/videos/v3.mp4",
  "/videos/v4.mp4",
  "/videos/v5.mp4",
];

export default function Section6() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index < videos.length - 3) setIndex(index + 1);
  };

  const prevSlide = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section className="relative py-16 px-4 sm:py-20 sm:px-6 overflow-x-hidden">
      {/* Top Content */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">
        {/* Left Side Content */}
        <motion.div
          className="relative w-full lg:w-[50%] h-[250px] sm:h-[400px] lg:h-[130px]"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 15, duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="/product/5-3.png"
            alt="Wellness Image"
            className="object-contain w-full h-full"
          />
        </motion.div>

        {/* Right Side Content */}
        <motion.div
          className="relative w-full lg:w-[40%] h-[125px] sm:h-[200px] lg:h-[135px] flex items-center justify-center"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 15, duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Empty for now */}
        </motion.div>
      </div>

      {/* ✅ Video Slider (3 items visible) */}
      <div className="relative max-w-7xl mx-auto mt-12">
        <div className="overflow-hidden relative py-10">
          <motion.div
            className="flex gap-6"
            animate={{ x: `-${index * (100 / 3)}%` }} // shift by 1 card width
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
          >
            {videos.map((video, i) => (
              <motion.div
                key={i}
                className="flex-shrink-0 w-[calc(100%/3-16px)] rounded-2xl overflow-hidden shadow-lg"
              >
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  className="w-full h-[250px] sm:h-[500px] object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          disabled={index === 0}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 p-3 rounded-full shadow-md hover:bg-white transition disabled:opacity-40"
        >
          <FaArrowLeft className="text-xl text-[#224936]" />
        </button>

        <button
          onClick={nextSlide}
          disabled={index >= videos.length - 3}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 p-3 rounded-full shadow-md hover:bg-white transition disabled:opacity-40"
        >
          <FaArrowRight className="text-xl text-[#224936]" />
        </button>
      </div>
    </section>
  );
}
