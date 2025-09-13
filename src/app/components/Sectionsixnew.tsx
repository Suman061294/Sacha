"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const textVariant = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: i * 0.2,
    },
  }),
};

const letterVariant = {
  hidden: { opacity: 0, y: 20, rotate: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 20 },
  },
};

export default function Sectionsixnew() {
  const firstLine = "Your same OG\nKadak Chai";
  const secondLine = "But Organic.";

  const renderText = (text: string) =>
    text.split("").map((char, index) => {
      if (char === "\n") return <br key={index} />;
      return (
        <motion.span key={index} variants={letterVariant}>
          {char}
        </motion.span>
      );
    });

  return (
    <>
      <section className="relative py-12 px-4 sm:py-20 sm:px-6 overflow-hidden h-[110vh] hidden lg:block">
        {/* ✅ Background Image */}
        <Image
          src="/product/hbg.png"
          alt="Background"
          fill
          priority
          quality={100}
          className="object-cover -z-10"
        />

        <div className="flex max-w-7xl mx-auto flex-row gap-12 relative z-10">
          {/* Left Side Content */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 text-left flex flex-col justify-start items-start pt-10 space-y-0"
          >
            <h1 className="text-white font-bold text-8xl sm:text-9xl leading-tight fractul-medium mb-0">
              SACHA
            </h1>
            <p className="text-white text-2xl sm:text-4xl ms-1 fractul-light mt-[-15px]">
              is step one
            </p>

            <p className="text-white text-2xl ms-1 fractul-light my-10">
              No drama. No Jargons.<br />
              Just real Chai as it used to be!
            </p>

            <motion.button
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="px-6 py-3 rounded-xl bg-white text-[#224936] font-medium shadow-lg hover:bg-[#224936] hover:text-white transition fractul-light text-3xl"
            >
              TRY NOW
            </motion.button>
          </motion.div>

          {/* Center Image */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 220, damping: 18, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-[2] relative w-full h-[300px] sm:h-[400px] lg:h-[550px] flex items-center justify-center"
          >
            {/* Add your desktop product image here if needed */}
          </motion.div>

          {/* Right Side Content */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 text-center lg:text-left flex flex-col justify-start gap-4 pt-10"
          >
            <p className="text-white font-light text-4xl sm:text-5xl leading-[40px] raf">
              {renderText(firstLine)}
            </p>

            <p className="text-white font-normal text-4xl leading-tight fractul-light transform rotate-3">
              {renderText(secondLine)}
            </p>
          </motion.div>
        </div>
      </section>



      <section className="relative w-full h-[130vh] overflow-hidden sm:hidden">
        <picture>
          {/* Mobile Image */}
          <source srcSet="/product/hbg-mob.png" media="(max-width: 768px)" />
          <img
            src="/product/1-mob.png"
            alt="Wellness Image"
            className="w-full h-full object-cover"
          />
        </picture>

        {/* Mobile Try Now button */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
          <button className="bg-[#916F46] text-white px-6 py-3 font-semibold fractul-light uppercase hover:text-[#916F46] hover:bg-white">
            Try Now
          </button>
        </div>
      </section>


    </>
  );
}
