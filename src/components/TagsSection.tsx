import React from "react";
import SectionTitle from "./SectionTitle";
import TagOutline from "./common/TagOutline";

const TagsSection = () => {
  return (
    <div className="flex w-full flex-col items-start justify-start ">
      <SectionTitle blockedText="search" freeText="with tags" />
      <div className="mt-7 flex w-full flex-row flex-wrap items-start justify-start gap-3 ">
        <TagOutline content="travel" />
        <TagOutline content="shopping" />
        <TagOutline content="real estate" />
        <TagOutline content="internet & telecom" />
        <TagOutline content="Home & Garden" />
        <TagOutline content="Food & Drinks" />
        <TagOutline content="Finance" />
        <TagOutline content="Business & Industrial" />
      </div>
    </div>
  );
};

export default TagsSection;
