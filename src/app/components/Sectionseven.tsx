"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Sectionseven() {
  return (
    <section className="relative bg-[#FAFAF2] py-16 px-4 sm:py-20 sm:px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-20">
          <span className="text-[#224936] font-light text-4xl sm:text-5xl leading-tight raf">
            Wellness got hijacked.{" "}
            <span className="fractul-medium">
              <em>
                We’re<br /> taking it back.
              </em>
            </span>
          </span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Image */}
          <motion.div
            className="flex-[1.7] relative w-full min-h-[220px] sm:h-[300px] lg:h-[350px] flex items-center justify-center"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 70, damping: 15 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src="/3/v1.png"
              alt="Circle hand"
              fill
              quality={100}
              priority // 👈 helps in mobile rendering
              className="object-cover"
            />
          </motion.div>

          {/* Center Content */}
          <motion.div
            className="flex-[1.5] relative w-full h-auto sm:h-[300px] lg:h-[350px] flex flex-col justify-between"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className="text-[#224936] font-light text-3xl sm:text-4xl leading-tight fractul-medium">
              Stories from the people<br />
              who grow your food
            </h1>

            <div>
              <p className="text-[#224936] font-light text-base sm:text-lg leading-tight fractul-light pb-5">
                While many around him moved toward faster-<br />
                yield, chemical-heavy farming, he chose the<br />
                harder road: staying organic
              </p>

              <p className="text-[#224936] font-light text-base sm:text-lg leading-tight fractul-light pt-5 border-t border-[#224936] mb-4">
                It’s about keeping my land alive for my children.
              </p>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            className="flex-[1] relative w-full h-auto sm:h-[300px] lg:h-[350px] flex flex-col justify-between"
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 70, damping: 15, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Image */}
            <div className="relative w-full h-[200px] sm:h-[230px]">
              <Image
                src="/3/v2.png"
                alt="Circle hand"
                fill
                quality={100}
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div className="text-center mt-4 lg:mt-0">
              <p className="text-[#224936] font-light text-xl sm:text-2xl leading-tight fractul-medium text-left">
                Stories from the people<br />
                who grow your food
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
