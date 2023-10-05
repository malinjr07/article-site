import { navBar } from "@/utils/statics";
import Link from "next/link";
import React, { FC } from "react";

const Header: FC = () => {
  return (
    <nav className="sticky inset-x-0 top-0 z-50 bg-[#E8F3F3]">
      <div className="container flex flex-row-reverse flex-wrap items-center justify-between  ">
        <Link href="/" className="text-xl uppercase leading-6 text-[#333333]">
          Logo
        </Link>
        <div className="flex flex-row gap-4 ">
          {navBar.map((item, id) => (
            <Link
              key={id}
              href={"/articles/" + item.url}
              className="px-3 py-6 text-base font-medium uppercase text-[#333333] "
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
