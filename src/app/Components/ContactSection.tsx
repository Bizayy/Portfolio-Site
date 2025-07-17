// import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2'
import { motion } from 'framer-motion'

const ContactSection = ({ scrollRef }: { scrollRef: React.RefObject<HTMLDivElement | null> }) => {

    return (
        <motion.div
            initial={{
                y: 30,
                opacity: 0,
            }}
            whileInView={{
                y: 0,
                opacity: 1,
            }}
            transition={{
                duration: 0.6,
                ease: 'easeIn',
            }}
            viewport={{ once: false, amount: 0.3 }}
        >
            <section ref={scrollRef} className='my-20 p-6 lg:p-7 xl:p-9 flex flex-col md:flex-row items-center gap-6 bg-gradient-to-br from-[#2b2b2b]/90 to-white/20 rounded-3xl
            text-black/90 relative overflow-hidden z-0'>
                <div className='bg-[url(/grain.jpg)] absolute -z-10 opacity-5 inset-0' />
                <div className='flex flex-col justify-center text-center gap-2 md:w-2/3 md:text-left text-white/90'>
                    <h1 className='text-xl lg:text-2xl xl:text-3xl font-openSans font-semibold'>Want to create something together?</h1>
                    <p className='text-sm sm:text-base lg:text-lg'>{"Ready for your next project? Let's connect and discuss how we can make it better."}</p>
                </div>
                <div className='flex md:w-1/3 items-center justify-end'>
                    <Link href='/contactForm' className='w-36 md:w-40 text-gray-900/90 text-sm md:text-base lg:text-lg font-semibold bg-white/90 rounded-xl px-auto py-2 flex
                    items-center justify-center gap-2 hover:scale-[1.05] transition-all duration-500'>
                        Contact me
                        <span><HiOutlineArrowTopRightOnSquare size={16} /></span>
                    </Link>
                </div>
            </section>
        </motion.div>
    )
}

export default ContactSection
