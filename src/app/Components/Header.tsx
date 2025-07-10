import React from 'react'
import Link from 'next/link'
export const Header = () => {
    return (
        <nav className='rounded-4xl mt-4 sm:mt-8 max-w-[800px] mx-auto px-4 h-12 lg:h-14 bg-white/20 text-white/80 sm:flex sm:items-center sm:justify-between sm:gap-6
                        '>
            <Link href='#' className='hidden sm:block cursor-pointer'>
                <h1 className='text-2xl md:text-3xl font-bold'>Bizayyy</h1>
            </Link>
            <div className='flex items-center justify-between font-semibold h-full sm:w-[55%] md:w-1/2 md:text-lg lg:text-xl'>
                <Link href='#' className='cursor-pointer sm:hidden'>Home</Link>
                <Link href='#' className='cursor-pointer'>Projects</Link>
                <Link href='#' className='cursor-pointer'>About</Link>
                <Link href='#' className='cursor-pointer'>Contact</Link>
            </div>
        </nav>
    )
}

