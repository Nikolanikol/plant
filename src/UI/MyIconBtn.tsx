import { FC } from "react";
interface MyIconBtn {
  logoPath: string;
}
export const MyIconBtn: FC<MyIconBtn> = ({ logoPath }) => {
  return (
    <>
      <button
        type="button"
        className="relative top-0 shrink-0 cursor-pointer hover:-top-0.5"
      >
        <img src={logoPath} alt="bascket" width={23} height={23} />
      </button>
    </>
  );
};
