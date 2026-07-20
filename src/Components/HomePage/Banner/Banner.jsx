"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@heroui/react";
import { AnimatePresence, motion } from "motion/react";
import { FaArrowRight, FaWandMagicSparkles } from "react-icons/fa6";

const images = [
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2000&q=80",
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[70vh] min-h-162 overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
        >
          <Image
            src={images[current]}
            alt="Interior Design"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-330 mx-auto flex h-full items-center px-3">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-120 md:max-w-150"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-5 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur"
          >
            ✨ AI Interior Design Planner
          </motion.span>

          <h1 className="mb-5 text-4xl font-bold leading-tight text-white md:text-5xl">
            Transform Any Room Into Your{" "}
            <span className="text-[#b2967d]">Dream Space</span>
          </h1>

          <p className="mb-8 text-lg md:text-xl leading-6 playfair  text-gray-200">
            Explore beautiful room inspirations, save your favorite designs, and
            let AI create personalized interiors based on your style, budget,
            and room type.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              radius="full"
              size="lg"
              endContent={<FaWandMagicSparkles />}
              className="bg-[#b2967d] rounded-md text-white"
            >
              Generate Design
            </Button>

            <Button
              radius="full"
              size="lg"
              variant="bordered"
              endContent={<FaArrowRight />}
              className="border-white text-white rounded-md hover:bg-white hover:text-black"
            >
              Explore Rooms
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
