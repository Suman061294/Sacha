"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Sectionfour() {
  return (
    <section className="relative py-12 px-4 sm:py-20 sm:px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side Content */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.3,
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center lg:text-left"
        >
          <h2 className="text-[#007746] font-bold text-4xl sm:text-6xl md:text-7xl leading-tight fractul-medium mb-6">
            Your health <br />
            was marketed!
          </h2>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 240,
              damping: 18,
              delay: 0.5,
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-base sm:text-lg text-[#004728] fractul-light mb-6 max-w-xl mx-auto lg:mx-0"
          >
            No matter how pretty the packet looks, toxins can still seep in. So,
            how do you make sure what you’re buying is truly safe?
            <br />
            <br />
            The easiest way — check for any one or more certifications on the
            label: FSSAI (ensures food safety), India Organic, APEDA, Jaivik
            Bharat (are some to certify the produce is organic).
            <br />
            <br />
            <span className="raf font-normal text-[30px]">
              If it's not certified, it's not worth it.
            </span>
          </motion.p>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 16,
            delay: 0.6,
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative w-full h-[300px] sm:h-[600px]"
        >
          <Image
            src="/3/circle.png"
            alt="Wellness Image"
            fill
            className="object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
