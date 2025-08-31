"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // icons

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    return (
        <nav className="absolute top-[40px] left-0 w-full bg-transparent py-4 z-50">
            {/* Container */}
            <div className="max-w-[1300px] mx-auto px-6 lg:px-20 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Image
                        src="/logo-white.png"
                        alt="Logo"
                        width={200}
                        height={80}
                        className="w-[150px] h-auto sm:w-[160px] md:w-[230px]"
                    />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-white font-medium font-space">
                    <a href="#">Home</a>

                    {/* Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setDropdown(!dropdown)}
                            className="hover:text-gray-300"
                        >
                            Shop By Category ▾
                        </button>

                        <AnimatePresence>
                            {dropdown && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute right-0 mt-2 w-40 rounded-lg bg-white text-black shadow-lg overflow-hidden font-medium font-sans"
                                >
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                        Web Design
                                    </a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                        Development
                                    </a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                        Marketing
                                    </a>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <a href="#">Blogs</a>
                    <a href="#">Contact Us</a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-white focus:outline-none"
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed top-0 right-0 w-[70%] max-w-sm h-full bg-zinc-900 text-white shadow-lg flex flex-col p-6 z-50"
                    >
                        {/* Close Button */}
                        <div className="flex justify-between items-center mb-6">
                            <Image src="/logo-white.png" alt="Logo" width={140} height={60} />
                            <button onClick={() => setOpen(false)}>
                                <X size={28} />
                            </button>
                        </div>

                        <a href="#" className="py-3 border-b border-zinc-700">
                            Home
                        </a>

                        <button
                            onClick={() => setDropdown(!dropdown)}
                            className="py-3 flex justify-between items-center border-b border-zinc-700 w-full"
                        >
                            Shop By Category ▾
                        </button>
                        {dropdown && (
                            <div className="pl-4 flex flex-col gap-2 mt-2">
                                <a href="#" className="py-2 hover:text-gray-300">
                                    Web Design
                                </a>
                                <a href="#" className="py-2 hover:text-gray-300">
                                    Development
                                </a>
                                <a href="#" className="py-2 hover:text-gray-300">
                                    Marketing
                                </a>
                            </div>
                        )}

                        <a href="#" className="py-3 border-b border-zinc-700">
                            Blogs
                        </a>
                        <a href="#" className="py-3 border-b border-zinc-700">
                            Contact Us
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
