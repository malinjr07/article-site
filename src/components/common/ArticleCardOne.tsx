import React, { FC } from "react";
import TextArticleCard from "./TextArticleCard";
import Link from "next/link";
import { articleCardOneProps } from "@/utils/types";

const ArticleCardOne: FC<articleCardOneProps> = ({ reverted }) => {
  return (
    <Link
      href="/"
      className={`group mx-auto flex w-[98%] flex-col-reverse flex-wrap items-center justify-between xl:m-0 ${
        reverted ? "xl:flex-row-reverse" : "xl:flex-row"
      }`}
    >
      <span
        className={` w-full pb-10 xl:w-[54%] xl:pb-0 ${
          reverted ? "xl:pl-7" : " xl:pr-7"
        } `}
      >
        <TextArticleCard />
      </span>
      <span className="relative mb-4 aspect-video w-full xl:m-0 xl:aspect-[371/348] xl:w-[46%] ">
        <span className="absolute -left-8 -top-8 aspect-square w-1/2 rounded-lg bg-[#dff1f0] transition-all group-hover:left-1/2 group-hover:top-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 xl:left-0 xl:aspect-[194/271] "></span>
        <span className="group-hover: absolute bottom-0 right-0 h-full w-full rounded-lg bg-[#d9d9d9] transition-all xl:aspect-[371/348] xl:w-11/12  "></span>
      </span>
    </Link>
  );
};

export default ArticleCardOne;
