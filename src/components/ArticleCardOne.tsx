import React, { FC } from "react";
import TextContentArea from "./TextContentArea";

const ArticleCardOne: FC = () => {
  return (
    <div className=" flex w-full flex-row flex-wrap items-center justify-between ">
      <div className="w-[54%] pr-7 ">
        <TextContentArea />
      </div>
      <div className="relative h-[370px] w-[46%] ">
        <div className="absolute left-0 top-0 h-[274px] w-[194px] rounded-lg bg-[#dff1f0] "></div>
        <div className="absolute bottom-0 right-0 h-[346px] w-[371px] rounded-lg bg-[#d9d9d9] "></div>
      </div>
    </div>
  );
};

export default ArticleCardOne;
