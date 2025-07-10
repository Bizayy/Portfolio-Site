import { ReactNode } from "react"

type propsType = {
    icon: ReactNode;
    title: string;
    desc: string;
}
const CardHeader = ({ icon, title, desc }: propsType) => {
    return (
        <div className="flex flex-col items-center justify-center gap-5 px-6">
            <h1 className="inline-flex gap-3 font-openSans">
                <span className="text-white/80">{icon}</span>
                <span className="text-2xl sm:text-3xl xl:text-4xl font-semibold">{title}</span>
            </h1>
            <p className='text-white/80 text-sm sm:text-base xl:text-lg'>{desc}</p>
        </div>
    )
}

export default CardHeader
