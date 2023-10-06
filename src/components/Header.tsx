import { navBar } from "@/utils/statics";
import Link from "next/link";
import React, { FC } from "react";

const Header: FC = () => {
  return (
    <nav className="sticky inset-x-0 top-0 z-50 bg-[#E8F3F3] px-2 ">
      <div className="container hidden flex-row-reverse flex-wrap items-center justify-between lg:flex  ">
        <Link href="/" className="text-xl uppercase leading-6 text-[#333333]">
          Logo
        </Link>
        <div className="flex flex-row gap-4 ">
          {navBar.map((item, id) => (
            <Link
              key={id}
              href={"/articles/" + item.url}
              className="px-3 py-6 text-sm font-medium uppercase text-[#333333] "
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <button
        type="button"
        className=" my-4 block rounded-lg border border-[#00AAA1]/40 px-3 py-2 lg:hidden "
      >
        <i className=" fa-solid fa-bars text-xl text-[#00AAA1]"></i>
      </button>
    </nav>
  );
};

export default Header;
