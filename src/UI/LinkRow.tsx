import { FC } from "react";

interface LinkRow {
  title: string;
  linkArr: string[];
}
const LinkRow: FC<LinkRow> = ({ title, linkArr }) => {
  return (
    <div className="">
      <h4 className="mb-5 font-bold">{title}</h4>
      <ul className="flex flex-col gap-y-5 text-zinc-600">
        {linkArr.map((item) => {
          return (
            <li className="transition-all hover:border-b-2 hover:border-b-black">
              <a href="#">{item}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LinkRow;
