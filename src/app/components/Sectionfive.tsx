"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Sectionfive() {
  return (
    <section className="relative py-12 px-0 sm:py-20 sm:px-6 overflow-x-hidden">

      {/* Desktop Version */}
      <div className="hidden lg:grid max-w-7xl mx-auto grid-cols-2 gap-12 items-end">
        {/* Left Side Content */}
        <div className="text-center lg:text-left">
          <motion.h2
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-green-800 font-bold text-2xl sm:text-5xl leading-tight font-space mb-6"
          >
            Clean feels <br />
            different in the body
          </motion.h2>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative w-full h-[300px] sm:h-[350px] flex items-center justify-start overflow-hidden rounded-2xl"
          >
            <Image
              src="/3/peace.png"
              alt="Circle hand"
              fill
              className="object-contain object-center scale-110"
            />
          </motion.div>
        </div>

        {/* Right Side Content */}
        <div className="text-center lg:text-right">
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-[#004728] font-bold text-xl sm:text-3xl leading-tight fractul-light mb-6"
          >
            It’s lighter. Sharper. Like your <br />
            body’s finally being heard.
          </motion.p>

          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[320px]">
            <div className="absolute inset-0 flex flex-col items-end justify-end gap-6 p-0">
              {[
                "It helps reduce toxic load",
                "ease stress",
                "and elevate focus",
              ].map((text, i) => (
                <motion.button
                  key={i}
                  initial={{ x: 80, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 + i * 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="px-6 py-3 rounded-xl bg-[#007746] text-white font-medium shadow-lg hover:bg-green-800 transition raf text-2xl sm:text-4xl w-[90%]"
                >
                  {text}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="block lg:hidden w-full flex flex-col items-center gap-4 px-4 py-8">

        {/* Mobile Text */}
        <motion.h2
          className="text-green-800 font-bold text-3xl sm:text-4xl text-left leading-snug font-space w-full"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Clean feels <br />
          different in the body
        </motion.h2>

        <motion.p
          className="text-[#004728] font-bold text-lg sm:text-xl text-left leading-snug w-full"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          It’s lighter. Sharper. Like your
          body’s finally being heard.
        </motion.p>

        {/* Mobile Image Full Width */}
        <motion.div
          className="relative w-full h-[230px] sm:h-[300px]"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src="/3/peace.png"
            alt="Circle hand"
            fill
            className="object-contain object-center "
          />
        </motion.div>

        {/* Mobile Buttons */}
        <motion.div
          className="flex flex-col gap-4 w-full mt-4"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            "It helps reduce toxic load",
            "ease stress",
            "and elevate focus",
          ].map((text, i) => (
            <button
              key={i}
              className="w-full raf px-6 py-3 rounded-xl bg-[#007746] text-white font-medium shadow-lg hover:bg-green-800 transition text-2xl"
            >
              {text}
            </button>
          ))}
        </motion.div>

      </div>

    </section>
  );
}
