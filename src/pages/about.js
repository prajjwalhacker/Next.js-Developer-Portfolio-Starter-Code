import Head from 'next/head'
import React from 'react'
import { AnimatedText } from '../pages/index';
import Layout from '@/components/Layout';
import Image from 'next/image';
import profilePic from '../../public/images/profile/Prajjwal.jpeg'
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';


const about = () => {
  return (
    <>
    <Head>
        <title>Prajjwal || About Page</title>
        <meta name='description' description='About Page description'/>
    </Head>
    <main className='flex w-full flex-col items-center justify-center'>
        <Layout className={'pt-16'}>
        <AnimatedText text='Passion fuels Purpose' className={'mb-16'}/>
        <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-3 flex flex-col items-start justify-start'>
                <h2 className='mb-2 text-lg font-bold uppercase text-dark'>Biography</h2>

            <p className='font-medium'>
            👋 Hello, I am Prajjwal, Fullstack Engineer at Gurgaon based startup Cosmofeed , with a passion for technology, startups, and continuous learning. 

🚀 My career is built on a solid foundation of technical expertise and leadership skills. Proficient in a variety of programming languages like Javascript, NodeJS, NextJS, Rubyonrails I have successfully delivered projects that leverage cutting-edge technologies.

🛠️ I have mastered Javascript, NodeJS, NextJs technologies,. My familiarity with databases like MySQL, PostgreSQL, MongoDB adds depth to my skill set.

📚 Beyond the world of code, I love fitness, travelling and gaming.

            </p>
            <p className='font-medium my-4'>
            🎯 Looking ahead, my goal is to continue evolving as an engineering leader. With a strong focus on advancing both technical mastery and people management skills, I aim to play a pivotal role in shaping innovative solutions and fostering growth within organizations.

            </p>
            <p className='font-medium mb-4'>
           
🤝 Let us connect and explore opportunities to collaborate, share insights, and drive meaningful impact in the tech landscape!
            </p>
            </div>
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
                <Image src={profilePic} alt='' className='w-full h-auto rounded-2xl'/>
            </div>
        </div>
        <Skills/>
        <Experience/>
        <Education/>
        </Layout>
    </main>
    </>
  )
}

export default about