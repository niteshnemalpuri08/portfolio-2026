"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 120; // 0 to 119

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = new Array(FRAME_COUNT);
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const numStr = i.toString().padStart(3, "0");
      img.src = `/sequence/frame_${numStr}_delay-0.066s.png`;
      
      img.onload = () => {
        loadedImages[i] = img;
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
          setIsLoaded(true);
        }
      };
      // Add error handling if an image is missing so it doesn't hang forever
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
          setIsLoaded(true);
        }
      };
    }
  }, []);

  // Draw initial frame once loaded
  useEffect(() => {
    if (isLoaded && canvasRef.current) {
      drawFrame(0);
    }
  }, [isLoaded]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (isLoaded) {
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.floor(latest * FRAME_COUNT)
      );
      drawFrame(frameIndex);
    }
  });

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[index];
    if (!img) return; // Skip if this particular image failed to load

    // Set canvas dimensions to match image natural size for performance
    // and rely on CSS object-fit to scale it properly on screen.
    // We only need to set width/height once if all images are the same size,
    // but setting it dynamically ensures safety.
    if (canvas.width !== img.width) canvas.width = img.width;
    if (canvas.height !== img.height) canvas.height = img.height;

    // Clear and draw pattern
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);
  };

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-[#050505]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Loading State Overlay */}
        {!isLoaded && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#050505]">
            <div className="text-white/50 text-sm tracking-widest uppercase animate-pulse">
              Loading Experience...
            </div>
          </div>
        )}
        
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />
        
        {/* Render overlay on top of canvas inside the sticky container */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <Overlay scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </div>
  );
}
