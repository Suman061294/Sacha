"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Sectionseven() {
  return (
    <section className="relative py-12 px-4 sm:py-20 sm:px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-5 sm:mb-15">
          <span className="text-[#224936] font-light text-4xl sm:text-6xl leading-[45px] sm:leading-[60px] raf">
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
            className="flex-[1.5] relative w-full min-h-[220px] sm:h-[300px] lg:h-[350px] flex items-center justify-center"
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
            <h1 className="text-[#224936] font-light text-3xl sm:text-4xl leading-[40px] fractul-medium">
              Stories from the people<br />
              who grow your food
            </h1>

            <div>
              <div className="flex items-start gap-3 pb-5">
                {/* Bullet */}
                <span className="w-2 h-2 mt-2 bg-[#224936] rounded-full flex-shrink-0"></span>

                {/* Text */}
                <p className="text-[#224936] font-light text-base sm:text-lg leading-tight fractul-thin">
                  While many around him moved toward faster-
                  yield, chemical-heavy farming, he chose the
                  harder road: staying organic
                </p>
              </div>



              <div className="flex items-start gap-3 pt-5 border-t border-[#224936] mb-4">
                {/* Bullet */}
                <span className="w-2 h-2 mt-2 bg-[#224936] rounded-full flex-shrink-0"></span>

                {/* Text */}
                <p className="text-[#224936] font-light text-base sm:text-lg leading-tight fractul-thin">
                  It’s about keeping my land alive for my children.
                </p>
              </div>

            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            className="flex-[1.1] relative w-full h-auto sm:h-[300px] lg:h-[350px] flex flex-col justify-between"
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 70, damping: 15, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Image */}
            <div className="relative w-full h-[200px] sm:h-[240px]">
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
              <p className="text-[#224936] font-light text-xl sm:text-[1.8rem] leading-tight fractul-medium text-left">
                Stories from the people<br />
                who grow your food
              </p>
            </div>
          </motion.div>
        </div>





        <div className="flex flex-col lg:flex-row gap-10 py-10 sm:py-0">
          {/* Center Content */}
          <motion.div
            className="flex-[1.5] relative w-full h-auto sm:h-[300px] lg:h-[350px] flex items-center justify-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <button className="w-full sm:w-auto px-16 py-3 rounded-md bg-[#224936] text-white font-medium shadow-lg hover:bg-white hover:text-[#224936] hover:border transition fractul-light text-xl">
              Read our food stories
            </button>
          </motion.div>
        </div>



      </div>
    </section>
  );
}
