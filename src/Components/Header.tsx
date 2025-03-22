import React from "react";
import logo from "../assets/header_logo/GREENMIND.svg";
import bascket from "../assets/header_logo/backet.svg";
import account from "../assets/header_logo/account.svg";
import MyLink from "../UI/MyLink";
const Header = () => {
  return (
    <div className="mx-auto flex w-[1280px] items-center justify-between border-2 px-3.5 py-10">
      <div className="flex">
        <a href="#" className="mr-[96px]">
          <img src={logo} alt="logo" />
        </a>
        <div>
          <nav>
            <ul className="flex gap-x-12">
              <MyLink linkText="my link" />
              <a href="#">
                <li>Home</li>
              </a>
              <a href="#">
                <li>Contacts</li>
              </a>
              <a href="#">
                <li>Products</li>
              </a>
            </ul>
          </nav>
        </div>
      </div>
      <div>
        <div className="btn-row-wraper flex items-center gap-x-12">
          <button type="button" className="cursor-pointer">
            {" "}
            <img src={bascket} alt="bascket" width={23} height={23} />
          </button>

          <button type="button" className="cursor-pointer">
            {" "}
            <img src={account} alt="account" width={23} height={23} />
          </button>

          <div className="h-6 w-0.5 rounded-b-sm bg-black"></div>
          <div className="burger flex h-3 w-6 -scale-x-100 transform cursor-pointer flex-col justify-between">
            <span className="block h-0.5 w-full bg-black"></span>
            <span className="block h-0.5 w-[60%] bg-black"></span>
            <span className="block h-0.5 w-[30%] bg-black"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
