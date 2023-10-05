import React, { FC } from "react";
import Tags from "./Tags";

const TextContentArea: FC = () => {
  return (
    <div className="flex w-full flex-col items-start justify-start  ">
      <Tags title="travel" queryParams="travel" />
    </div>
  );
};

export default TextContentArea;
