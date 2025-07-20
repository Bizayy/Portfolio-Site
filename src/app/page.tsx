'use client'
import { useRef } from "react";
import AboutSection from "./Components/AboutSection";
import ContactSection from "./Components/ContactSection";
import FooterSection from "./Components/FooterSection";
import { Header } from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import ProjectsSection from "./Components/ProjectsSection";
import TapeSection from "./Components/TapeSection";

export default function Home() {
    const projectsRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);
    const homeRef = useRef<HTMLDivElement>(null);
    const scrollToHome = () => {
        homeRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
    const scrollToProjects = () => {
        projectsRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
    const scrollToAbout = () => {
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
    const scrollToContact = () => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div className="bg-[#16161a] min-h-screen text-white relative overflow-hidden" ref={homeRef}>
            <div id="#home" className="w-3/4 max-w-3/4 h-full mx-auto" >
                <Header
                    onScrollToProjects={scrollToProjects}
                    onScrollToAbout={scrollToAbout}
                    onScrollToContact={scrollToContact}
                    onScrollToHome={scrollToHome}
                />
                <HeroSection
                    onScrollToContact={scrollToContact}
                    onScrollToProjects={scrollToProjects}
                />
                <ProjectsSection scrollRef={projectsRef} />
            </div>
            <TapeSection />
            <div className="w-3/4 max-w-3/4 h-full mx-auto">
                <AboutSection scrollRef={aboutRef} />
                <ContactSection scrollRef={contactRef} />
                <FooterSection />
            </div>
        </div >
    );
}
