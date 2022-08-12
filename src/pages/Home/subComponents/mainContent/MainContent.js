import React from "react";
import CreatePost from "./CreatePost";
import Story from "./Story";

const MainContent = () => {
  return (
    <div className="flex flex-col gap-5">
      <Story />
      <CreatePost />
    </div>
  );
};

export default MainContent;
