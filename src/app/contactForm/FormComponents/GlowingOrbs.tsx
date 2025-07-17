import React from 'react'

const GlowingOrbs = () => {
    return (
        <>

            <div className="absolute top-10 left-2 md:top-20 md:left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-32 right-20 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-10 w-16 h-16 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
        </>
    )
}

export default GlowingOrbs
