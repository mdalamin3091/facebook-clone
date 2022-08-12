import React from "react";
import Index from "./subComponents/LeftSidebar/Index";
import MainContent from "./subComponents/mainContent/MainContent";

const Home = () => {
  return (
    <>
      <main className="bg-home_bg p-6">
        {/* <h1>In the name of Allah</h1> */}
        <div className="container grid grid-cols-8 gap-3">
          <div className="col-span-2 hidden lg:block">
            <Index />
          </div>
          <div className="col-span-4">
            <MainContent />
          </div>
          <div className="col-span-2 bg-white"></div>
        </div>
      </main>
    </>
  );
};

export default Home;
