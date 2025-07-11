import React from 'react'
import Link from 'next/link'
const navItems = [
    {
        title: 'Projects',
    },
    {
        title: 'About',
    },
    {
        title: 'Contact',
    },
]
export const Header = () => {
    return (
        <nav className='rounded-4xl mt-4 sm:mt-8 max-w-[500px] md:max-w-[600px] xl:max-w-[700px] mx-auto px-4 h-12 lg:h-14 bg-white/20 text-white/80 sm:flex sm:items-center sm:justify-between
            sm:gap-6'>
            <Link href='#' className='hidden sm:block cursor-pointer'>
                <h1 className='text-xl xl:text-2xl font-semibold'>Bizayyy</h1>
            </Link>
            <div className='flex items-center justify-between font-semibold h-full sm:w-[55%] md:w-1/2 text-sm sm:text-base xl:text-lg'>
                <Link href='#' className='cursor-pointer sm:hidden'>Home</Link>
                {
                    navItems.map(item => (
                        <Link key={item.title} href='' className='cursor-pointer'>{item.title}</Link>
                    ))
                }
            </div>
        </nav>
    )
}

