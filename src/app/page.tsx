'use client'
import AboutSection from "./Components/AboutSection";
import { Header } from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import ProjectsSection from "./Components/ProjectsSection";
import TapeSection from "./Components/TapeSection";

export default function Home() {
    return (
        <div className="bg-[#16161a] min-h-screen text-white relative overflow-x-hidden">
            <div className="w-3/4 max-w-3/4 h-full mx-auto">
                <Header />
                <HeroSection />
                <ProjectsSection />
            </div>
            <TapeSection />
            <div className="w-3/4 max-w-3/4 h-full mx-auto">
                <AboutSection />
            </div>
        </div >
    );
}
