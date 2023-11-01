import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <section className='w-screen h-max bg-white overflow-hidden flex flex-col items-center mb-10'>
      <h2 className=' my-8 text-4xl text-gray-800 font-semibold underline-offset-8 underline'>
        About
      </h2>
      <div className=' flex md:flex-row flex-col mx-0 md:mx-auto md:w-max'>
        <Image className='h-72 w-72 lg:h-72 lg:w-72 md:h-60 md:w-60 rounded-full md:mx-0 mx-auto' src={"https://picsum.photos/200/300"} alt='Me' height={160} width={160}/>
        <p className='text-xl md:text-2xl m-6'>Hello there! I&#39;m Ashish Kumar. <br /> I&#39;m full-stack developer from Delhi, India. <br /> Currently pursuing my BTech in Bangalore, <br /> I&#39;m enthusiastic about crafting seamless web solutions. </p>
      </div>
    </section>
  )
}
