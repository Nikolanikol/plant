import React, { FC } from "react";
interface MyLink {
  linkText: string;
}
const MyLink: FC<MyLink> = ({ linkText }) => {
  return (
    <div>
      <li className="relative top-0 transition-all duration-300 ease-in-out hover:-top-0.5 hover:underline">
        <a href="#">{linkText}</a>
      </li>
    </div>
  );
};

export default MyLink;
