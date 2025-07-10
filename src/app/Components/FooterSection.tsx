import Link from "next/link"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
const FooterSection = () => {
    return (
        <div className='border-t border-t-emerald-600/80 mt-20 p-5 flex flex-col sm:flex-row items-center justify-between gap-10'>
            <div className="">
                <h2 className='text-sm md:text-base lg:text-lg text-white/50'>
                    <span>&copy;</span>
                    <span className='pl-2'>All rights reserved 2025.</span>
                </h2>
            </div>
            <div className="flex items-center gap-5 text-white/90">
                <Link className='rounded-full cursor-pointer bg-[#2b2b2b] p-4' href='https://www.facebook.com/bizayyyy/'><FaFacebook className="size-7 lg:size-8 " /></Link>
                <Link className='rounded-full cursor-pointer bg-[#2b2b2b] p-4' href='https://www.instagram.com/bizayy_/'><FaInstagram className="size-7 lg:size-8" /></Link>
                <Link className='rounded-full cursor-pointer bg-[#2b2b2b] p-4' href='https://www.linkedin.com/in/bizay/'><FaLinkedin className="size-7 lg:size-8" /></Link>
            </div>
        </div>
    )
}

export default FooterSection
