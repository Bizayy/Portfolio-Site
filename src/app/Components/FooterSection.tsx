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
        <div className='border-t border-t-emerald-600/80 mt-20 p-5 flex flex-col sm:flex-row items-center justify-between gap-10'>
            <div className="">
                <h2 className='text-sm md:text-base lg:text-lg text-white/50'>
                    <span>&copy; All rights reserved 2025.</span>
                </h2>
            </div>
            <div className="flex items-center gap-5 text-white/90">
                {
                    links.map(link => (
                        <Link key={link.link} href={link.link} className='rounded-full cursor-pointer bg-[#2b2b2b] p-4'>{link.icon} </Link>
                    ))
                }
            </div>

        </div>
    )
}

export default FooterSection
