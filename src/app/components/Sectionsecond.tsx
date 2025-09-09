"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Sectionsecond() {
  return (
    <section className="relative py-16 px-4 sm:py-20 sm:px-6 flex w-full overflow-x-hidden">
      <div className="max-w-6xl flex flex-col lg:flex-row w-full mx-auto relative">
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
            className="flex flex-col sm:flex-row items-center sm:items-end sm:space-x-6 text-center sm:text-left relative"
          >
            {/* Desktop Heading */}
            <h2 className="hidden sm:block text-[#007746] font-bold text-5xl sm:text-[110px] leading-tight fractul-medium sm:mb-4">
              We are a
            </h2>

            {/* Image Container */}
            <div className="relative w-full sm:w-[505px] h-auto mb-4 sm:mb-0">
              <Image
                src="/2-1.png"
                alt="Basket of veggies"
                width={1000}
                height={0}
                className="h-auto w-full object-contain"
              />

              {/* Mobile Heading absolute inside image */}
              <h2 className="block sm:hidden absolute top-2 right-5 text-[#007746] font-bold text-5xl leading-tight fractul-medium">
                We are a
              </h2>
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
            className="hidden sm:flex flex-1 items-center justify-end sm:space-x-6 mt-8 sm:mt-0 sm:ms-[100px] me-[100px] text-left"

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
                quality={100}
              />
            </motion.div>

            <div>
              <h2 className="text-[#007746] font-bold text-5xl sm:text-[110px] leading-tight fractul-medium">
                quiet rebellion
              </h2>

              <p className="text-sm sm:text-lg text-[#004728] max-w-xl mt-0 fractul-light px-4 sm:px-0">
                Because we are choosing the harder, slower, cleaner path.
                <br />
                As health should not come with a chemical label.
              </p>
            </div>
          </motion.div>


          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 18,
              delay: 0.4,
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex sm:hidden flex-col items-center justify-center px-1 text-center space-y-6 w-full"
          >
            {/* Heading */}
            <h2 className="text-[#007746] font-bold text-5xl leading-tight fractul-medium w-full">
              quiet rebellion
            </h2>

            {/* Row: Image + Paragraph */}
            <div className="flex w-full items-center justify-center gap-4">
              {/* Circle Image - 40% */}
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 14,
                  delay: 0.6,
                }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative w-2/5 aspect-square rounded-full overflow-hidden shadow-lg flex-shrink-0"
              >
                <Image
                  src="/2-2.png"
                  alt="Circle hand"
                  fill
                  className="object-cover"
                  quality={100}
                />
              </motion.div>

              {/* Paragraph - 60% */}
              <p className="text-sm sm:text-base text-[#004728] fractul-light text-left w-3/5">
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
          className="hidden sm:absolute sm:right-0 bottom-0 sm:flex w-[220px] sm:w-[335px] h-[180px] sm:h-[260px] z-50"
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
