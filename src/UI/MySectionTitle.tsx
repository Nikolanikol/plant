import React, { FC } from "react";
interface MySectionTitle {
  title?: string;
  subTitle: string;
}
export const MySectionTitle: FC<MySectionTitle> = ({ title, subTitle }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="mt-3 font-medium text-zinc-500">{subTitle}</p>
    </div>
  );
};
