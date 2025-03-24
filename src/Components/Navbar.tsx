import { useState } from "react";
import MyLink from "../UI/MyLink";

interface linkProp {
  name: string;
  isActive: boolean;
  number: number;
}

export const Navbar = () => {
  const arr = [
    { name: "home", isActive: true, number: 0 },
    { name: "products", isActive: false, number: 1 },
    { name: "contacts", isActive: false, number: 2 },
  ];
  const [links, setLinks] = useState<linkProp[]>(arr);
  return (
    <ul className="flex hidden flex-row gap-x-12 md:gap-x-7 lg:flex">
      {" "}
      {links.map((item, i) => {
        return <MyLink key={i} item={item} setLinks={setLinks} />;
      })}
    </ul>
  );
};
