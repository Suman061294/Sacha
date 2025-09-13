"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbarlight from "../components/Navbarlight";

const categories = [
  "All",
  "Career & Growth",
  "Conversations",
  "Process",
  "Product",
  "UI Design",
  "UX Design",
];

const blogPosts = [
  {
    id: 1,
    category: "UI Design",
    tag: "Color",
    title: "10 important Color principles for beginners",
    date: "5 Aug, 2022",
    image: "/blog/1.jpg",
    height: "h-60",
  },
  {
    id: 2,
    category: "UX Design",
    tag: "Process",
    title: "Stop Struggling with Your Data Tables",
    date: "3 Aug, 2022",
    image: "/blog/2.jpg",
    height: "h-80",
  },
  {
    id: 3,
    category: "UI Design",
    tag: "Product",
    title: "Make your interfaces easily scannable",
    date: "3 Aug, 2022",
    image: "/blog/1.jpg",
    height: "h-72",
  },
  {
    id: 4,
    category: "UX Design",
    tag: "Product",
    title: "Boost UX with accessibility in mind",
    date: "2 Aug, 2022",
    image: "/blog/2.jpg",
    height: "h-96",
  },
  {
    id: 5,
    category: "UX Design",
    tag: "Product",
    title: "Boost UX with accessibility in mind",
    date: "2 Aug, 2022",
    image: "/blog/1.jpg",
    height: "h-96",
  },
  {
    id: 6,
    category: "UX Design",
    tag: "Product",
    title: "Boost UX with accessibility in mind",
    date: "2 Aug, 2022",
    image: "/blog/2.jpg",
    height: "h-96",
  },
  {
    id: 7,
    category: "UX Design",
    tag: "Product",
    title: "Boost UX with accessibility in mind",
    date: "2 Aug, 2022",
    image: "/blog/1.jpg",
    height: "h-96",
  },
];

export default function BlogPage() {
  const blogRef = useRef<HTMLDivElement>(null);


  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-white text-zinc-800">
      {/* 🚀 Hero Section */}
      <div className="relative min-h-[85vh] sm:min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 bg-animated">
        <Navbarlight />

        {/* Floating Light Blobs */}
        <motion.div
          className="absolute w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-20"
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          style={{ top: "10%", left: "8%" }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-yellow-300 rounded-full blur-3xl opacity-20"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
          style={{ bottom: "12%", right: "10%" }}
        />

        {/* Headline */}
        <motion.h1
          className="text-center font-extrabold fractul-light text-[#224936] leading-tight z-10 mt-12 
               text-4xl sm:text-6xl lg:text-7xl max-w-2xl tracking-tight drop-shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Sip, Savor, Discover <br />
          <span className="fractul-medium bg-gradient-to-r from-[#FDA71B] via-[#FF7E5F] to-[#FDA71B] bg-clip-text text-transparent animate-gradient-text">
            The World of Tea Awaits
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-6 text-lg sm:text-xl lg:text-2xl text-zinc-700 text-center z-10 fractul-thin max-w-xl drop-shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          From delicate white teas to robust black blends, explore brewing tips,<br className="hidden sm:block" />
          health benefits, and the stories behind every cup.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          className="mt-8 px-8 py-4 bg-[#224936] text-white rounded-full font-medium shadow-xl 
             hover:bg-[#163026] transition z-10 text-lg sm:text-xl tracking-wide fractul-light"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => blogRef.current?.scrollIntoView({ behavior: "smooth" })}
        >
          Get Started
        </motion.button>

      </div>



      {/* 🚀 Blog Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Categories */}
        <motion.div
          className="flex flex-wrap gap-4 border-b pb-4 mb-6 text-sm font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded-full transition ${activeCategory === cat
                ? "bg-purple-600 text-white"
                : "bg-zinc-100 hover:bg-zinc-200"
                }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div ref={blogRef}
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {filteredPosts.map((post, i) => (
            <motion.div
              key={post.id}
              className="break-inside-avoid bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className={`relative w-full ${post.height}`}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <span className="bg-zinc-100 px-2 py-0.5 rounded-full">
                    {post.category}
                  </span>
                  <span>{post.tag}</span>
                  <span>• {post.date}</span>
                </div>
                <h3 className="font-semibold text-lg">{post.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Footer />
    </div>

  );
}
