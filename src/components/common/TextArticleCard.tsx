import React, { FC } from "react";
import Tags from "./Tags";
import Image from "next/image";

const TextArticleCard: FC = () => {
  return (
    <span className="flex w-full flex-col items-start justify-start  ">
      <Tags title="travel" queryParams="travel" />
      <h4 className="my-2 text-[27px] font-medium leading-[140%] text-[#222222] ">
        I Created a Developer Rap Video - Here&apos;s What I Learned from it.
        Check it out
      </h4>
      <div className="my-2 flex w-full flex-row flex-wrap items-center justify-start gap-3 ">
        {/* Authors */}
        <div className="flex flex-row items-center justify-start gap-2 border-0 border-r border-[#999999] ">
          <div className="relative aspect-square w-[18px] overflow-hidden rounded-full bg-[#777777] ">
            <Image
              src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHwy&auto=format&fit=crop&w=500&q=60"
              alt="Author's Photo"
              fill
              className="object-cover"
            />
          </div>
          <h5 className="mr-2 text-xs  text-[#777777] ">Nusrat Rizu</h5>
        </div>
        {/* Published Date */}
        <div className="flex flex-row items-center justify-start gap-2 border-0 border-r border-[#999999] ">
          <i className="fa-solid fa-calendar-days text-[14px] text-[#555555] "></i>
          <h5 className="mr-2 text-xs  text-[#777777] ">06 October 2023</h5>
        </div>
        {/* Reading Time */}
        <div className="flex flex-row items-center justify-start gap-2 border-0 ">
          <i className="fa-regular fa-clock text-[14px] text-[#555555] "></i>
          <h5 className="mr-2 text-xs  text-[#777777] ">3 Min. to Read</h5>
        </div>
      </div>
      <p className="my-4 text-base font-light leading-[150%] text-[#555555] ">
        Dynamically underwhelm integrated outsourcing via timely models.
        Rapidiously reconceptualize visionary imperatives without 24/365
        catalysts for change. Completely streamline functionalized models
      </p>
    </span>
  );
};

export default TextArticleCard;
