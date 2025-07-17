import React from 'react'
// import { useEffect, useRef, useState } from 'react'
import projects from '../Utils/projects'
import Link from 'next/link'
import Image from 'next/image'
import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2'
import { GoCheckCircle } from 'react-icons/go'
import { motion } from 'framer-motion'

const ProjectsSection = ({ scrollRef }: { scrollRef: React.RefObject<HTMLDivElement | null> }) => {

    // const headingRef = useRef<HTMLHeadingElement>(null);
    // const [isHeadingVisible, setIsHeadingVisible] = useState(false);
    //
    // const divRefs = useRef<HTMLDivElement[]>([]);
    // divRefs.current = [];
    //
    // const [inViewStates, setInViewStates] = useState<boolean[]>(
    //     new Array(projects.length).fill(false)
    // );
    //
    //
    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach((entry) => {
    //             if (entry.target === headingRef.current && entry.isIntersecting) {
    //                 setIsHeadingVisible(true);
    //             }
    //             const refIndex = divRefs.current.findIndex((ref) => ref === entry.target);
    //             if (entry.isIntersecting && refIndex != -1) {
    //                 setInViewStates((prev) => {
    //                     let updatedStateArray = [...prev];
    //                     updatedStateArray[refIndex] = true;
    //                     console.log("updatedStateArray: ", updatedStateArray);
    //                     return updatedStateArray;
    //                 })
    //             }
    //             console.log("inViewStates:", inViewStates);
    //
    //         })
    //     }, { threshold: 0.3 });
    //
    //     if (headingRef.current) observer.observe(headingRef.current);
    //
    //     divRefs.current.forEach((eachDivRef) => {
    //         if (eachDivRef) observer.observe(eachDivRef)
    //     })
    //     //Cleanup
    //
    //     return () => {
    //
    //         if (headingRef.current) observer.unobserve(headingRef.current);
    //
    //         divRefs.current.forEach((eachDivRef) => {
    //             if (eachDivRef) observer.unobserve(eachDivRef)
    //         })
    //     }
    //
    // }, []);

    return (
        <section ref={scrollRef} className='w-full mt-48 xl:mt-40'>
            <motion.h1
                initial={{
                    opacity: 0,
                    y: -20,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.6,
                    ease: 'easeIn'
                }}
                viewport={{ once: false, amount: 0.3 }}
                className={`text-2xl md:text-3xl font-semibold text-center [word-spacing:8px] tracking-wide`}>MY PROJECTS</motion.h1>
            <div className='pb-10 pt-10 text-white/90'>
                {
                    projects.map((project) => (
                        <motion.div key={project.id}
                            // ref={
                            //     (el) => {
                            //     if (el) divRefs.current[idx] = el;
                            // }
                            // }
                            // className={`w-full my-20 h-[670px] sm:h-[650px] md:h-[760px] lg:h-[400px] max-w-[432px] xl:h-[500px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[950px] border-2 border-emerald-800/80 rounded-md py-7 px-5
                            //     drop-shadow-white drop-shadow-md/25 bg-[#2b2b2b]/90 overflow-clip lg:flex items-start justify-start gap-24 lg:pb-0 lg:pr-0 lg:pl-8
                            //     mx-auto z-20 opacity-0 ${inViewStates[idx] ? "opacity-100 animate-slideUp" : ""}`}}

                            className={`w-full my-20 h-[670px] sm:h-[650px] md:h-[760px] lg:h-[400px] max-w-[432px] xl:h-[500px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[950px] border-2 border-emerald-800/80 rounded-md py-7 px-5
                            drop-shadow-white drop-shadow-md/25 bg-[#2b2b2b]/90 overflow-clip lg:flex items-start justify-start gap-24 lg:pb-0 lg:pr-0 lg:pl-8
                            mx-auto z-20`}
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
                            viewport={{ once: false, amount: 0.1 }}
                        >

                            <div className='lg:w-[40%] h-full'>

                                <h2 className='bg-gradient-to-r from-emerald-200 to-sky-400 text-transparent bg-clip-text font-semibold uppercase tracking-wide
                                inline-flex gap-2 md:text-lg lg:text-base xl:text-xl'>
                                    {project.main}
                                    <span>&bull;</span>
                                    <span> {project.year}</span>
                                </h2>

                                <h1 className='text-2xl md:text-3xl lg:text-2xl xl:text-4xl font-semibold font-openSans my-4'>{project.title}</h1>
                                <hr className='text-emerald-800' />
                                <Image src={project.imgSrc} alt={project.title} width={1024} height={688} className='my-7 w-[300px] sm:w-[400px] h-[200px] sm:h-[250px] rounded-lg image-contain
                                md:w-[550px] md:h-[350px] lg:hidden' />

                                <ul className='text-sm md:text-base xl:text-lg lg:mt-4 text-white/80 mb-4 flex flex-col items-start justify-between gap-4'>
                                    {
                                        project.descriptionArray.map((descArr) => (
                                            <li key={descArr.title} className='inline-flex items-start gap-2'>
                                                <span>
                                                    <GoCheckCircle className='size-4 inline' />
                                                </span>
                                                <span>{descArr.title}</span>

                                            </li>
                                        ))
                                    }
                                </ul>
                                <Link href={project.link} className='inline-flex items-center justify-center gap-2 w-full px-auto py-3 text-lg font-semibold
                                rounded-xl bg-white/90 text-gray-900/90 hover:scale-[1.05] transition-all duration-500'>
                                    Visit site
                                    <span><HiOutlineArrowTopRightOnSquare /></span>
                                </Link>
                            </div>

                            <div className='hidden lg:block w-[60%] h-full ml-10 -mr-80'>
                                <Image src={project.imgSrc} alt={project.title} width={1000} height={1000} className='rounded-lg image-contain' />
                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </section>
    )
}

export default ProjectsSection
