import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({ name, x, y }) => {
   return (
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-4 shadow-dark cursor-pointer' whileHover={{ scale: 1.2 }}
     initial={{ x: 0, y: 0 }}
     whileInView={{ x: x, y: y }}
     transition={{ duration: 1.5 }}
     viewport={{once: true}}
    >
    {name}
 </motion.div>
   )
}

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center '>
        Skills
      </h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
         <Skill name='web' x='35vw' y='0vw'/>
         <Skill name='css' x='-3vw' y='-10vw'/>
         <Skill name='html' x='-3vw' y='2vw'/>
         <Skill name='Javascript' x='20vw' y='10vw'/>
         <Skill name='Tailwind css' x='-2vw' y='12vw'/>
         <Skill name='Scss' x='-20vw' y='15vw'/>
         <Skill name='webpack' x='-15vw' y='-12vw'/>
         <Skill name='Nextjs' x='-20vw' y='2vw'/>
         <Skill name='DSA' x='0vw' y='2vw'/>
         <Skill name='NodeJS' x='0vw' y='2vw'/>
         <Skill name='Mongodb' x='0vw' y='4vw'/>
         <Skill name='Express' x='0vw' y='6vw'/>
      </div>
    </>
  )
}

export default Skills