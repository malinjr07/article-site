import { tagsProps } from "@/utils/types";
import React, { FC } from "react";

const Tags: FC<tagsProps> = ({ title, queryParams }) => {
  return (
    <button
      type="button"
      className="rounded bg-[#DFF1F0] px-2 py-1 text-xs capitalize text-[#666666] transition-colors duration-300 hover:bg-[#00AAA1] hover:text-white "
    >
      {title}
    </button>
  );
};

export default Tags;
