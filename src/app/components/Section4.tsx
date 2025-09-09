"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { IoMdClose } from "react-icons/io";

export default function Section4() {
  const ref = useRef<HTMLDivElement>(null);

  // Scroll animations for desktop only
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0px", "215vh"]);
  const rotate = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], ["0deg", "-15deg", "-15deg", "0deg"]);

  return (
    <>
      {/* ---------------- DESKTOP VERSION ---------------- */}
      <section
        ref={ref}
        className="hidden md:flex relative min-h-[200vh] py-10 overflow-hidden flex-col justify-between"
      >
        <div className="text-center fractul-light text-[#224936] text-3xl sm:text-4xl md:text-5xl leading-tight mt-12">
          Avoid drinking{" "}
          <span className="fractul-medium uppercase">
            <em>pesticides</em>
          </span>
        </div>

        {/* Grid with product image in the center */}
        <div className="relative min-h-[600px] px-4 sm:px-6 flex flex-col justify-between">
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full max-w-7xl grid grid-cols-[300px_1fr_300px] items-center">
              {/* Left side */}
              <motion.div className="flex flex-col items-start">
                <Image
                  src="/product/s1.png"
                  alt="Product"
                  width={350}
                  height={350}
                  className="object-contain"
                  priority
                />
                <button className="px-6 py-3 bg-[#224936] text-white font-medium shadow-lg hover:bg-green-800 transition fractul-light text-xl mt-6">
                  TRY NOW
                </button>
              </motion.div>

              {/* Center product image (animated) */}
              <div className="relative flex items-center justify-center">
                <motion.div style={{ y, rotate }} className="z-50">
                  <Image
                    src="/3/product.png"
                    alt="Product"
                    width={350}
                    height={350}
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </div>

              {/* Right side */}
              <motion.div className="flex items-center justify-center">
                <Image
                  src="/product/s2.png"
                  alt="Product"
                  width={350}
                  height={350}
                  className="object-contain"
                  priority
                />
              </motion.div >
            </div>
          </div>

          {/* Bottom grid text */}
          <div className="w-full max-w-7xl mx-auto grid grid-cols-[300px_1fr_300px] items-end mb-0">
            <div>
              <p className="raf text-[#224936] text-xl sm:text-5xl md:text-5xl leading-tight">
                In Hindi,
              </p>
              <p className="fractul-light text-[#224936] text-3xl sm:text-4xl md:text-4xl leading-tight">
                <em className="fractul-medium">SACHA </em>means
              </p>
            </div>
          </div>
        </div>

        {/* Background split section */}
        <div className="relative min-h-[350px] px-4 sm:px-6 flex items-center justify-center">
          <div className="absolute inset-0">
            <div className="h-1/2 bg-transparent" />
            <div className="h-1/2 bg-[#FDA71B]" />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 10 }}
            className="relative text-5xl sm:text-[285px] font-bold text-center text-[#224936] fractul-medium uppercase"
          >
            <em>TRUTHFUL</em>
          </motion.h1>
        </div>

        {/* Orange background text block */}
        <div className="relative min-h-[400px] bg-[#FDA71B] px-4 sm:px-6 overflow-x-hidden">
          <div className="grid grid-cols-[400px_1fr_400px] items-start h-full max-w-7xl mx-auto">
            {/* Left Side */}
            <div className="max-w-[500px] flex flex-col items-start justify-center space-y-6">
              <p className="text-4xl text-white fractul-thin">
                That’s who we are and<br /> what we serve
              </p>
              <p className="text-xl text-white fractul-thin mt-10">
                <span className="text-2xl">Well, fun fact:</span><br />
                The soil should not be sprayed with<br />
                pesticides for at least 3 years to be<br />
                called ORGANIC
              </p>
            </div>

            <div className="flex items-center justify-center" />

            {/* Right Side */}
            <div className="max-w-[500px] flex flex-col items-start justify-center space-y-6">
              <p className="text-4xl text-white fractul-thin leading-snug">
                A blend of <em className="fractul-medium">organically<br />grown</em> and{" "}
                mindfully
                <br />
                <span className="inline-flex items-end">
                  hand-picked leaves
                  <img
                    src="/product/flower.png"
                    alt="flower"
                    className="relative top-4 ms-[-5px] h-10 w-10 inline-block"
                  />
                </span>
              </p>
            </div>


          </div>
        </div>

        {/* Marquee */}
        <div className="relative w-full h-[280px] flex items-center justify-center overflow-hidden bg-transparent mt-[-120px]">
          {/* First marquee */}
          <div className="absolute w-full rotate-[-4deg]">
            <div className="whitespace-nowrap flex animate-marquee text-4xl sm:text-5xl font-bold text-[#FDA71B] bg-white fractul-light uppercase py-4">
              <span className="mx-6">
                100% ORGANIC . ZERO BULLSHIT . 100% ORGANIC . ZERO BULLSHIT .
              </span>
              <span className="mx-6">
                100% ORGANIC . ZERO BULLSHIT . 100% ORGANIC . ZERO BULLSHIT .
              </span>
            </div>
          </div>

          {/* Second marquee */}
          <div className="absolute w-full rotate-[4deg]">
            <div className="whitespace-nowrap flex animate-marquee-reverse text-4xl sm:text-5xl font-bold text-[#FDA71B] bg-white fractul-light uppercase py-4">
              <span className="mx-6">
                100% ORGANIC . ZERO BULLSHIT . 100% ORGANIC . ZERO BULLSHIT .
              </span>
              <span className="mx-6">
                100% ORGANIC . ZERO BULLSHIT . 100% ORGANIC . ZERO BULLSHIT .
              </span>
            </div>
          </div>
        </div>




        <div className="flex-1 flex items-center justify-center h-[1200px]">
          <div className="w-full max-w-7xl grid grid-cols-[490px_1fr_490px] items-center">
            {/* Left side */}
            <div className="flex flex-col items-end justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
                className="mb-10"
              >
                <Image
                  src="/product/bubble.png"
                  alt="Product"
                  width={450}
                  height={450}
                  className="object-contain mt-40"
                  priority
                />
              </motion.div>

            </div>

            <div></div>

            {/* Center product image (animated) */}
            <div className="relative flex items-center justify-center">

              {/* Right side */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
                className="flex flex-col items-start justify-center space-x-12"
              >
                {/* Item 1 */}
                <div className="flex items-center space-x-2">
                  <IoMdClose className="w-16 h-16 text-[#FF1E3C]" />
                  <span className="text-[#224936] text-3xl fractul-light">No Chemicals</span>
                </div>

                {/* Item 2 */}
                <div className="flex items-center space-x-2 my-6">
                  <IoMdClose className="w-16 h-16 text-[#FF1E3C]" />
                  <span className="text-[#224936] text-3xl fractul-light">No artificial<br /> flavouring</span>
                </div>

                {/* Item 3 */}
                <div className="flex items-center space-x-2">
                  <IoMdClose className="w-16 h-16 text-[#FF1E3C]" />
                  <span className="text-[#224936] text-3xl fractul-light">No shortcuts</span>
                </div>
              </motion.div>

            </div>


          </div>
        </div>
      </section>

      {/* ---------------- MOBILE VERSION ---------------- */}
     

      <section className="block md:hidden px-0 pt-20 bg-white pro-gradient">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 12 }}
          className="text-center text-xl text-[#224936] uppercase fractul-light mb-10"
        >
          Avoid drinking <br />
          <span className="uppercase italic fractul-bold text-3xl">pesticides</span>
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 8 }}
          className="text-center text-5xl text-[#224936] raf mb-10"
        >
          Try <br />
          <span className="uppercase italic fractul-bold text-6xl">SACHA</span>
        </motion.h2>

        {/* Center Product */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 10 }}
          className="flex justify-center mb-10"
        >
          <Image
            src="/3/product.png"
            alt="Product"
            width={300}
            height={300}
            className="object-contain"
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 12 }}
          className="text-center text-4xl text-[#224936] raf mb-10"
        >
          Your Same OG <br /> Kadak Chai <br />
          <span className="fractul-light text-3xl">But Organic!</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 10 }}
          className="flex justify-center mb-10"
        >
          <Image
            src="/product/s2.png"
            alt="Product"
            width={250}
            height={250}
            className="object-contain"
          />
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 150, damping: 12 }}
          className="flex justify-center mb-10"
        >
          <button className="px-6 py-2 bg-[#224936] text-white text-xl fractul-light">
            TRY NOW
          </button>
        </motion.div>

        <h2 className="text-center text-4xl text-[#224936] raf mb-10 leading-none">
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
            className="inline-block"
          >
            In Hindi,
          </motion.span>

          <div className="mt-[-4px]">
            <span className="fractul-bold italic text-3xl">SACHA</span>{" "}
            <span className="fractul-light text-3xl">means</span>
          </div>
        </h2>

        {/* Truthful Text */}
        <div className="relative min-h-[45px] px-4 sm:px-6 flex items-center justify-center">
          <div className="absolute inset-0">
            <div className="h-1/2 bg-transparent" />
            <div className="h-1/2 bg-[#FDA71B]" />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 10 }}
            className="relative text-[65px] font-bold text-center text-[#224936] fractul-bold uppercase"
          >
            <em>TRUTHFUL</em>
          </motion.h1>
        </div>

        {/* Marquee + Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 12 }}
          className="relative w-full mt-[-5px] overflow-hidden"
        >
          <div className="bg-[#FDA71B] flex justify-center pb-0">
            <Image
              src="/product/mob.png"
              alt="Product"
              width={380}
              height={380}
              className="object-contain"
            />
          </div>
          {/* Marquee Section (unchanged) */}
          <div className="relative w-full h-[165px] overflow-hidden bg-white">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-[#FDA71B] z-0"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 z-0"></div>
            <div className="absolute w-full rotate-[3deg] top-[25px] z-10">
              <div className="whitespace-nowrap flex animate-marquee text-2xl sm:text-3xl font-bold text-[#FDA71B] bg-[#F3F0E8] uppercase py-3 shadow-md">
                <span className="mx-6">
                  100% ORGANIC . ZERO BULLSHIT . 100% ORGANIC . ZERO BULLSHIT .
                </span>
                <span className="mx-6">
                  100% ORGANIC . ZERO BULLSHIT . 100% ORGANIC . ZERO BULLSHIT .
                </span>
              </div>
            </div>
            <div className="absolute w-full -rotate-[8deg] bottom-[44px] z-5">
              <div className="whitespace-nowrap flex animate-marquee-reverse text-2xl sm:text-3xl font-bold text-[#FDA71B] bg-[#F3F0E8] uppercase py-3 shadow">
                <span className="mx-6">
                  100% ORGANIC . ZERO BULLSHIT . 100% ORGANIC . ZERO BULLSHIT .
                </span>
                <span className="mx-6">
                  100% ORGANIC . ZERO BULLSHIT . 100% ORGANIC . ZERO BULLSHIT .
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Image + Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 130, damping: 10 }}
        >
          <div className="flex md:hidden items-start justify-between pt-0 px-4 bg-white">
            <div className="w-1/2 flex justify-center">
              <Image
                src="/3/product.png"
                alt="Product"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            <div className="w-1/2 space-y-4">
              <div className="flex items-start space-x-2 pt-7">
                <IoMdClose className="w-6 h-6 text-[#FF1E3C]" />
                <span className="text-[#224936] text-base fractul-light">
                  No Chemicals
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <IoMdClose className="w-6 h-6 text-[#FF1E3C]" />
                <span className="text-[#224936] text-base fractul-light">
                  No artificial flavouring
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <IoMdClose className="w-6 h-6 text-[#FF1E3C]" />
                <span className="text-[#224936] text-base fractul-light">
                  No shortcuts
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center bg-white mt-[-32px] ps-[78px] pb-10">
            <Image
              src="/product/bubble2.png"
              alt="Product"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        </motion.div>
      </section>

    </>
  );
}
