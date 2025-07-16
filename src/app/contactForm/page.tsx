'use client'
import React, { useState, useEffect } from 'react';
import { CgProfile } from 'react-icons/cg';
import { FaRegMessage } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';

const page = () => {
    return (
        <form className='bg-[#16161a] h-screen w-full py-10'>
            <div className='text-white text-sm w-[90%] max-w-[500px] mx-auto rounded-xl drop-shadow-white/80 drop-shadow-md'>
                <div className='w-full flex flex-col items-start px-3 py-4 bg-white/10 rounded-xl '>
                    <h1 className='text-lg mx-auto pb-1'>Let's get in touch.🤝</h1>
                    <div className='w-full mt-8 flex flex-col gap-4'>
                        <label className='inline-flex items-center gap-1'>Full Name<span><CgProfile className='size-3.5' /></span></label>
                        <input type="text" className='w-full border-b border-b-emerald-300 focus:outline-none px-1 pb-0.5' />
                    </div>
                    <div className='w-full my-3 flex flex-col gap-4 '>
                        <label className='inline-flex items-center gap-1'>Your Email<span><SiGmail className='size-3.5' /></span></label>
                        <input type="email" className='w-full border-b border-b-emerald-300 focus:outline-none px-1 pb-0.5' />
                    </div>
                    <div className='w-full mb-3 flex flex-col gap-4'>
                        <label className='inline-flex items-center gap-1'>Message<span><FaRegMessage className='size-3.5' /></span></label>
                        <textarea name="" id="" className='w-full border border-emerald-300 rounded-md focus:outline-none px-1 pb-0.5' rows={10}></textarea>
                    </div>
                    <button className='px-4 py-3 cursor-pointer rounded-xl bg-white/80 text-black/90 mx-auto'>Send Message</button>
                </div>
            </div>
        </form>
    )
}

export default page
