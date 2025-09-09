"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Section2() {
  return (
    <section className="relative bg-[#F3F0E8] py-12 px-4 sm:py-20 sm:px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Side Content */}
        <motion.div
          className="text-center lg:text-left order-1"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 15,
            duration: 0.6,
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-[#224936] font-bold text-2xl sm:text-4xl md:text-5xl leading-snug fractul-light mb-4 sm:mb-6">
            YOU HAVE BEEN <br />
            <span className="fractul-bold text-3xl sm:text-5xl md:text-6xl">
              <em>SIPPING TOXINS</em>
            </span>
            <br />
            <span className="fractul-medium text-3xl sm:text-5xl md:text-6xl">
              <em>3</em>
            </span>{" "}
            TIMES A DAY
          </h2>

          <p className="text-[#224936] font-normal text-base sm:text-lg leading-snug font-space mb-6">
            You drink chai 3–4 times a day. That’s not a habit. <br />
            That’s a{" "}
            <span className="ms-1 raf text-xl sm:text-4xl underline">
              ritual!
            </span>
          </p>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          className="relative w-full h-[220px] sm:h-[480px] order-2"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 15,
            duration: 0.6,
            delay: 0.2,
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src="/product/2-1.png"
            alt="Wellness Image"
            fill
            className="object-cover rounded-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
