import clsx from "clsx";
import React, { FC } from "react";
import { capitalizeFirstLetter } from "../utils/index.js";
interface linkProp {
  name: string;
  isActive: boolean;
  number: number;
}
interface MyLink {
  item: linkProp;
  setLinks: React.Dispatch<React.SetStateAction<linkProp[]>>;
}

const MyLink: FC<MyLink> = ({ item, setLinks }) => {
  const handleClick = (num: number) => {
    console.log(num);
    setLinks((state) => {
      return state.map((link) => {
        if (num === link.number) {
          return { ...link, isActive: true };
        }
        return { ...link, isActive: false };
      });
    });
  };

  return (
    <div className={clsx(item.isActive && "text-black", "text-[#646463]")}>
      <li className="relative top-0 transition-all duration-300 ease-in-out hover:-top-0.5 hover:underline">
        <a href="#" onClick={() => handleClick(item.number)}>
          {capitalizeFirstLetter(item.name)}
        </a>
      </li>
    </div>
  );
};

export default MyLink;
