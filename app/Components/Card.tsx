import React from 'react'
import Arrow from '../Icons/Arrow'
import Image from 'next/image'

export default function Card() {
  return (
    <div className=" w-72 h-64 outline-white hover:outline transition-all rounded-lg hover:outline-4 relative group">
            <span className=" bottom-60 invisible group-hover:visible grid left-[270px] bg-white w-8 ransition-all h-8 place-content-center overflow-visible rounded-full absolute z-10 " ><Arrow/></span>
            <Image className=" rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-72 h-64" src={"https://picsum.photos/200/300"} alt="img" width={300} height={260}/>
            <div className='absolute top-11 w-full h-64 bg-slate-700 opacity-0 bg-opacity-0 group-hover:top-0 group-hover:bg-opacity-50 group-hover:opacity-100 group-hover:transition-all group-hover:duration-300 text-white flex flex-col justify-center items-center rounded-lg'>
              <span>Poloroid</span>
              <span>A social Media website</span>
              <a className="hover:underline" href="/">Github</a>
            </div>
          </div>
  )
}
