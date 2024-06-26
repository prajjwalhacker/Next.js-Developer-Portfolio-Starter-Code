import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-1.png';
import lightbulb from '../../public/images/svgs/miscellaneous_icons_1.svg';
import {motion } from 'framer-motion'
import Link from 'next/link';
import Fooler from '@/components/Fooler';
import { CircularIcon, LightBulb } from '@/components/Icons';
import HIreMe from '@/components/HIreMe';


const quote = {
  initial: {
      opacity: 1,
  },
  animate: {
    opacity: 1,
      transition: {
          delay: 0.5,
          staggerChildren: 0.08
      }
  }
}


const singleQuote = {
  initial: {
      opacity: 0,
      y: 50,
  },
  animate: {
      opacity: 1,
      y: 0,
      transition: {
          delay: 1
      }
  }
}

export const AnimatedText = ({text, className}) => {
return (
  <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden'>
      <motion.h1 className={`inline-block w-full text-dark font-bold captilize text-8xl ${className}`}
      variants={quote}
      initial='initial'
      animate='animate'
      >
          {text.split(" ").map((word, index) => {
              return (
                  <motion.span key={`${word}-${index}`} className='inline-block'
                    variants={singleQuote}
                  >
                      {word}&nbsp;
                  </motion.span>
              )
          })}
      </motion.h1>
  </div>
)
}


export default function Home() {
  return (
    <>
      <Head>
        <title>Prajjwal Soni Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className='flex items-center text-dark min-h-screen w-full'>
       <Layout className={'pt-0'}>
          <div className='flex items-center justify-between w-full'>
           <div className='w-1/2'>
            <Image src={profilePic} alt='codebuck' className='w-full h-auto'/>
           </div>
           <div className='w-1/2 flex flex-col items-center self-center'>
            <AnimatedText text='Turning Vision Into Reality With Code And Design. ' className={'!text-6xl'}/>
            <p className='my-4 text-ase font-medium'>
            As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
Explore my about section, showcasing my expertise in React.js, nextjs and web development.
            </p>
            <div className='flex items-center self-start mt-2'>
              <Link target='_blank' href='https://docs.google.com/document/d/18Y2pCu7ucuoxleHC2REBmwG2BRLuB2HCeCOIPu-xccU/edit?usp=sharing' className='flex items-center bg-dark text-light px-6 py-2 rounded-lg text-bg font-semibold hover:bg-light hover:text-dark border border-dark' download={true}>
                Resume
              </Link>
              <Link href='mailto:prajjwalsoni123@gmail.com' className='ml-2'>
                 Contact us
              </Link>
            </div>
           </div>
          </div>
       </Layout>
      </main>
      <HIreMe/>
      <div className='absolute right-8 bottom-8 inline-block w-24'>
        <Image src={lightbulb} alt='codeblock' className='w-full h-auto'/>
      </div>
      <Fooler/>
    </>
  )
}
