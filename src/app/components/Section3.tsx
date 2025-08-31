"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Section3() {
  return (
   <section className="relative w-full overflow-hidden bg-[#F3F0E8]">
  <div className="relative w-full h-auto aspect-[16/9]"> {/* adjust aspect ratio */}
    <Image
      src="/product/Frame-3.png"
      alt="Wellness Image"
      fill
      priority
      className="object-contain"
    />
  </div>
</section>
  );
}
