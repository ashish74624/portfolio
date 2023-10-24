import React from "react"
import { Fugaz_One } from "next/font/google"
import { Noto_Sans_Javanese } from "next/font/google"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import Arrow from "./Icons/Arrow"


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
    <>
    <main className={`${Nsj.className} h-screen w-screen overflow-x-hidden overflow-y-scroll bg-white `}>
      <section className="w-screen h-96 relative">
        <div className={` w-[70vw] left-40 pt-24 text-5xl text-purple-600 absolute`}>
        <span className={`${fo.className}`}>Hello There !</span> I am Ashish Kumar <br />
          I build interactive full stack websites that run across platforms and devices
        </div>
        <Image className=" w-screen h-96" src={'/1.webp'} width={1500} height={390} alt="Bg" />
      </section>
      <section className=" w-screen bg-purple-600 h-96">
        <div className=" w-[70vw] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-10">
          <div className="lg:col-span-3 md:col-span-2 col-span-1 text-4xl text-gray-900 pb-2">My Projects</div>
          <div className=" w-72 h-64 outline-white hover:outline transition-all rounded-lg hover:outline-4 relative group">
            <span className=" bottom-60 invisible group-hover:visible grid left-[270px] bg-white w-8 ransition-all h-8 place-content-center overflow-visible rounded-full absolute z-10 " ><Arrow/></span>
            <Image className=" rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-72 h-64" src={"https://picsum.photos/200/300"} alt="img" width={300} height={260}/>
            <div className='absolute top-11 w-full h-64 bg-slate-700 opacity-0 bg-opacity-0 group-hover:top-0 group-hover:bg-opacity-50 group-hover:opacity-100 group-hover:transition-all group-hover:duration-300 text-white flex flex-col justify-center items-center rounded-lg'>
              <span>Poloroid</span>
              <span>A social Media website</span>
              <a className="hover:underline" href="/">Github</a>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
