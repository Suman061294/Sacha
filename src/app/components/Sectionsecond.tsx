"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Sectionsecond() {
  return (
    <section className="relative bg-[#FAFAF2] py-16 px-4 sm:py-20 sm:px-6 flex w-full overflow-hidden">
      <div className="max-w-7xl flex flex-col lg:flex-row w-full mx-auto relative">
        <div className="w-full relative">
          {/* Top Row */}
          <motion.div
            initial={{ x: -120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 18,
              delay: 0.4,
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col sm:flex-row items-center sm:items-end sm:space-x-6 text-center sm:text-left"
          >
            <h2 className="text-green-800 font-bold text-5xl sm:text-[110px] leading-tight fractul-medium mb-4 sm:mb-0">
              We are a
            </h2>

            <div className="w-[250px] sm:w-[505px] h-auto mb-4 sm:mb-0">
              <Image
                src="/2-1.png"
                alt="Basket of veggies"
                width={200}
                height={0}
                className="h-auto w-full object-contain"
              />
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ x: 120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 280, // controls speed of bounce
              damping: 16, // less damping = more bounce
              delay: 0.6,
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex flex-col sm:flex-row flex-1 items-center sm:items-center justify-center sm:justify-end sm:space-x-6 mt-8 sm:mt-0 sm:ms-[100px] text-center sm:text-left me-[100px]"
          >
            {/* Circle Image */}
            <motion.div
              initial={{ x: -60, opacity: 0, scale: 0.9 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 320,
                damping: 14,
                delay: 0.6,
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative w-32 h-32 sm:w-46 sm:h-46 rounded-full overflow-hidden mb-6 sm:mb-0"
            >
              <Image
                src="/2-2.png"
                alt="Circle hand"
                fill
                className="object-cover"
              />
            </motion.div>

            <div>
              <h2 className="text-green-800 font-bold text-5xl sm:text-[110px] leading-tight fractul-medium">
                quiet rebellion
              </h2>

              <p className="text-sm sm:text-lg text-[#004728] max-w-xl mt-0 fractul-light px-4 sm:px-0">
                Because we are choosing the harder, slower, cleaner path.
                <br />
                As health should not come with a chemical label.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Zigzag image */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 18,
            delay: 0.8,
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="absolute right-2 sm:right-0 bottom-0 w-[220px] sm:w-[335px] h-[180px] sm:h-[260px] z-50"
        >
          <Image
            src="/4.png"
            alt="Zigzag line wellness"
            fill
            className="object-contain sm:object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
