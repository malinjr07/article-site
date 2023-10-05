import { tagsProps } from "@/utils/types";
import Link from "next/link";
import React, { FC } from "react";

const Tags: FC<tagsProps> = ({ title, queryParams }) => {
  return (
    <Link
      href="/"
      className="rounded bg-[#DFF1F0] px-2 py-1 text-xs capitalize text-[#666666] transition-colors duration-300 hover:bg-[#00AAA1] hover:text-white "
    >
      {title}
    </Link>
  );
};

export default Tags;
