import { FC } from "react";
import arrowRight from "../assets/BestSelling/arrowRight.svg";
import clsx from "clsx";

interface MyButton {
  text: string;
  variant: "base" | "white";
}
export const MyButton: FC<MyButton> = ({ text, variant }) => {
  return (
    <button
      className={clsx(
        variant === "base" ? "bg-[#C1DCDC]" : "",
        variant === "white" ? "bg-[#ffffff]" : "",
        "relative mt-6 flex cursor-pointer gap-2 self-center rounded-xl bg-[#C1DCDC] py-3 pr-4 pl-6 hover:-top-0.5",
      )}
    >
      {text} <img src={arrowRight} alt="arrowRight" />
    </button>
  );
};
