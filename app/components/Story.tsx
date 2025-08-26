"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function StoryCollage() {
  const cards = [
    { src: "/first.png", caption: "Our Start", w: 230, h: 280 },
    { src: "/second.png", caption: "Glow-Up Moment", w: 230, h: 230 },
    { src: "/2.png", caption: "Big Bite on TV", w: 230, h: 300 },
    { src: "/4.png", caption: "Social Buzz", w: 230, h: 250 },
    { src: "/5.png", caption: "OG Jars", w: 210, h: 250 },
    { src: "/6.png", caption: "Where Magic Bakes", w: 290, h: 260 },
    { src: "/last.png", caption: "Sweet Collabs", w: 230, h: 270 },
  ];

  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % cards.length);
  };

  return (
    <section className="py-16 bg-[#92400EB5] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center text-[#FFF8DE]">
        <h2 className="text-4xl font-serif font-bold mb-6">“Our Story”</h2>
        <p className="max-w-3xl mx-auto mb-12 leading-7">
          Miss Cheesecake began in a cozy Jodhpur kitchen with a simple dream—to make rich,
          creamy cheesecakes accessible to everyone. Founded by two passionate individuals,
          the brand took off with handcrafted flavors made using homemade cream cheese. What
          started as a small venture quickly gained love, especially after being featured
          on Shark Tank India. With signature slices and a commitment to affordability,
          Miss Cheesecake has sold thousands of cakes and built a strong community of
          dessert lovers. Today, it’s more than just a brand—it’s a sweet emotion shared
          one slice at a time.
        </p>

        {/* --- MOBILE STACK VIEW (<640px) --- */}
        <div className="sm:hidden relative w-full h-[420px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, rotate: -10 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              exit={{ opacity: 0, y: -40, rotate: 10 }}
              transition={{ duration: 0.6 }}
              className="absolute cursor-pointer"
              onClick={handleNext}
            >
              <Polaroid
                src={cards[index].src}
                caption={cards[index].caption}
                w={250}
                h={300}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* --- TABLET GRID (640px - 1023px) --- */}
        <div className="hidden sm:grid md:hidden grid-cols-2 gap-6 justify-items-center">
          {cards.map((card, i) => (
            <Polaroid key={i} {...card} />
          ))}
        </div>

        {/* --- DESKTOP COLLAGE (≥1024px) --- */}
        <div className="hidden md:block relative mx-auto h-[760px] max-w-[1100px]">
          <Polaroid
            className="absolute top-[10px] left-[10px] rotate-[0deg]"
            {...cards[0]}
          />
          <Polaroid
            className="absolute top-[80px] left-[300px] rotate-[0deg]"
            {...cards[1]}
          />
          <Polaroid
            className="absolute top-[10px] left-[580px] rotate-[0deg]"
            {...cards[2]}
          />
          <Polaroid
            className="absolute top-[80px] right-[0px] rotate-[0deg]"
            {...cards[3]}
          />
          <Polaroid
            className="absolute top-[360px] left-[140px] rotate-[0deg]"
            {...cards[4]}
          />
          <Polaroid
            className="absolute top-[400px] left-[380px] rotate-[0deg]"
            {...cards[5]}
          />
          <Polaroid
            className="absolute top-[380px] right-[130px] rotate-[1deg]"
            {...cards[6]}
          />
        </div>
      </div>
    </section>
  );
}

/* --- Polaroid helper --- */
type PolaroidProps = {
  className?: string;
  src: string;
  caption: string;
  w: number;
  h: number;
};

function Polaroid({ className, src, caption, w, h }: PolaroidProps) {
  return (
    <div className={className}>
      <div className="bg-[#F1E6C9] shadow-[0_10px_25px_rgba(0,0,0,0.25)] p-2">
        <div
          className="relative rounded-md overflow-hidden bg-white"
          style={{ width: w, height: h }}
        >
          <Image src={src} alt={caption} fill className="object-cover" />
        </div>
        <div className="mx-auto -mt-2 w-max px-3 py-1 bg-[#E8D4A2] text-[#4A3528] rounded shadow">
          <span className="text-sm font-semibold">“{caption}”</span>
        </div>
      </div>
    </div>
  );
}
