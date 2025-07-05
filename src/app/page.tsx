'use client'
import { IoIosStar } from "react-icons/io";
import { Header } from "./Components/Header";
import HeroSection from "./Components/HeroSection";

export default function Home() {
    return (
        <div className="bg-[#16161a] w-screen min-h-screen overflow-hidden text-white relative">
            <div className="w-3/4 h-full mx-auto">
                <Header />
                <HeroSection />
            </div>
            <div className="bg-[url(/grain.jpg)] absolute inset-0 -z-30 opacity-5 " />
            <div className="absolute size-[1100px] top-1/2 -translate-y-1/2 -right-1/2 overflow-y-clip">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[620px] border-2 border-emerald-400/5 rounded-full shadow-[0_0_80px_inset] shadow-emerald-400/10">
                    <div className="absolute inset-0 border-2 border-white animate-spin [animation-duration:30s]">
                        <div className="inline-flex animate-spin [animation-duration:5s]">
                            <IoIosStar size={30} className="text-white/60" />
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[820px] border-2 border-emerald-400/5 rounded-full shadow-[0_0_80px_inset] shadow-emerald-400/10">
                    <div className="absolute inset-0 border-2 border-white">
                        <div className="inline-flex">
                            <IoIosStar size={30} className="text-white/60" />
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[1020px] border-2 border-emerald-400/5 rounded-full shadow-[0_0_80px_inset] shadow-emerald-400/10"></div>
            </div>
        </div >
    );
}
