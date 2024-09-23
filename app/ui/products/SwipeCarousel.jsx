'use client'
import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import gasa1 from '@/public/tradicional/gasa1.png'
import gasa2 from '@/public/tradicional/gasa2.png'
import gasa3 from '@/public/tradicional/gasa3.png'
import voile1 from '@/public/tradicional/voile1.png'
import voile2 from '@/public/tradicional/voile2.png'
import voile3 from '@/public/tradicional/voile3.png'

const imgs = [
    gasa1,
    gasa2,
    gasa3,
    voile1,
    voile2,
    voile3,
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
    type: "spring",
    mass: 3,
    stiffness: 400,
    damping: 50,
};

export const SwipeCarousel = () => {
    const [imgIndex, setImgIndex] = useState(0);

    const dragX = useMotionValue(0);

    useEffect(() => {
        const intervalRef = setInterval(() => {
            const x = dragX.get();

            if (x === 0) {
                setImgIndex((pv) => {
                    if (pv === imgs.length - 1) {
                        return 0;
                    }
                    return pv + 1;
                });
            }
        }, AUTO_DELAY);

        return () => clearInterval(intervalRef);
    }, []);

    const onDragEnd = () => {
        const x = dragX.get();

        if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
            setImgIndex((pv) => pv + 1);
        } else if (x >= DRAG_BUFFER && imgIndex > 0) {
            setImgIndex((pv) => pv - 1);
        }
    };

    return (
        <section className="bg-primary">
        <div className="relative overflow-hidden border-2 border-yellow-300 max-w-7xl mx-auto">
            <motion.div
                drag="x"
                dragConstraints={{
                    left: 0,
                    right: 0,
                }}
                style={{
                    x: dragX,
                }}
                animate={{
                    translateX: `-${imgIndex * 100}%`,
                }}
                transition={SPRING_OPTIONS}
                onDragEnd={onDragEnd}
                className="flex border-2 border-red-600 cursor-grab items-center active:cursor-grabbing"
            >
                <Images imgIndex={imgIndex} />
                
            </motion.div>

            <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
            <GradientEdges />
        </div>
        </section>
    );
};

const Images = ({ imgIndex }) => {
    return (
      <>
        {imgs.map((imgSrc, idx) => (
          <motion.div
            key={idx}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="aspect-video w-full shrink-0 rounded-xl bg-primary relative"
          >
            <Image
              src={imgSrc}
              alt={`Image ${idx + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
              priority={idx === imgIndex} // Prioriza la imagen que se está mostrando
            />
          </motion.div>
        ))}
      </>
    );
  };
  

const Dots = ({ imgIndex, setImgIndex }) => {
    return (
        <div className="my-2 flex w-full justify-center gap-2">
            {imgs.map((_, idx) => {
                return (
                    <button
                        key={idx}
                        onClick={() => setImgIndex(idx)}
                        className={`h-3 w-3 rounded-full transition-colors ${idx === imgIndex ? "bg-secondary" : "bg-secondary/50 scale-90"
                            }`}
                    />
                );
            })}
        </div>
    );
};

const GradientEdges = () => {
    return (
        <>
            <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px]" />
            <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] " />
        </>
    );
};