import { sectionTitleProps } from "@/utils/types";
import React, { FC } from "react";

const SectionTitle: FC<sectionTitleProps> = ({ blockedText, freeText }) => {
  return (
    <div className="w-full text-left ">
      <h3 className="text-xl font-semibold capitalize text-black  ">
        <span className="bg-[#00AAA1] px-1 text-white">{blockedText}</span>{" "}
        {freeText}
      </h3>
    </div>
  );
};

export default SectionTitle;
