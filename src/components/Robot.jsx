import React, { useContext, useEffect } from 'react'
import Spline from '@splinetool/react-spline'
import { SpinnerContext } from '../context/SpinnerContext'

const Robot = () => {
    const { setLoader } = useContext(SpinnerContext)

    useEffect(() => {
        setLoader(true)
        // Simple timeout to hide loader after spline might have loaded
        const timer = setTimeout(() => setLoader(false), 3000)
        return () => clearTimeout(timer)
    }, [setLoader])

    return (
        <div className="relative w-full h-full overflow-hidden border-none outline-none">
            {/* Container to clip the Spline watermark (usually at the very bottom right) */}
            <div className="absolute inset-0 scale-[1.02] origin-center">
                <Spline
                    className='w-full h-full cursor-grab active:cursor-grabbing'
                    scene="https://prod.spline.design/MVqMfEZaplcLuQu0/scene.splinecode"
                    onLoad={() => setLoader(false)}
                />
            </div>
            {/* Mask to block watermark if scaling isn't enough */}
            <div className="absolute bottom-0 right-0 w-40 h-10 bg-[#050505] z-10 pointer-events-none"></div>
        </div>
    )
}

export default Robot
