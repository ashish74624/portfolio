import React from 'react'
import Image from 'next/image'

export default function Project() {
    
    const projects =[
        {id:1,title:"Solids",stack:"Next js/Kinde Auth",image:"/solids.png"},
        {id:2,title:"Poloroid",stack:"Next js/Express Js/Mongo Db",image:"/poloroid.png"},
        {id:3,title:"Image Drop",stack:"React/Express js/Mongo Db",image:"/img.png"},
        {id:4,title:"UpFront",stack:"Next js",image:"/upfront.png"},
        {id:5,title:"Weather",stack:"React Js",image:"/wether.png"},
    ]

  return (
    <section className='w-[99vw] h-max bg-white overflow-x-hidden overflow-y-scroll flex flex-col items-center mb-10'>
        <h2 className=' my-8 text-4xl text-gray-800 font-semibold underline-offset-8 underline'>
            Projects
        </h2>
        <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
            {projects.map((item)=>(
                <div key={item.id} className=' w-80 md:w-96 h-64 relative group overflow-hidden'>
                <Image className=" w-80 md:w-96 h-64 group-hover:scale-125  transition-all duration-500" src={item.image} alt="" width={400} height={260} />
                <div className='absolute top-11 w-80 md:w-96 h-64 bg-slate-700 opacity-0 bg-opacity-0 group-hover:top-0 group-hover:bg-opacity-50 group-hover:opacity-100 group-hover:transition-all group-hover:duration-300 text-white flex flex-col justify-center items-center text-xl'>
                    <p>{item.title}</p>
                    <button className=' h-10 w-20 mt-4 text-sm bg-[#E31B6D] rounded-lg'>View more</button>
                </div>
            </div> 
            ))}
        </div>
    </section>
  )
}
