import Heading from '@/components/Heading';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import React from 'react'

export const projects = [
    {
        title: "PayU",
        description: "Engineering Intern",
        img: "/payu.webp",
        subText: "Aug 2025 - Current",
    },
    {
        title: "Surya Fintech",
        description: "SDE Intern",
        img: "/surya.png",
        subText: "Feb 2025 - Aug 2025",
    },
    {
        title: "Brandsmite",
        description: "Intern",
        img: "/brandsmite.png",
        subText: "Feb 2024 - Aug 2024",
    }
];


export default function Experience() {


    return (
        <section className=' w-full flex flex-col z-50' id='project'>
            <Heading heading='Work Experience' />
            <div className="max-w-5xl h-max mx-auto ">
                <HoverEffect items={projects} />
            </div>
        </section>
    )
}
