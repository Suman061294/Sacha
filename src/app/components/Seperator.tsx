// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function Seperator() {
//   return (
//    <section className="relative w-full overflow-hidden">
//   <div className="relative w-full h-auto aspect-[16/12]"> {/* adjust aspect ratio */}
//     <Image
//       src="/product/tea.png"
//       alt="Wellness Image"
//       fill
//       priority
//       className="object-contain"
//     />
//   </div>
// </section>
//   );
// }

"use client";

import Image from "next/image";

export default function Seperator() {
  return (
    <>
    <div>



    </div>
    <section className="relative w-full h-[165vh] overflow-hidden">
      <picture>
        {/* Mobile Image */}
        <source srcSet="/product/tea-mob.png" media="(max-width: 768px)" />

        {/* Desktop Image */}
        <Image
          src="/product/tea.png"
          alt="Wellness Image"
          fill
          priority
          className="object-cover" // ensures full coverage
        />
      </picture>
    </section>
    </>
  );
}


