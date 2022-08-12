import React from "react";
import Index from "../subComponents/LeftSidebar/Index";

const Home = () => {
  return (
    <>
      <main className="bg-gray-100 p-3">
        {/* <h1>In the name of Allah</h1> */}
        <div className="container grid grid-cols-4">
          <div className="col-span-1 hidden lg:block">
            <Index />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
