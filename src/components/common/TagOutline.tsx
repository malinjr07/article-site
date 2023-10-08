import { outlineTagProps } from "@/utils/types";
import Link from "next/link";
import React, { FC } from "react";

const TagOutline: FC<outlineTagProps> = ({ content }) => {
  return (
    <Link
      href="/"
      className="rounded border border-[#C4C4C4] px-5 py-[10px] text-base capitalize text-[#666666] transition-all hover:bg-[#00AAA1] hover:text-white "
    >
      {content}
    </Link>
  );
};

export default TagOutline;
