import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./shared/Navigation/Navigation";
function App() {
  return (
    <>
      {/* <h1 className="text-center text-green-500 text-5xl">In the name of Allah</h1> */}
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
