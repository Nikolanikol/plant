import { MyButton } from "../UI/MyButton";
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
    <div className="mx-auto mt-[165px] border-b-4">
      <div className="mx-auto max-w-[1248px]">
        <MySectionTitle
          title="Categories"
          subTitle="Find what you are looking for"
        />
      </div>

      <div className="mt-24 bg-[#C1DCDC] pb-24">
        <div className="mx-4">
          <div className="mx-auto flex max-w-[1248px] flex-col gap-x-24 gap-y-2 pt-12 lg:flex lg:flex-row">
            {data.map((item, i) => {
              return (
                <div
                  className={clsx(
                    i % 2 != 0 ? "" : "lg:mt-[-100px]",
                    "mx-auto",
                  )}
                >
                  <img src={item.img} alt="icon" />
                  <p className="mt-3 text-center font-bold">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mx-auto flex max-w-[350px] flex-col text-center">
          <p className="text-zinc-500">
            Horem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit.
          </p>
          <MyButton text="Explore" variant="white" />
        </div>
      </div>
    </div>
  );
};
