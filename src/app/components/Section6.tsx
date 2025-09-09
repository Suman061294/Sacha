"use client";

import { useState, useEffect } from "react";
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
  const [visibleSlides, setVisibleSlides] = useState(3);

  // ✅ Update slides per view on resize
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 640) setVisibleSlides(1);
      else if (window.innerWidth < 1024) setVisibleSlides(2);
      else setVisibleSlides(3);
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const nextSlide = () => {
    if (index < videos.length - visibleSlides) setIndex(index + 1);
  };

  const prevSlide = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section className="relative py-12 px-4 sm:py-20 sm:px-6 overflow-x-hidden">
      {/* Top Content */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">
        {/* Left Side Content */}
        <motion.div
          className="relative w-full lg:w-[60%] h-[140px] sm:h-[200px] lg:h-[250px]" // ✅ smaller on mobile
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 15, duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="/product/5-3.png"
            alt="Wellness Image"
            className="object-contain w-full h-full" // ✅ fit properly
          />
        </motion.div>

        {/* Right Side Content (empty for now) */}
        <motion.div
          className="hidden relative w-full lg:w-[40%] h-[80px] sm:h-[150px] lg:h-[135px] flex items-center justify-center"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 15, duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        />
      </div>

      {/* ✅ Video Slider */}
      <div className="relative max-w-7xl mx-auto mt-0 sm:mt-12">
        <div className="overflow-hidden relative  py-0 sm:py-10">
          <motion.div
            className="flex gap-6 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: -((videos.length - visibleSlides) * 300), right: 0 }}
            animate={{ x: `-${index * (100 / visibleSlides)}%` }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
          >
            {videos.map((video, i) => (
              <motion.div
                key={i}
                className={`flex-shrink-0 rounded-2xl overflow-hidden shadow-lg 
                  ${visibleSlides === 1 ? "w-full" : visibleSlides === 2 ? "w-1/2" : "w-1/3"}`}
              >
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  className="w-full h-[200px] sm:h-[350px] lg:h-[500px] object-cover"
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
          disabled={index >= videos.length - visibleSlides}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 p-3 rounded-full shadow-md hover:bg-white transition disabled:opacity-40"
        >
          <FaArrowRight className="text-xl text-[#224936]" />
        </button>
      </div>
    </section>
  );
}
