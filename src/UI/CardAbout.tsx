import { FC } from "react";
interface CardAbout {
  img: string;
  title: string;
  desc: string;
}
export const CardAbout: FC<CardAbout> = ({ img, title, desc }) => {
  return (
    <div className="flex max-w-[400px] flex-col items-center">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#C1DCDC]">
        <img src={img} alt="" />
      </div>

      <h4 className="mt-6 font-bold"> {title} </h4>
      <p className="text-center text-zinc-600"> {desc} </p>
    </div>
  );
};
