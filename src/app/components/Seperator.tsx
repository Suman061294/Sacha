"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Seperator() {
  return (
   <section className="relative w-full overflow-hidden">
  <div className="relative w-full h-auto aspect-[16/12]"> {/* adjust aspect ratio */}
    <Image
      src="/product/tea.png"
      alt="Wellness Image"
      fill
      priority
      className="object-contain"
    />
  </div>
</section>
  );
}
