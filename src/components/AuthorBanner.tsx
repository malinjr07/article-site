import React, { FC } from "react";

const AuthorBanner: FC = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-6 rounded-xl bg-[#F2F8F7] py-14 ">
      <h6 className=" text-center text-sm font-semibold leading-[140%] text-[#222222] xl:text-xl ">
        Share your knowledge with our readers
      </h6>
      <button className=" rounded-md border border-[#00AAA1] px-4 py-2 text-xs capitalize xl:px-8 xl:py-4 xl:text-base ">
        write on notebook
      </button>
    </div>
  );
};

export default AuthorBanner;
