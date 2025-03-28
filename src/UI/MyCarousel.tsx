import { useRef, useState } from "react";
import { CarouselCard } from "./CarouselCard";
import clsx from "clsx";
import { motion } from "framer-motion";

export const MyCarousel = () => {
  //   const offsetLeft = 170;
  const slides = [1, 2, 3, 4];
  //   const [offset, setOffset] = useState(0);
  //   let offsetClazz = "right-[" + offset * offsetLeft + "px]";
  //   const nextSlide = () => {
  //     setOffset((offset) => offset + 1);
  //     console.log(offsetClazz);
  //   };
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute inset-0 z-10 flex items-center justify-between"></div>
      <div className="relative z-30 flex gap-x-1.5">
        {slides.map((i) => {
          return (
            <div>
              <span
                onClick={() => setCurrentIndex(i)}
                className={clsx(
                  "inline-block h-1.5 w-3 cursor-pointer rounded-3xl px-5 py-1.5",
                  i === currentIndex ? "w-12 bg-[#C1DCDC]" : "w-3 bg-gray-300",
                )}
              ></span>
            </div>
          );
        })}
      </div>
      <motion.div
        ref={sliderRef}
        className="flex"
        animate={{ x: `-${currentIndex * 100}%` }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {slides.map((index) => (
          <div key={index} className="flex-shrink-0">
            <CarouselCard />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
