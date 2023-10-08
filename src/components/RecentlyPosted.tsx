import React, { FC } from "react";
import SectionTitle from "./SectionTitle";
import ArticleCardOne from "./common/ArticleCardOne";
import AuthorBanner from "./AuthorBanner";
import BannerAds from "./BannerAds";
import Categories from "./Categories";
import TagsSection from "./TagsSection";
import Pagination from "./Pagination";

const RecentlyPosted: FC = () => {
  return (
    <section className="container my-20 flex flex-row flex-wrap items-start justify-between ">
      {/* main area */}
      <div className="flex w-full flex-col items-start justify-start gap-16 lg:w-[70%] ">
        <SectionTitle blockedText="latest" freeText="articles" />
        <ArticleCardOne />
        <AuthorBanner />
        <ArticleCardOne reverted={true} />
        <ArticleCardOne />
        <ArticleCardOne reverted={true} />
        <ArticleCardOne />
        <ArticleCardOne reverted={true} />
        <ArticleCardOne />
        <ArticleCardOne reverted={true} />
        <BannerAds />
        <Pagination />
      </div>
      {/* Sidebar */}
      <div className="flex w-full flex-col items-start justify-start gap-14 lg:w-[28%] ">
        <div className="flex w-full flex-col items-center justify-start">
          <p className="text-center text-xs text-slate-400">Advertise</p>
          <div className="h-[300px] w-full bg-[#00aaa1]"></div>
          <p className="text-center text-xs text-slate-400 ">Advertise</p>
        </div>
        <Categories />
        <TagsSection />
      </div>
    </section>
  );
};

export default RecentlyPosted;
