import { MyCard } from "../UI/MyCard";
import img1 from "../assets/BestSelling/1.png";
import img2 from "../assets/BestSelling/2.png";
import img3 from "../assets/BestSelling/3.png";
import { MyButton } from "../UI/MyButton";
export const BestSelling = () => {
  const data = [
    { img: img1, title: "Natural Plants", price: "₱ 1,400.00" },
    { img: img2, title: "Artificial Plants", price: "₱ 900.00" },
    { img: img3, title: "Natural Plants", price: "₱ 3,500.00" },
  ];
  return (
    <div className="mx-4">
      <div className="mx-auto mt-[96px] flex min-h-[436px] max-w-[1248px] flex-col items-center gap-y-2 pt-0 lg:flex-row">
        <div className="w-64">
          <h3 className="text-3xl font-bold">Best Selling Plants</h3>
          <p className="mt-3 w-48 text-zinc-500">
            Easiest way to healthy life by buying your favorite plants
          </p>
          <MyButton text="See more" variant="base" />
        </div>
        <div className="flex flex-col items-center gap-x-12 lg:flex-row">
          {data.map((item, i) => (
            <MyCard
              key={i}
              title={item.title}
              price={item.price}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
