import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <section className='w-screen h-max bg-white overflow-hidden flex flex-col items-center mb-10'>
      <h2 className=' my-8 text-4xl text-gray-800 font-semibold underline-offset-8 underline'>
        About
      </h2>
      <div className=' flex'>
        <Image className=' h-72 w-72 rounded-full' src={"https://picsum.photos/200/300"} alt='Me' height={160} width={160}/>
        <p className=' text-2xl m-6'>Hello there! I&#39;m Ashish Kumar. <br /> I&#39;m full-stack developer from Delhi, India. <br /> Currently pursuing my BTech in Bangalore, <br /> I'm enthusiastic about crafting seamless web solutions. </p>
      </div>
    </section>
  )
}
