import React, { useRef } from 'react'
import { useScroll } from 'framer-motion'
import { motion } from 'framer-motion'
import LiIcon from './LiIcon'


const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);
    return (
        <li className='my-8 first:mt-8 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <LiIcon reference={ref}/>
            <motion.div initial={{ y: 50 }} whileInView={{y :0 }} transition={{ duration: 0.5, type: 'spring' }}>
            <h3 className='captilize font-bold text-2xl'>
                {type}
            </h3>
            <span className='captilize font-medium text-dark/75'>
                {time} | {place}
            </span>
            <p className='font-medium w-full'>
                {info}
            </p>
        </motion.div>
        </li>
    )
}

const Education = () => {
  const ref = useRef(null);
  const {scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "center start"]
  });
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center'>
        Education
      </h2>
      <div className='w-[75%] mx-auto relative'>
        <motion.div ref={ref} style={{ scaleY: scrollYProgress }} className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top'/>
         <ul className='w-full flex flex-col items-start justify-center ml-4'>
           <Details
              type={'Bachelor Of Technology'}
               time={'2017-2021'}
               place={'National institute of technology Agartala'}
               info={'Taken DSA, OS, worked on Web development as a personal learning.'}
           />
           <Details
              type={'Intermediate, 12th Class Ayodhya'}
               time={'2016'}
               place={'Anil Saraswati vidya mandir School'}
               info={'Science Stream, 84 %'}
           />
           <Details
              type={'10th'}
               time={'2014'}
               place={'Anil Saraswati vidya mandir School'}
               info={'9.2 CGPA'}
           />
         </ul>
      </div>
    </div>
  )
}

export default Education