import icon1 from "../assets/CardAbout/1.svg";
import icon2 from "../assets/CardAbout/2.svg";
import icon3 from "../assets/CardAbout/3.svg";

import { CardAbout } from "../UI/CardAbout";
import { MySectionTitle } from "../UI/MySectionTitle";
export const About = () => {
  const arr = [
    {
      img: icon1,
      title: "Large Assortment",
      desc: "we offer many different types of products with fewer variations in each category.",
    },
    {
      img: icon2,
      title: "Fast & Free Shipping",
      desc: "we offer many different types of products with fewer variations in each category.",
    },
    {
      img: icon3,
      title: "24/7 Support",
      desc: "we offer many different types of products with fewer variations in each category.",
    },
  ];
  return (
    <div className="mx-4">
      <div className="mx-auto mt-[115px] max-w-[1248px]">
        <MySectionTitle
          title="About us"
          subTitle="Order now and appreciate the beauty of nature"
        />
        <div className="mt-12 flex flex-col gap-x-1.5 gap-y-1.5 md:flex-row">
          {arr.map((item, i) => (
            <CardAbout
              key={i}
              title={item.title}
              img={item.img}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
