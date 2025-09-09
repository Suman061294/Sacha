"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // ✅ use Link
import { Menu, X } from "lucide-react";

export default function Navbarlight() {
    const [open, setOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    return (
        <nav className="absolute top-[40px] left-0 w-full bg-transparent py-4 z-50">
            {/* Container */}
            <div className="max-w-[1300px] mx-auto px-6 lg:px-20 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={200}
                            height={80}
                            className="w-[150px] h-auto sm:w-[160px] md:w-[230px]"
                        />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-[#224936] font-medium font-space text-lg">
                    <Link href="/" className="hover:text-[#FDA71B]">Home</Link>

                    {/* Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setDropdown(!dropdown)}
                            className="hover:text-[#FDA71B]"
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
                                    className="absolute right-0 mt-2 w-60 bg-white rounded-lg shadow-lg p-3 font-sans"
                                >
                                    {/* Title above the card */}
                                    <div className="mb-2">
                                        <span className="text-green-800 text-sm sm:text-base font-medium uppercase tracking-wider">
                                            Your Everyday Tea
                                        </span>
                                        <div className="h-1 w-16 bg-green-400 rounded-full mt-1" />
                                    </div>

                                    {/* Sacha Card as Link */}
                                    <Link href="/sacha">
                                        <div className="flex flex-col px-2 py-2 bg-[#E6F7FF] rounded-lg shadow-md mb-2 cursor-pointer hover:bg-[#D0F0FF] transition">
                                            <div className="flex items-center gap-4">
                                                <img
                                                    src="/3/product.png"
                                                    alt="Product"
                                                    className="w-[40px] h-auto object-cover rounded-md"
                                                />
                                                <div className="flex flex-col leading-[20px]">
                                                    <span className="text-lg font-semibold text-green-800 fractul-light">
                                                        Sacha
                                                    </span>
                                                    <span className="text-xl text-green-600 raf mt-[-5px]">
                                                        Your Kadak Chai!
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link className="hover:text-[#FDA71B]" href="/blog">Blog</Link>
                    <Link className="hover:text-[#FDA71B]" href="/contact">Contact Us</Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-[#224936] focus:outline-none"
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
                            <Link href="/">
                                <Image src="/logo-white.png" alt="Logo" width={140} height={60} />
                            </Link>
                            <button onClick={() => setOpen(false)}>
                                <X size={28} />
                            </button>
                        </div>

                        <Link href="/" className="py-3 border-b border-zinc-700">
                            Home
                        </Link>

                        {/* Shop By Category Button */}
                        <button
                            onClick={() => setDropdown(!dropdown)}
                            className="py-3 flex justify-between items-center border-b border-zinc-700 w-full"
                        >
                            Shop By Category
                            <span className={`transition-transform ${dropdown ? "rotate-180" : ""}`}>▾</span>
                        </button>

                        {/* Dropdown Content */}
                        <AnimatePresence>
                            {dropdown && (
                                <motion.div
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -5 }}
                                    transition={{ duration: 0.25 }}
                                    className="mt-3 space-y-3"
                                >
                                    {/* Title */}
                                    <div>
                                        <span className="text-green-400 text-sm font-semibold uppercase tracking-wide">
                                            Your Everyday Tea
                                        </span>
                                        <div className="h-[2px] w-14 bg-green-400 rounded-full mt-1" />
                                    </div>

                                    {/* Sacha Card */}
                                    <Link href="/sacha">
                                        <div className="flex items-center gap-4 p-3 bg-[#E6F7FF] rounded-lg shadow-md hover:bg-[#D0F0FF] transition cursor-pointer">
                                            <img
                                                src="/3/product.png"
                                                alt="Product"
                                                className="w-8 h-full object-cover rounded-md"
                                            />
                                            <div className="flex flex-col">
                                                <span className="text-lg font-semibold text-green-800 fractul-light">
                                                    Sacha
                                                </span>
                                                <span className="text-sm text-green-600 raf leading-snug">
                                                    Your Kadak Chai!
                                                </span>
                                            </div>
                                        </div>
                                    </Link>

                                   
                                </motion.div>
                            )}
                        </AnimatePresence>



                        <Link href="/blog" className="py-3 border-b border-zinc-700">
                            Blogs
                        </Link>
                        <Link href="/contact" className="py-3 border-b border-zinc-700">
                            Contact Us
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
