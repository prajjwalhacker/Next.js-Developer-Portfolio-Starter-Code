"use client"
import React from 'react'
import {  motion } from 'framer-motion'

const quote = {
    initial: {
        opacity: 1
    },
    animate: {
        transition: {
            delay: 0.5
        }
    }
}

const AnimatedText = ({text, className}) => {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden'>
        <h1 className={`inline-block w-full text-dark font-bold captilize text-8xl ${className}`}
        variants={quote}
        initial='initial'
        animate='animate'
        >
            {text.split(" ").map((word, index) => {
                return (
                    <span key={`${word}-${index}`} className='inline-block'>
                        {word}&nbsp;
                    </span>
                )
            })}
        </h1>
    </div>
  )
}

export default AnimatedText