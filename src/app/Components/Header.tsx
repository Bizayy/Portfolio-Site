import Link from 'next/link'

export const Header = ({ onScrollToProjects, onScrollToAbout, onScrollToContact }: {
    onScrollToProjects: () => void;
    onScrollToAbout: () => void;
    onScrollToContact: () => void
}) => {


    const navItems = [
        {
            title: 'Projects',
            onScroll: onScrollToProjects,
        },
        {
            title: 'About',
            onScroll: onScrollToAbout,
        },
        {
            title: 'Contact',
            onScroll: onScrollToContact,
        },

    ]
    return (
        <nav className={`rounded-4xl mt-4 w-3/4 sm:mt-8 max-w-[400px] sm:max-w-[500px] md:max-w-[600px] xl:max-w-[700px] px-4 h-12 lg:h-14 bg-white/20 text-white/80 sm:flex sm:items-center sm:justify-between
            sm:gap-6 z-50 animate-slideDown backdrop-blur-sm fixed top-0 left-1/2 -translate-x-1/2`}>
            <Link href='#home' className='hidden sm:block cursor-pointer'>
                <h1 className='text-xl xl:text-2xl font-semibold z-10 text-emerald-200 hover:bg-gradient-to-r hover:from-emerald-300 hover:to-sky-400 hover:text-transparent
                    hover:bg-clip-text'>Bizayyy</h1>
            </Link>
            <div className='flex items-center justify-between font-semibold h-full sm:w-[55%] md:w-1/2 text-sm sm:text-base xl:text-lg'>
                <button className='cursor-pointer sm:hidden hover:text-white z-20 group'>
                    <span>Home</span>
                    <div className='group-hover:w-full w-0 transition-all duration-500 h-0.5 bg-gradient-to-r from-emerald-300 to-sky-300'></div>
                </button>
                {
                    navItems.map(item => (
                        <button key={item.title} onClick={item.onScroll} className='cursor-pointer hover:text-white z-20 group'>
                            <span className=''>{item.title}</span>
                            <div className='group-hover:w-full w-0 transition-all duration-500 h-0.5 bg-gradient-to-r from-emerald-300 to-sky-300 '></div>
                        </button>
                    ))
                }
            </div>
        </nav>
    )
}

