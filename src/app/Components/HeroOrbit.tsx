// import { IoIosStar } from "react-icons/io"
const HeroOrbit = () => {
    return (
        <div className="absolute size-[500px] sm:size-[1100px] left-1/2 -translate-x-1/2 sm:left-auto sm:-translate-x-0 top-1/2 -translate-y-1/2
            sm:-right-[50rem] md:-right-[50rem] xl:-right-1/2 sm:overflow-y-clip z-10">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[620px] border-2 border-emerald-400/5 rounded-full shadow-[0_0_80px_inset] shadow-emerald-400/10">
                {/*
                <div className="absolute inset-0 -rotate-[82deg] animate-spin [animation-duration:20s]">
                    <div className="inline-flex animate-spin [animation-duration:5s]">
                        <IoIosStar size={30} className="text-white/60" />
                    </div>
                </div>
                */}
            </div>
            <div className="absolute inset-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[820px] border-2 border-emerald-400/5 rounded-full shadow-[0_0_80px_inset] shadow-emerald-400/10">
                {/*
                <div className="absolute inset-0  animate-spin [animation-duration:20s] -rotate-[52deg]">
                    <div className="inline-flex animate-spin [animation-duration:5s]">
                        <IoIosStar size={50} className="text-white/60" />
                    </div>
                </div>
                */}
            </div>
            <div className="absolute inset-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[1020px] border-2 border-emerald-400/5 rounded-full shadow-[0_0_80px_inset] shadow-emerald-400/10"></div>
        </div>
    )
}

export default HeroOrbit
