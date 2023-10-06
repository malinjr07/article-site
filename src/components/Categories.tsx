import React, { FC } from "react";
import SectionTitle from "./SectionTitle";
import Link from "next/link";

const Categories: FC = () => {
  return (
    <div className="flex w-full flex-col items-start justify-start ">
      <SectionTitle blockedText="categories" />
      <div className="mt-7 flex w-full flex-col items-start justify-start ">
        <Link
          href={"/"}
          className=" flex w-full flex-row items-center justify-between border-0 border-b border-dotted border-[#D1E7E5] py-3"
        >
          <p className="text-base font-medium text-[#1c1c1c] ">Lifestyle</p>
          <p className="text-base font-medium text-[#1c1c1c] ">08</p>
        </Link>
        <Link
          href={"/"}
          className=" flex w-full flex-row items-center justify-between border-0 border-b border-dotted border-[#D1E7E5] py-3"
        >
          <p className="text-base font-medium text-[#1c1c1c] ">Lifestyle</p>
          <p className="text-base font-medium text-[#1c1c1c] ">08</p>
        </Link>
        <Link
          href={"/"}
          className=" flex w-full flex-row items-center justify-between border-0 border-b border-dotted border-[#D1E7E5] py-3"
        >
          <p className="text-base font-medium text-[#1c1c1c] ">Lifestyle</p>
          <p className="text-base font-medium text-[#1c1c1c] ">08</p>
        </Link>
        <Link
          href={"/"}
          className=" flex w-full flex-row items-center justify-between border-0 border-b border-dotted border-[#D1E7E5] py-3"
        >
          <p className="text-base font-medium text-[#1c1c1c] ">Lifestyle</p>
          <p className="text-base font-medium text-[#1c1c1c] ">08</p>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
