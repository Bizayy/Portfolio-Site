import Image from "next/image"
import { FaRegHandshake } from "react-icons/fa"
import { GoArrowDown } from "react-icons/go"
import HeroOrbit from "./HeroOrbit"
const HeroSection = () => {
    return (
        <section className='w-full mt-32 md:mt-36 xl:mt-40 relative'>
            <h1 className="text-[50px] leading-14 text-center text-white/90 md:text-left sm:text-[55px] md:text-[64px] xl:text-[84px] tracking-wide font-bold
                w-full">
                FRONTEND DEVELOPER
            </h1>
            <div className="flex flex-col lg:flex-row items-center justify-start gap-6 xl:gap-16">
                <div className="w-[260px] h-[260px] sm:w-[305px] sm:h-[305px] rounded-full overflow-hidden mt-10 relative">
                    <div className="absolute inset-0 rounded-full overflow-hidden border-3 border-dashed border-gray-400/80
                     animate-spin [animation-duration:30s] z-10" />
                    <div className=" rounded-full absolute inset-2 bg-[#e3d6d5]/90 overflow-hidden ">
                        <Image src='/me.png' alt="me" width={1000} height={1000} className="w-80 h-80 sm:w-96 sm:h-96 absolute z-10 object-contain -bottom-14" />
                    </div>
                </div>
                <div className="w-full max-w-96 md:max-w-[500px] lg:w-[58%] xl:w-1/2 mt-5 xl:mt-24 flex flex-col items-start gap-6">
                    <p className="w-full text-center lg:text-left text-xl sm:text-2xl xl:text-2xl text-white/80">
                        Hi, I’m Bizay, <span className="text-lg sm:text-xl xl:text-xl">a frontend enthusiast who loves racking his brain to center a div sometimes.</span>
                    </p>
                    <div className="w-full flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-14 lg:gap-10 text-sm sm:text-base
                        xl:text-lg font-semibold">
                        <button className=" sm:w-auto flex cursor-pointer bg-white/80 text-gray-900/90 rounded-xl px-3 xl:px-6 items-center gap-2 h-12">
                            <span>Let's Connect</span>
                            <FaRegHandshake size={25} className="inline" />
                        </button>
                        <button className=" sm:w-auto text-white/80 flex cursor-pointer ring-1 ring-gray-500/50 rounded-xl px-3 xl:px-6 gap-2 items-center h-12">
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
