import React from 'react'
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

const AboutSection = () => {
    return (
        <section className='py-32 z-10'>
            <h1 className='tracking-wide text-2xl sm:text-3xl w-full text-center font-semibold uppercase [word-spacing:8px] my-20'>
                About me
            </h1>

            <div className='flex flex-col lg:flex-row items-center gap-14 lg:gap-5 xl:gap-8 relative z-10'>
                {/* Card */}
                <div className='w-full relative z-30 lg:w-1/2'>
                    <div className='max-w-[360px] md:max-w-[400px] lg:max-w-[364px] xl:max-w-[450px] mx-auto sm:mx-0 sm:w-3/4 lg:w-full'>
                        <div className='h-[320px] rounded-lg border border-emerald-800/80 drop-shadow-white drop-shadow-md/25 py-4 bg-[#2b2b2b]'>
                            <CardHeader icon={<FaTools className='size-6' />} title='My Toolbox' desc='Explore the technologies I use to craft my works.' />

                            <div className='my-5 flex flex-none py-0.5 items-center gap-5 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
                                {toolboxItems.map((item) => (
                                    <div key={item.title} className='inline-flex items-center gap-3 p-2 outline-2 outline-emerald-800/80 rounded-lg'>
                                        <TechIcon component={item.iconType} />
                                        <span>{item.title}</span>
                                    </div>
                                ))}
                            </div>
                            <div className='flex my-5 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] pr-5'>
                                <div className='flex flex-none py-0.5 gap-5 -translate-x-1/2 pr-6'>
                                    {toolboxItems.map((item) => (
                                        <div key={item.title} className='inline-flex items-center gap-3 p-2 outline-2 outline-emerald-800/80 rounded-lg'>
                                            <TechIcon component={item.iconType} />
                                            <span>{item.title}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='hidden sm:block lg:hidden absolute z-20 w-96 h-96 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-emerald-300/30'>
                    <div className='absolute z-20 w-80 h-80 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-sky-300/30'>
                    </div>
                </div>

                <div className='w-full flex justify-center sm:justify-end lg:justify-center lg:w-1/2 relative z-30'>
                    <div className='w-full max-w-[360px] md:max-w-[340px] sm:w-3/4 lg:w-full lg:max-w-[364px] xl:max-w-[450px] h-[320px] rounded-lg border border-emerald-800/80 drop-shadow-white drop-shadow-md/25 py-4 bg-[#2b2b2b] flex flex-col
                items-center gap-5'>
                        <CardHeader icon={<BiCycling className='size-7' />} title='Apart from code' desc='Know what I do besides programming' />

                        <div className='relative w-full h-full'>
                            {hobbies.map((item) => (
                                <div key={item.title} className='inline-flex flex-none px-3 py-1.5 gap-2 rounded-full bg-gradient-to-r from-emerald-300
                                to-sky-400 text-sm absolute' style={{
                                        left: item.left,
                                        top: item.top,
                                    }}>
                                    <span className='font-medium text-gray-900/90'>{item.title}</span>
                                    <span className='size-6'>{item.emote}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default AboutSection
