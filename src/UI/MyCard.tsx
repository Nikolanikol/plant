import React, { FC } from "react";
import { Card } from "../Components/ui/card";
interface MyCard {
  img: string;
  title: string;
  price: string;
}
export const MyCard: FC<MyCard> = ({ img, title, price }) => {
  return (
    <div className="flex h-[436px] w-[300px] flex-col gap-y-2">
      <img src={img} alt="" />
      <h4>{title}</h4>
      <p className="text-zinc-500">{price}</p>
    </div>
  );
};
