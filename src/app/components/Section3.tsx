"use client";

import Image from "next/image";

export default function Section3() {
  return (
    <section className="relative w-full h-[117vh] overflow-hidden">
      <picture>
        {/* Mobile Image */}
        <source srcSet="/product/Frame-3m.png" media="(max-width: 768px)" />

        {/* Desktop Image */}
        <Image
          src="/product/Frame-3.png"
          alt="Wellness Image"
          fill
          priority
          className="object-cover" // ensures full coverage
        />
      </picture>
    </section>
  );
}

