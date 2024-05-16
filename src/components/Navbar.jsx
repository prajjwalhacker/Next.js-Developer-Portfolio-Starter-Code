import React from 'react'
import Link from 'next/link'
import { Logo } from './Logo'
import { useRouter } from 'next/router'
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons'
import { motion } from 'framer-motion'

const CustomLink = ({ title, href, className}) => {
   const router = useRouter();
   return (
    <Link href={href} className={`${className} relative group`}>
       {title}
       <span className={`${router.asPath === href ? 'w-full' : 'w-0'} h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300`}>
         &nbsp;
       </span>
    </Link>
   )
}

export const Navbar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex item-center justify-between'>
        <nav>
            <CustomLink href='/' title='Home' className={'mr-4'}/>
            <CustomLink href='/about' title='About'/>
        </nav>
        <nav className='flex items-center justify-center flex-wrap'>
          <motion.a href='https://github.com/prajjwalhacker' target='_blank' whileHover={{ y: -2 }} whileTap={{ scale: 0.9}} className='w-6 mr-3'>
            <GithubIcon/>
          </motion.a>
          <motion.a href='https://www.linkedin.com/in/prajjwal-soni-5b0741291/' target='_blank' whileHover={{ y: -2 }} whileTap={{ scale: 0.9}} className='w-6 mr-3'>
            <LinkedinIcon/>
          </motion.a>
          <motion.a href='/' target='_blank' whileHover={{ y: -2 }} whileTap={{ scale: 0.9}} className='w-6 mr-3'>
            <TwitterIcon/>
          </motion.a>
        </nav>
        <div className='absolute top-2 left-[50%]'>
        <Logo/>
        </div>
    </header>
  )
}
