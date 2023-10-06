import React, { FC } from "react";
import SectionTitle from "./SectionTitle";
import ArticleCardOne from "./common/ArticleCardOne";

const MonthlyPicked: FC = () => {
  return (
    <div className="flex w-full flex-col items-start justify-start xl:w-[68%] ">
      <SectionTitle blockedText="featured" freeText="of the month" />
      <div className="mt-14 flex w-full flex-row flex-wrap justify-between xl:w-[90%] ">
        <ArticleCardOne />
      </div>
    </div>
  );
};

export default MonthlyPicked;
