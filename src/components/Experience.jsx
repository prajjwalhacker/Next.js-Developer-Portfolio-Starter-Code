import React, { useRef } from 'react'
import { useScroll } from 'framer-motion'
import { motion } from 'framer-motion'
import LiIcon from './LiIcon'


const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return (
        <li className='my-8 first:mt-8 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <LiIcon reference={ref}/>
            <motion.div initial={{ y: 50 }} whileInView={{y :0 }} transition={{ duration: 0.5, type: 'spring' }}>
            <h3 className='captilize font-bold text-2xl'>
                {position}&nbsp;<a href={companyLink}>@<span className='text-primary'>{company}</span></a>
            </h3>
            <span className='captilize font-medium text-dark/75'>
                {time} | {address}
            </span>
            <p className='font-medium w-full'>
                {work}
            </p>
        </motion.div>
        </li>
    )
}

const Experience = () => {
  const ref = useRef(null);
  const {scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "center start"]
  });
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center'>
        Experience
      </h2>
      <div className='w-[75%] mx-auto relative'>
        <motion.div ref={ref} style={{ scaleY: scrollYProgress }} className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top'/>
         <ul className='w-full flex flex-col items-start justify-center ml-4'>
           <Details
               position={'Software Developmet Engineer'}
               company={'Cosmofeed'}
               time={'Nov 2022 - Jan 2024'}
               address={'Gurugram, Harayana'}
               work={'Worked on creating platform for creators and making their life simple, worked on various big features like events, superprofile, telegram dashboard, one on one session, worked as a fullstack developer building things from scratch.'}
           />
           <Details
               position={'Associate Software Engineer'}
               company={'Cogoport'}
               time={'July 2021 - Nov 2022'}
               address={'Gurugram, Haryana'}
               work={'Worked on a team responsible for developing logisitcs platform, worked as a fullstack developer, lead many projects and builded frontend and backend.'}
           />
           <Details
               position={'Software Engineer Intern'}
               company={'Valuefy technologies'}
               time={'Feb 2021 - June 2022'}
               address={'Mumbai, India'}
               work={'Worked on flatting my sql tables into elastic search db and wrote many backend apis in nodejs'}
           />
           <Details
               position={'Problem setter intern'}
               company={'Workat.tech'}
               time={'July 2020 - Sep 2020'}
               address={'Remote work'}
               work={'Created approximately 300 + Questions of DSA, creating most optimal solutions and test case generator.'}
           />
         </ul>
      </div>
    </div>
  )
}

export default Experience