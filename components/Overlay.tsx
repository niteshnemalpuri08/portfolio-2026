"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export default function Overlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // 0% → "My Name. Creative Developer." (center)
  // 30% → "I build digital experiences." (left)
  // 60% → "Bridging design and engineering." (right)

  // Title 1
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -50]);
  const scale1 = useTransform(scrollYProgress, [0, 0.25], [1, 0.95]);

  // Title 2
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.3], [50, 0]);

  // Title 3
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.8, 0.9], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.6], [50, 0]);

  return (
    <div className="h-full w-full relative flex flex-col justify-center max-w-7xl mx-auto px-6 pointer-events-none">
      <motion.div style={{ opacity: opacity1, y: y1, scale: scale1 }} className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-black dark:text-white text-center drop-shadow-2xl">
            Nitesh Nemalpuri<span className="text-rose-500">.</span> <br />
            <span className="text-gray-600 dark:text-gray-400 font-medium text-3xl md:text-5xl lg:text-6xl tracking-tight">CS & Engineering Student</span>
          </h1>
        </div>
      </motion.div>

      <motion.div style={{ opacity: opacity2, y: y2 }} className="absolute inset-y-0 left-6 md:left-24 flex items-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-black dark:text-white max-w-2xl drop-shadow-2xl leading-tight">
          I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500">intelligent applications</span>.
        </h2>
      </motion.div>

      <motion.div style={{ opacity: opacity3, y: y3 }} className="absolute inset-y-0 right-6 md:right-24 flex items-center justify-end text-right">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-black dark:text-white max-w-2xl drop-shadow-2xl leading-tight">
          Bridging <span className="italic font-light text-rose-500 dark:text-rose-300">algorithms</span> <br/> and <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 dark:from-purple-400 dark:to-pink-600">web architecture</span>.
        </h2>
      </motion.div>
    </div>
  );
}
