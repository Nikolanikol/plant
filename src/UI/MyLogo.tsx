import logo from "../assets/header_logo/GREENMIND.svg";

export const MyLogo = () => {
  return (
    <>
      <a href="#" className="relative top-0 mr-[96px] shrink-0 hover:-top-0.5">
        <img src={logo} alt="logo" />
      </a>
    </>
  );
};
