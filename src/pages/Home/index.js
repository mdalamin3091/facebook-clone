import React from "react";
import Index from "./subComponents/LeftSidebar/Index";
import DisplayPost from "./subComponents/mainContent/DisplayPost";
import MainContent from "./subComponents/mainContent/MainContent";
import RightSidebar from "./subComponents/RightSidebar/RightSidebar"
const Home = () => {
  return (
    <>
      <main className="bg-home_bg p-0 md:p-6 font-poppins">
        {/* <h1>In the name of Allah</h1> */}
        <div className="container grid grid-cols-8 gap-6">
          <div className="col-span-2 hidden lg:block">
            <Index />
          </div>
          <div className="col-span-8 md:col-span-4">
            <MainContent />
            <DisplayPost />
          </div>
          <div className="col-span-2 hidden lg:block">
            <RightSidebar />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
