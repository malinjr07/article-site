import React, { FC } from "react";
import SectionTitle from "./SectionTitle";
import ArticleCardOne from "./ArticleCardOne";

const MonthlyPicked: FC = () => {
  return (
    <div className="flex w-[68%] flex-col items-start justify-start ">
      <SectionTitle blockedText="featured" freeText="of the month" />
      <div className="mt-14 flex w-full flex-row justify-between ">
        <ArticleCardOne />
      </div>
    </div>
  );
};

export default MonthlyPicked;
