import React from "react";
import CreatePost from "./CreatePost";
import CreateRoom from "./CreateRoom";
import Story from "./Story";

const MainContent = () => {
  return (
    <div className="flex flex-col gap-5">
      <Story />
      <CreatePost />
      <CreateRoom />
    </div>
  );
};

export default MainContent;
