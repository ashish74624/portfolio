import React from "react"
import { Fugaz_One } from "next/font/google"
import { Noto_Sans_Javanese } from "next/font/google"
import Image from "next/image"
import Card from "./Components/Card"


const Nsj = Noto_Sans_Javanese({
  weight:'500',
  subsets:['latin']
})
const fo= Fugaz_One({
  weight:'400',
  subsets:["latin"]
})

export default function Home() {

  const projects = [
    {id:1,title:"Solids",desc:"An Ecommerce website",image:"https://picsum.photos/200/300",link:"https://solids.vercel.app/",github:"https://github.com/ashish74624/Ecommerce"},
    {id:2,title:"Poloroid",desc:"A Social Media website",image:"https://picsum.photos/200/300",link:"https://poloroid.vercel.app/",github:"https://github.com/ashish74624/MERNsocial"},
    {id:3,title:"Image Upload",desc:"Image upload & retrieve website",image:"https://picsum.photos/200/300",link:"https://imagedrop.vercel.app/",github:"https://github.com/ashish74624/ImageUploader"},
    {id:4,title:"Weaher",desc:"A Simple weather website",image:"https://picsum.photos/200/300",link:"https://ashish74624.github.io/weather/",github:"https://github.com/ashish74624/weather"},
    {id:5,title:"Upfront",desc:"A News website",image:"https://picsum.photos/200/300",link:"https://upfront-fawn.vercel.app/",github:"https://github.com/ashish74624/UpFront"}
  ]

  return (
    <>
    <main className={`${Nsj.className} h-max w-screen overflow-x-hidden overflow-y-scroll bg-white `}>
      <section className="w-screen h-96 relative">
        <div className={` w-[70vw] left-40 pt-24 text-5xl text-purple-600 absolute`}>
        <span className={`${fo.className}`}>Hello There !</span> I am Ashish Kumar <br />
          I build interactive full stack websites that run across platforms and devices
        </div>
        <Image className=" w-screen h-96" src={'/1.webp'} width={1500} height={390} alt="Bg" />
      </section>
      <section className=" w-screen bg-purple-600 h-max pb-4">
        <div className=" w-[70vw] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-10 lg:gap-6  gap-4">
          <div className="lg:col-span-3 md:col-span-2 col-span-1 text-4xl text-gray-900 pb-2 ">My Projects</div>
          {projects.map((item)=>(
            <div key={item.id}>
              <Card title={item.title} link={item.link} desc={item.desc} image={item.image} github={item.github}/>
            </div>
          ))}
        </div>
      </section>
    </main>
    </>
  )
}
