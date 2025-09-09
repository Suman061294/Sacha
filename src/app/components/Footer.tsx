"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#007746] text-white px-6 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 items-center">
        
        {/* Left Side - Logo */}
        <motion.div 
          className="flex flex-col items-center sm:items-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="/logo-white.png"
            alt="Logo"
            width={280}
            height={60}
            className="mb-4"
          />
          <p className="text-sm text-gray-100">
            © {new Date().getFullYear()} www.wellthmind.com. All rights reserved.
          </p>
        </motion.div>

        {/* Center Side - Links + Social Icons */}
        <motion.div 
          className="flex items-start gap-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ul className="space-y-5 mb-6 fractul-thin text-xl">
            <li><a href="#" className="hover:text-gray-200">Home</a></li>
            <li><a href="#" className="hover:text-gray-200">Shop By Category</a></li>
            <li><a href="#" className="hover:text-gray-200">Blogs</a></li>
          </ul>

          <ul className="space-y-5 mb-6 fractul-thin text-xl">
            <li><a href="#" className="hover:text-gray-200">Resources</a></li>
            <li><a href="#" className="hover:text-gray-200">Contact Us</a></li>
            <div className="flex gap-4 pt-3">
              {[
                { icon: <FaLinkedinIn />, label: "LinkedIn" },
                { icon: <FaFacebookF />, label: "Facebook" },
                { icon: <FaInstagram />, label: "Instagram" },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href="#"
                  aria-label={item.label}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-2xl text-[#FFE3E3] hover:text-gray-200 transition-colors duration-200"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </ul>
        </motion.div>

        {/* Right Side - Newsletter */}
        <motion.div 
          className="flex flex-col items-center sm:items-end w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="w-full sm:w-72">
            <input
              type="email"
              placeholder="Enter Number"
              className="w-full bg-transparent border-b text-xl border-white focus:outline-none text-white placeholder-gray-200 py-2"
            />
          </div>
          <div className="text-left mt-4 sm:w-72">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-1 border text-white font-medium hover:bg-green-800 transition fractul-light text-lg"
            >
              JOIN THE GANG
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
