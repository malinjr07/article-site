import Link from "next/link";
import React, { FC } from "react";
import MonthlyPicked from "./MonthlyPicked";
import PopularArticles from "./PopularArticles";

const Banner: FC = () => {
  return (
    <section className="w-full bg-[#F2F8F7] py-24 ">
      <div className="container flex flex-row items-start justify-between ">
        <MonthlyPicked />
        <PopularArticles />
      </div>
    </section>
  );
};

export default Banner;
