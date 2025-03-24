import bascket from "../assets/header_logo/backet.svg";
import account from "../assets/header_logo/account.svg";

import { Navbar } from "./Navbar";
import { MyLogo } from "../UI/MyLogo";
import { MyIconBtn } from "../UI/MyIconBtn";
import { MyBurgerBtn } from "../UI/MyBurgerBtn";
const Header = () => {
  return (
    <div className="mx-auto flex max-w-[1248px] items-center justify-between px-8 py-10">
      <div className="flex">
        <MyLogo />
        <Navbar />
      </div>
      <div>
        <div className="btn-row-wraper flex items-center gap-x-4 sm:gap-x-12">
          <MyIconBtn logoPath={bascket} />

          <MyIconBtn logoPath={account} />

          <div className="h-6 w-0.5 rounded-b-sm bg-black"></div>
          <MyBurgerBtn />
        </div>
      </div>
    </div>
  );
};

export default Header;
