import React, { FC } from "react";

const Pagination: FC = () => {
  return (
    <div className="mx-auto flex flex-row flex-wrap items-center justify-start gap-4 ">
      <button
        type="button"
        className="rounded border border-[#C4C4C4] px-5 py-[10px] text-base capitalize text-[#666666] transition-all hover:bg-[#00AAA1] hover:text-white "
      >
        previous
      </button>
      <button
        type="button"
        className="rounded border border-[#C4C4C4] px-5 py-[10px] text-base capitalize text-[#666666] transition-all hover:bg-[#00AAA1] hover:text-white "
      >
        1
      </button>
      <button
        type="button"
        className="rounded border border-[#C4C4C4] px-5 py-[10px] text-base capitalize text-[#666666] transition-all hover:bg-[#00AAA1] hover:text-white "
      >
        2
      </button>
      <button
        type="button"
        className="rounded border border-[#C4C4C4] px-5 py-[10px] text-base capitalize text-[#666666] transition-all hover:bg-[#00AAA1] hover:text-white "
      >
        next
      </button>
    </div>
  );
};

export default Pagination;
