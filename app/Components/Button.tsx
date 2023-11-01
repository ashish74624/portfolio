"use client"
import React from 'react'
import { motion } from "framer-motion"


export default function Button() {
  return (
    <a className='inline h-12 w-36 rounded-lg mx-auto' href="#here">
      <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.85}} className=' h-12 w-36 rounded-lg text-lg text-white  border-white border mt-4 hover:bg-[#E31B6D] transition-all duration-200'>
        View more
      </motion.button>
    </a>
  )
}
