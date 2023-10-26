"use client"
import React from 'react'
import { motion } from "framer-motion"


export default function Button() {
  return (
    <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.85}} className=' px-4 py-2 rounded-lg text-lg text-white mx-auto border-white border mt-4 hover:bg-[#E31B6D] transition-all duration-200'>
        View my Work
    </motion.button>
  )
}
