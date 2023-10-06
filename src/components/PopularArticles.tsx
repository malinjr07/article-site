import React, { FC } from "react";
import SectionTitle from "./SectionTitle";
import MiniTextArticleCard from "./common/MiniTextArticleCard";

const PopularArticles: FC = () => {
  return (
    <div className="flex w-full flex-col items-start justify-start xl:w-[32%] ">
      <SectionTitle blockedText="popular" freeText="news" />{" "}
      <div className="mt-14 flex w-full flex-col items-start justify-start gap-12 ">
        <MiniTextArticleCard />
        <MiniTextArticleCard />
      </div>
    </div>
  );
};

export default PopularArticles;
