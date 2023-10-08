import Link from "next/link";
import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="w-full bg-[#F2F8F7] ">
      <div className="container flex flex-row flex-wrap items-start justify-evenly py-28">
        <div className="flex w-[236px] flex-col items-start justify-start gap-6 ">
          <h4 className="">logo</h4>
          <p className="">
            Did you come here for something in particular or just general Riker
          </p>
        </div>
        <div className="flex flex-col items-start justify-start">
          <h6 className="mb-6 text-lg font-semibold capitalize text-[#222222] ">
            blogs
          </h6>
          <div className="flex flex-col items-start justify-start gap-4 ">
            <Link
              href={"/"}
              className="text-sm font-normal capitalize text-[#555] "
            >
              travel
            </Link>
            <Link
              href={"/"}
              className="text-sm font-normal capitalize text-[#555] "
            >
              travel
            </Link>
            <Link
              href={"/"}
              className="text-sm font-normal capitalize text-[#555] "
            >
              travel
            </Link>
            <Link
              href={"/"}
              className="text-sm font-normal capitalize text-[#555] "
            >
              travel
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start">
          <h6 className="mb-6 text-lg font-semibold capitalize text-[#222222] ">
            blogs
          </h6>
          <div className="flex flex-col items-start justify-start gap-4 ">
            <Link
              href={"/"}
              className="text-sm font-normal capitalize text-[#555] "
            >
              travel
            </Link>
            <Link
              href={"/"}
              className="text-sm font-normal capitalize text-[#555] "
            >
              travel
            </Link>
            <Link
              href={"/"}
              className="text-sm font-normal capitalize text-[#555] "
            >
              travel
            </Link>
            <Link
              href={"/"}
              className="text-sm font-normal capitalize text-[#555] "
            >
              travel
            </Link>
          </div>
        </div>
      </div>
      {/* <p className="border-t border-[#D1E7E5] py-6 text-center text-xs ">
        Designed &amp; Developed By{" "}
        <a target="_blank" href="https://devfirmltd.com">
          Devfirm
        </a>
      </p> */}
    </footer>
  );
};

export default Footer;
