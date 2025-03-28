import logo from "../assets/header_logo/GREENMIND.svg";
import facebook from "../assets/footer/facebook.svg";
import insta from "../assets/footer/insta.svg";
import twitter from "../assets/footer/twitter.svg";
import LinkRow from "../UI/LinkRow";
const Footer = () => {
  const social = [facebook, insta, twitter];
  return (
    <div className="bg-[#C1DCDC] py-12">
      <div className="mx-auto flex max-w-[1248px] flex-col justify-between gap-y-5 px-3 md:flex-row">
        <div className="text-opacity-50 flex flex-col gap-y-5 text-zinc-600">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
          <p>We help you find your dream plant</p>
          <div className="flex gap-x-5">
            {social.map((item) => {
              return (
                <div className="relative top-0 flex h-12 w-12 cursor-pointer items-center justify-center rounded-4xl border-2 border-zinc-500 transition-all hover:-top-0.5 hover:border-black">
                  <a href="#">
                    <img src={item} alt="" />
                  </a>
                </div>
              );
            })}
          </div>
          <p className="mt-[98px]">
            2023 all Right Reserved Term of use GREENMIND
          </p>
        </div>
        <div className="flex gap-x-12">
          <LinkRow
            title={"Information"}
            linkArr={["About", "Product", "Blog"]}
          />
          <LinkRow
            title={"Company"}
            linkArr={["Community", "Career", "Our story"]}
          />
          <LinkRow
            title={"Contact"}
            linkArr={["Getting Started", "Pricing", "Resources"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
