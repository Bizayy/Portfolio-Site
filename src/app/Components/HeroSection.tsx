import Image from "next/image"
import { FaRegHandshake } from "react-icons/fa"
import { GoArrowDown } from "react-icons/go"
import HeroOrbit from "./HeroOrbit"
import { motion } from "framer-motion"


const HeroSection = () => {


    const renderLetters = (name: string) => {
        if (!name) return;
        return name.split('').map((letter, idx) => (
            <motion.span key={idx} className="inline-block uppercase"
                initial={{
                    x: -100,
                    opacity: 0,
                    rotate: -10,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    rotate: 0,
                }}
                transition={{
                    duration: 1,
                    ease: [0.68, -0.55, 0.265, 1.55], // Similar to elastic.out
                    delay: idx * 0.2, // Stagger effect
                }}
                style={{
                    transformOrigin: 'left top'
                }}
            >
                {letter === " " ? "\u00A0" : letter}
            </motion.span>
        ));

    }



    return (
        <section className='w-full mt-32 md:mt-36 xl:mt-40 relative'>
            <h1 className="text-[50px] leading-14 text-center text-white/90 md:text-left sm:text-[55px] md:text-[64px] xl:text-[84px] tracking-wide font-bold
                w-full flex flex-col items-center lg:flex-row">
                <div className="">
                    {renderLetters("frontend ")}
                </div>
                <div className="mt-1">
                    {renderLetters("developer")}
                </div>
            </h1>
            <div className="flex flex-col lg:flex-row items-center justify-start gap-6 xl:gap-16">
                <div className="w-[260px] h-[260px] sm:w-[305px] sm:h-[305px] rounded-full overflow-hidden mt-10 relative animate-slideDown lg:animate-slideRight">
                    <div className="absolute inset-0 rounded-full overflow-hidden border-3 border-dashed border-gray-400/80
                     animate-spin [animation-duration:30s] z-10" />
                    <div className=" rounded-full absolute inset-2 bg-[#e3d6d5]/90 overflow-hidden z-20">
                        <Image src='/me.png' alt="me" width={1000} height={1000} className="w-80 h-80 sm:w-96 sm:h-96 absolute object-contain -bottom-14" />
                    </div>
                </div>
                <div className="w-full max-w-96 md:max-w-[500px] lg:w-[58%] xl:w-1/2 mt-5 xl:mt-24 flex flex-col items-start gap-6 animate-slideDown lg:animate-slideLeft">
                    <p className="w-full text-center lg:text-left text-xl sm:text-2xl xl:text-2xl text-white/80">
                        Hi, I’m Bizay, <span className="text-lg sm:text-xl xl:text-xl">a frontend enthusiast who loves racking his brain to center a div sometimes.</span>
                    </p>
                    <div className="w-full flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-14 lg:gap-10 text-sm sm:text-base
                        xl:text-lg font-semibold z-20">
                        <button className=" sm:w-auto flex cursor-pointer bg-white/80 text-gray-900/90 rounded-xl px-3 xl:px-6 items-center gap-2 h-12
                            hover:scale-[1.05] transition-all duration-500">
                            <span>Let's Connect</span>
                            <FaRegHandshake size={25} className="inline" />
                        </button>
                        <button className="hover:scale-[1.05] transition-all duration-500 sm:w-auto text-white/80 flex cursor-pointer ring-1 ring-gray-500/50 rounded-xl px-3
                            xl:px-6 gap-2 items-center h-12">
                            <span>Explore my works</span>
                            <GoArrowDown size={25} className="inline" />
                        </button>
                    </div>
                </div>
            </div>
            {/* Top glow */}
            {/*
            <div className="w-[680px] h-[680px] rounded-full bg-[radial-gradient(circle_at_center,rgba(242,224,223,0.9)_0%,rgba(242,224,223,0.3)_40%,transparent_60%)]
                absolute -left-60 xl:-left-40 -top-[105%] sm:-top-[110%] lg:-top-[170%]" />*/}
            <div className="bg-[url(/grain.jpg)] absolute inset-0 -z-10 opacity-5 " />
            <HeroOrbit />
        </section>
    )
}

export default HeroSection
