import { useState } from "react";
import { CarouselCard } from "./CarouselCard";
import clsx from "clsx";

export const MyCarousel = () => {
  // const offsetLeft = -170;
  const arr = [1, 2, 3, 4];
  const [offset, setOffset] = useState(0);
  const handleClick = (num: number) => {
    setOffset((offset) => offset + num);
  };
  // let offsetClass = `mx-[${offset}px]`;
  console.log("rendser");
  return (
    <div className="mx-auto mt-[96px] max-w-[1248px] overflow-hidden">
      <button className="border-2 p-5" onClick={() => handleClick(170)}>
        next
      </button>
      <button className="border-2 p-5" onClick={() => handleClick(-170)}>
        prev
      </button>
      <div className="flex justify-between">
        <h2 className="max-w-[457px] text-3xl font-bold">
          What customers say about GREEMIND?
        </h2>
        <div className="flex gap-x-1">
          {arr.map(() => (
            <span className="h-1.5 w-3 rounded-3xl bg-gray-300"></span>
          ))}
        </div>
      </div>
      <div className="mt-12">
        <div className={clsx(`-ml-[${offset}px] flex w-[2000px] gap-x-4`)}>
          {arr.map(() => (
            <CarouselCard />
          ))}
        </div>
      </div>
    </div>
  );
};
