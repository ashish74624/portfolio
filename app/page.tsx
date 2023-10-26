import React from "react"
import { Fugaz_One } from "next/font/google"
import { Noto_Sans_Javanese } from "next/font/google"
import Button from "./Components/Button"


const Nsj = Noto_Sans_Javanese({
  weight:'500',
  subsets:['latin']
})
const fo= Fugaz_One({
  weight:'400',
  subsets:["latin"]
})

export default function Home() {

  return (
    <main className='bg-[#0F172A] h-screen w-screen overflow-x-hidden overflow-y-scroll relative flex justify-center items-center'>
        <div className='bg-[#6a8bd7] absolute  w-80 h-80 rounded-full blur-lg bottom-[75vh] right-[85vw] animate-pulse hover:w-96 hover:h-96 transition-all'></div>
        <div className={` w-[2px] h-[500px] bg-white absolute top-0 right-0 rotate-45 origin-top `}></div>
        <div className=" w-[2px] h-[500px] bg-white absolute top-[50vh] rotate-45 left-[351px] origin-top"></div>
        <div className='bg-[#E31B6D] absolute  w-20 h-20 rounded-full blur-md animate-bounce bottom-1 right-4'></div>
        <div className='z-10 flex flex-col justify-center w-max h-max border-white border rounded-lg px-10 py-8 relative '>
            <span className=' w-4 h-4 rounded-full bg-white absolute bottom-[194px] left-[609px] animate-ping'></span>
            <p className='text-white text-4xl w-max '>
                Hello There, <span className='text-[#E31B6D]'>I'm Ashish Kumar</span>. <br />
                I am a full stack web Developer.
            </p>
            <Button/>
        </div>  
    </main>
  )
}