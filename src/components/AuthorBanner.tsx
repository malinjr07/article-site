import React, { FC } from "react";

const AuthorBanner: FC = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-6 rounded-xl bg-[#F2F8F7] py-14 ">
      <h6 className="text-xl font-semibold leading-[140%] text-[#222222] ">
        Share your knowledge with our readers
      </h6>
      <button className=" rounded-md border border-[#00AAA1] px-8 py-4 capitalize ">
        write on notebook
      </button>
    </div>
  );
};

export default AuthorBanner;
