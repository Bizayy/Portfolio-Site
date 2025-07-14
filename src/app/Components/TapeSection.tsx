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
        <div className="bg-gradient-to-r from-emerald-400 to-sky-500 rotate-6 -mx-1 py-3">
            <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <div className="flex flex-none items-center gap-4 md:gap-10 lg:gap-14 xl:gap-20 xl:tracking-wide text-lg
                 pr-8 animate-tapeMotion" >
                    {
                        [...new Array(2)].fill(0).map((_, idx) => (
                            <div key={idx} className="flex items-center gap-4 md:gap-10 lg:gap-14 xl:gap-20">

                                {words.map(word => (
                                    <div key={word} className="inline-flex items-center gap-2 font-semibold text-sm text-black/70 uppercase md:text-lg">
                                        <span>{word}</span>
                                        <span><HiSparkles /></span>
                                    </div>
                                ))}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TapeSection
