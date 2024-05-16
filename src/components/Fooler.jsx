import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Fooler = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
        <Layout className={'py-8 flex items-center justify-between'}>
            <span>{new Date().getFullYear()} &copy; All Rights reserved.</span>
            <div className='flex items-center'>
            Build with <span className='px-2 text-primary text-2xl'>&hearts;</span><Link href='/'>
              By Prajjwal
            </Link>
            </div>
            <Link href='/' className='underline'>
               Say hello
            </Link>
        </Layout>
    </footer>
  )
}

export default Fooler