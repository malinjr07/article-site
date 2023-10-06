import React from "react";

const BannerAds = () => {
  return (
    <div className="flex w-full flex-col items-center justify-start gap-3 ">
      <p className="text-center text-xs text-slate-400 ">Advertise</p>
      <div className="w-full bg-[#F2F8F7] xl:h-[212px] ">{/* Ads */}</div>
      <p className="text-center text-xs text-slate-400 ">Advertise</p>
    </div>
  );
};

export default BannerAds;
