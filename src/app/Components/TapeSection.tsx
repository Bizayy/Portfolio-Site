import { HiSparkles } from "react-icons/hi2"

const words = [
    'Accessible',
    'Responsiveness',
    'User Friendly',
    'Interactive',
    'Maintainable',
    'Usable',
    'Reliable',
]

const TapeSection = () => {
    return (
        <div className="py-24 lg:py-44 -mx-1 flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] rotate-6">
            <div className="flex flex-none items-center gap-8 md:gap-10 lg:gap-14 xl:gap-20 xl:tracking-wide text-lg bg-gradient-to-r from-emerald-400 to-sky-500
                py-3">
                {words.map(word => (
                    <div key={word} className="inline-flex items-center gap-2 font-semibold text-sm text-black/70 uppercase md:text-lg">
                        <span>{word}</span>
                        <span><HiSparkles /></span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TapeSection
