"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { IoMdClose } from "react-icons/io";

export default function Section4() {
  const ref = useRef<HTMLDivElement>(null);

  // Track scroll progress relative to Section4
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Product image animation
  // move the product through almost the whole section height
  const y = useTransform(scrollYProgress, [0, 1], ["0px", "215vh"]);

  const rotate = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], ["0deg", "-15deg", "-15deg", "0deg"]);


  // Left image + button rotate left
  const leftRotate = useTransform(scrollYProgress, [0, 0.3], ["0deg", "-10deg"]);

  // Right image rotate right
  const rightRotate = useTransform(scrollYProgress, [0, 0.3], ["0deg", "10deg"]);



  return (
    <section
      ref={ref}
      className="relative min-h-[200vh] py-10 overflow-hidden flex flex-col justify-between"
    >
      {/* Title */}
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


    </section >
  );
}
