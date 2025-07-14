import Link from "next/link"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

const links = [
    {
        link: 'https://www.facebook.com/bizayyyy/',
        icon: <FaFacebook className="size-7 lg:size-8 " />
    },
    {
        link: 'https://www.instagram.com/bizayy_/',
        icon: <FaInstagram className="size-7 lg:size-8 " />
    },
    {
        link: 'https://www.linkedin.com/in/bizay/',
        icon: <FaLinkedin className="size-7 lg:size-8 " />
    },
]
const FooterSection = () => {
    return (
        <div className='border-t border-t-emerald-600/80 mt-20 p-5 flex flex-col sm:flex-row items-center justify-between gap-10 animate-slideUp'>
            <div className="">
                <h2 className='text-sm md:text-base lg:text-lg text-white/50'>
                    <span>&copy; All rights reserved 2025.</span>
                </h2>
            </div>
            <div className="flex items-center justify-center gap-5 text-white/90">
                {
                    links.map(link => (
                        <Link key={link.link} href={link.link} className='p-3 rounded-full ring-gray-300 bg-[#2b2b2b] hover:scale-[1.1] hover:transition-all
                                hover:duration-500 cursor-pointer hover:bg-white/80 hover:text-black/80'>{link.icon} </Link>
                    ))
                }
            </div>

        </div>
    )
}

export default FooterSection
