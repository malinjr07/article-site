import React, { FC } from "react";
import SectionTitle from "./SectionTitle";

const PopularArticles: FC = () => {
  return (
    <div className="flex w-[32%] flex-col items-start justify-start ">
      <SectionTitle blockedText="popular" freeText="news" />
    </div>
  );
};

export default PopularArticles;
