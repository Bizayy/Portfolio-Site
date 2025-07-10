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
                <span className="text-2xl font-semibold">{title}</span>
            </h1>
            <p className='text-white/80'>{desc}</p>
        </div>
    )
}

export default CardHeader
