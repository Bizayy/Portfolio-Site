import React, { useRef } from 'react'
// import { useEffect, useState } from 'react'
import CardHeader from './CardHeader'
import { FaTools } from 'react-icons/fa'
import JavaScriptIcon from '@/assets/icons/square-js.svg'
import HtmlIcon from '@/assets/icons/html5.svg'
import CssIcon from '@/assets/icons/css3.svg'
import ReactIcon from '@/assets/icons/react.svg'
import GithubIcon from '@/assets/icons/github.svg'
import ChromeIcon from '@/assets/icons/chrome.svg'
import TechIcon from './TechIcon'
import { BiCycling } from 'react-icons/bi';
import { motion } from 'framer-motion'

// import gsap from 'gsap'
// import { Draggable, InertiaPlugin } from 'gsap/all'

// gsap.registerPlugin(Draggable, InertiaPlugin);

const toolboxItems = [
    {
        title: 'Javascript',
        iconType: JavaScriptIcon,
    },
    {
        title: 'HTML5',
        iconType: HtmlIcon,
    },
    {
        title: 'CSS3',
        iconType: CssIcon,
    },
    {
        title: 'React',
        iconType: ReactIcon,
    },
    {
        title: 'Github',
        iconType: GithubIcon,
    },
    {
        title: 'Chrome',
        iconType: ChromeIcon,
    },
]

const hobbies = [
    {
        title: 'Gaming',
        emote: '🎮',
        top: '5%',
        left: '5%',
    },
    {
        title: 'Reading Manhwas',
        emote: '📖',
        top: '15%',
        left: '38%',
    },
    {
        title: 'Music',
        emote: '🎵',
        top: '45%',
        left: '60%',
    },
    {
        title: 'Workouts',
        emote: '🏋️',
        top: '40%',
        left: '15%',
    },
    {
        title: 'Cooking',
        emote: '🥘',
        top: '70%',
        left: '5%',
    },
    {
        title: 'Bike Riding',
        emote: '🏍️',
        top: '75%',
        left: '54%',
    }
]

const AboutSection = ({ scrollRef }: { scrollRef: React.RefObject<HTMLDivElement | null> }) => {

    const containerRef = useRef<HTMLDivElement>(null);
    // const itemRefs = useRef<HTMLDivElement[]>([]);

    //Commenting out so that in case in future if I want to do using Gsap, I can refer to these

    // useEffect(() => {
    //     if (containerRef.current && itemRefs.current) {
    //
    //         Draggable.create(itemRefs.current, {
    //             type: 'x,y',
    //             bounds: containerRef.current,
    //             inertia: true,
    //         });
    //     }
    // }, []);


    // const dragConstraintsRef = useRef(null);

    return (
        <section ref={scrollRef} className='my-10 py-10 z-10'>
            <motion.h1 className={`tracking-wide text-2xl md:text-3xl w-full text-center font-semibold uppercase [word-spacing:8px] my-20
                `}
                initial={{
                    opacity: 0,
                    y: -20,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{ duration: 0.6, ease: 'easeIn' }}
                viewport={{ once: false, amount: 0.3 }}
            >
                About me
            </motion.h1>

            <div className='flex flex-col lg:flex-row items-center gap-14 lg:gap-5 xl:gap-8 relative z-10'>
                {/* Card */}
                <motion.div className='w-full relative z-30 lg:w-1/2' initial={{
                    opacity: 0,
                    x: -30,
                }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        duration: 0.6,
                        ease: 'easeIn',
                    }}
                >
                    <div className={`max-w-[360px] md:max-w-[400px] lg:max-w-[364px] xl:max-w-[450px] mx-auto sm:mx-0 sm:w-3/4 lg:w-full`}>
                        <div className='h-[320px] rounded-lg border border-emerald-800/80 drop-shadow-white drop-shadow-md/25 py-4 bg-[#2b2b2b]'>
                            <CardHeader icon={<FaTools className='size-6' />} title='My Toolbox' desc='Explore the technologies I use to craft my works.' />

                            <div className={`flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
                                            `}>
                                <div className='my-5 flex flex-none py-0.5 items-center gap-5 pr-5 animate-tapeMotion'>
                                    {
                                        [...new Array(2)].fill(0).map((_, idx) => (
                                            <div key={idx} className='flex items-center flex-none gap-5'>
                                                {toolboxItems.map((item) => (
                                                    <div key={item.title} className='inline-flex items-center gap-3 p-2 outline-2 outline-emerald-800/80 rounded-lg'>
                                                        <TechIcon component={item.iconType} />
                                                        <span>{item.title}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className={`flex my-5 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] pr-5`}>
                                <div className='flex flex-none py-0.5 gap-5 pr-5 animate-reverseTapeMotion [animation-duration:15s]' >
                                    {
                                        [...new Array(2)].fill(0).map((_, idx) => (
                                            <div key={idx} className='flex flex-none gap-5 '>

                                                {toolboxItems.map((item) => (
                                                    <div key={item.title} className='inline-flex items-center gap-3 p-2 outline-2 outline-emerald-800/80 rounded-lg'
                                                    >
                                                        <TechIcon component={item.iconType} />
                                                        <span>{item.title}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>


                <motion.div className='hidden sm:block lg:hidden absolute z-20 w-96 h-96 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2
                    border-emerald-300/30 animate-slideUp'
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.7,
                        ease: 'easeIn'
                    }} >
                    <div className='absolute z-20 w-80 h-80 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-sky-300/30'>
                    </div>
                </motion.div>

                <motion.div className='w-full flex justify-center sm:justify-end lg:justify-center lg:w-1/2 relative z-40'
                    initial={{
                        opacity: 0,
                        x: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        duration: 0.6,
                        ease: 'easeIn',
                    }}
                >
                    <div className={`w-full max-w-[360px] md:max-w-[400px] sm:w-3/4 lg:w-full lg:max-w-[364px] xl:max-w-[450px] h-[320px] rounded-lg border border-emerald-800/80 drop-shadow-white drop-shadow-md/25 py-4 bg-[#2b2b2b] flex flex-col
                    items-center gap-5`}>
                        <CardHeader icon={<BiCycling className='size-7' />} title='Apart from code' desc='Know what I do besides programming' />

                        <div ref={containerRef} className=' relative w-full h-full'>
                            {hobbies.map((item, idx) => (
                                <motion.div key={item.title} className='inline-flex flex-none px-3 py-1.5 gap-2 rounded-full bg-gradient-to-r from-emerald-300
                                to-sky-400 text-sm cursor-grab absolute' style={{
                                        left: item.left,
                                        top: item.top,
                                    }}
                                    // ref={(el) => {
                                    //     if (el) itemRefs.current[idx] = el
                                    // }}
                                    drag
                                    dragConstraints={containerRef}
                                >
                                    <span className='font-medium text-gray-900/90'>{item.title}</span>
                                    <span className='size-6'>{item.emote}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </motion.div>
            </div>

        </section>
    )
}

export default AboutSection
