import searchIcon from "../assets/searchIcon.svg";
import BuyDreamImg from "../assets/BuyDream/BuyDreamImg.png";
import arrow from "../assets/BuyDream/arrow.svg";
import arrowTop from "../assets/BuyDream/arrowTop.svg";
export const BuyDream = () => {
  return (
    <div className="mx-4">
      <div className="mx-auto flex h-[512px] max-w-[1248px] justify-between gap-x-56 overflow-hidden rounded-3xl bg-[#C1DCDC] px-12 pt-12">
        <div className="textBlock max-w-[512px]">
          <h1 className="text-3xl font-extrabold md:text-6xl">
            Buy your <br /> dream plants
          </h1>
          <div className="mt-5 flex gap-x-4 md:gap-x-12">
            <div>
              <span className="block h-12 text-3xl">50+</span>
              <p>Plant Species</p>
            </div>
            <div className="h-[64px] w-0.5 bg-black"></div>
            <div>
              <span className="block h-12 text-3xl">50+</span>
              <p>Plant Species</p>
            </div>
          </div>

          <div className="mt-12 flex justify-between rounded-2xl bg-white px-4 py-4 md:w-[450px]">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-32 pl-2 md:w-100"
            />
            <button
              type="button"
              className="relative top-0 flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl bg-[#C1DCDC] hover:-top-1"
            >
              <img src={searchIcon} alt="searchIcon" />
            </button>
          </div>
        </div>

        <div className="relative hidden w-full xl:flex">
          <div
            style={{ borderRadius: "50% 50% 0 50%" }}
            className="rounded-custom absolute right-0 bottom-0 -z-0 h-[400px] w-[450px] bg-black"
          ></div>
          <img
            src={arrow}
            alt="arrow"
            className="absolute top-[208px] left-[-170px] rotate-45 transform"
          />
          <img
            src={arrowTop}
            alt="arrow"
            className="absolute top-[-41px] right-0 rotate-[360deg] transform"
          />
          <img
            src={BuyDreamImg}
            alt=""
            className="absolute right-0 bottom-0 z-10 ml-auto shrink-0"
          />
        </div>
      </div>
    </div>
  );
};
