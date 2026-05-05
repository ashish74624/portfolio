import React from 'react'
import { LinkPreview } from '@/components/ui/link-preview';
import Heading from '@/components/Heading';

export default function About() {
    return (
        <section className='w-full min-h-screen h-max z-50 ' id='about'>
            <Heading heading='About Me' />

            <div className='flex lg:flex-row flex-col w-full px-4 md:px-6 lg:px-0 gap-14 mt-10 justify-center'>

                <div className="about-sec">
                    <h1 className='text-white text-4xl'>Get to know Me !</h1>
                    <p className='text-gray-200 mt-5 text-lg text-justify'>

                        I&apos;m a <HightLight text='Software Developer' /> with experience building production-grade, scalable web applications across backend and frontend. Currently working as a Software Engineer Trainee at SYMB, I focus on full-stack development using React and Django, writing clean, modular, and maintainable code.

                        Previously, as an Engineering Intern at PayU, I worked on real-world fintech systems—building async workflows with Celery, designing secure APIs, handling production incidents under SLA, and developing data pipelines for large-scale financial reporting. I&apos;ve also contributed to full-stack systems and reusable UI components during my internships at Surya FinTech and Brandsmite.

                        Check out some of my work in the <LinkPreview url="https://ashish74624.vercel.app/#project" className="font-bold">Projects</LinkPreview> section.
                        <br /><br />
                        I completed my B.E in Information Science and Engineering from <LinkPreview url="http://rnsit.ac.in/" className="font-bold">R.N.S Institute of Technology</LinkPreview>, Bangalore.
                        <br /><br />
                        I&apos;m actively looking for Software Engineering roles where I can build impactful systems, solve real-world problems, and grow as an engineer. If you have an opportunity that aligns with my skills, feel free to <LinkPreview url="https://ashish74624.vercel.app/#contact" className="font-bold">Contact</LinkPreview> me.
                    </p>
                </div>

                <div className='about-sec'>
                    <h1 className='text-white text-4xl'>My Skills</h1>
                    <div className='mt-5 w-full gap-4 flex flex-wrap'>
                        <Card text='HTML' />
                        <Card text='CSS' />
                        <Card text='JavaScript' />
                        <Card text='React' />
                        <Card text='Tailwind Css' />
                        <Card text='React Router' />
                        <Card text='Next Js' />
                        <Card text='Git' />
                        <Card text='Github' />
                        <Card text='Node Js' />
                        <Card text='Express Js' />
                        <Card text='Mongo Db' />
                    </div>
                </div>
            </div>
        </section>
    )
}

interface Props {
    text: string
}

interface CardProps {
    text: string;
}

function HightLight({ text }: Props) {
    return <span className='text-[#89b0ff]'>{text}</span>
}

function Card({ text }: CardProps) {
    return (
        <div className={`bg-zinc-800 text-white border border-blueDash text-xl px-4 py-1 rounded-md`}>
            {text}
        </div>
    )
}