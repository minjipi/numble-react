import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TestMain from "./main/TestMain";

class Routing extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/testmain" element={<TestMain />} />
        </Routes>
      </Router>
    );
  }
}

export default Routing;
