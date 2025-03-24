export const MyBurgerBtn = () => {
  return (
    <>
      {" "}
      <div className="burger relative top-0 flex h-3 w-6 shrink-0 -scale-x-100 transform cursor-pointer flex-col justify-between transition-transform duration-300 hover:-top-0.5 hover:scale-200">
        <span className="block h-0.5 w-full bg-black"></span>
        <span className="block h-0.5 w-[60%] bg-black"></span>
        <span className="block h-0.5 w-[30%] bg-black"></span>
      </div>
    </>
  );
};
