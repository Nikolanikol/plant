import { MySectionTitle } from "../UI/MySectionTitle";
import img1 from "../assets/Categories/1.png";
import img2 from "../assets/Categories/2.png";
import img3 from "../assets/Categories/3.png";
import clsx from "clsx";
export const Categories = () => {
  const data = [
    { img: img1, title: "Natural Plants" },
    { img: img2, title: "Plant Accessories" },
    { img: img3, title: "Artificial Plants" },
  ];
  return (
    <div className="mx-auto mt-[165px]">
      <div className="mx-auto max-w-[1248px]">
        <MySectionTitle
          title="Categories"
          subTitle="Find what you are looking for"
        />
      </div>

      <div className="mt-24 h-[841px] bg-[#C1DCDC]">
        <div className="mx-3 flex max-w-[1248px] gap-x-24 pt-12">
          {data.map((item, i) => {
            return (
              <div className={clsx(i % 2 != 0 ? "" : "mt-[-100px]")}>
                <img src={item.img} alt="icon" />
                <p className="mt-3 text-center font-bold">{item.title}</p>
              </div>
            );
          })}
        </div>
        <div>
          <p className="">
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};
