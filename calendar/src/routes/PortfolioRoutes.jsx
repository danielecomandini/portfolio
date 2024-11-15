// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PortfolioHome from "../projects/home/PortfolioHome";

function PortfolioRoutes() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<PortfolioHome />} />
          {/*<Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
          <Route path="/*" element={<div>NO PATH DEFINED</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default PortfolioRoutes;
