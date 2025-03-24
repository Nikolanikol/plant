import { CarouselCard } from "./CarouselCard";

export const MyCarousel = () => {
  return (
    <div className="mx-auto max-w-[1248px] overflow-hidden">
      <div className="flex w-[2000px] gap-x-4">
        {[1, 2, 3, 4].map((item) => (
          <CarouselCard />
        ))}
      </div>
    </div>
  );
};
