import React from 'react'
import { motion } from 'framer-motion';

const Spinner = () => {
  return (

    <div className="flex flex-col items-center justify-center min-h-[400px] bg-zinc-950 overflow-hidden">
      {/* The Film Strip Container */}
      <div className="relative w-48 h-72 border-x-8 border-zinc-900 flex flex-col items-center gap-4 py-4">

        {/* Sprocket Holes (Left) */}
        <div className="absolute left-[-16px] top-0 h-full flex flex-col justify-around py-2">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-3 h-5 bg-zinc-800 rounded-sm" />
          ))}
        </div>

        {/* Moving "Frames" */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: -180 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          className="flex flex-col gap-6"
        >
          {/* Mock Movie Poster Frames */}
          {[1, 2, 3, 4].map((f) => (
            <div key={f} className="w-32 h-44 bg-zinc-800 rounded shadow-2xl flex items-center justify-center">
               <div className="w-10 h-1 bg-zinc-700 rounded-full animate-pulse" />
            </div>
          ))}
        </motion.div>

        {/* Sprocket Holes (Right) */}
        <div className="absolute right-[-16px] top-0 h-full flex flex-col justify-around py-2">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-3 h-5 bg-zinc-800 rounded-sm" />
          ))}
        </div>

        {/* Lens Flare Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950" />
      </div>

      {/* Cinematic Text */}
      <div className="mt-8 text-center">
        <h2 className="text-zinc-400 font-mono text-sm tracking-[0.4em] uppercase animate-pulse">
          Loading
        </h2>
        <div className="mt-2 flex gap-1 justify-center">
           <div className="w-1 h-1 bg-amber-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
           <div className="w-1 h-1 bg-amber-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
           <div className="w-1 h-1 bg-amber-500 rounded-full animate-bounce" />
        </div>
      </div>
    </div>

  )
}
export default Spinner
