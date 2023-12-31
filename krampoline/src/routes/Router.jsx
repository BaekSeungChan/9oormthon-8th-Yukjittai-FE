import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import App from "../App";
import Test from "../pages/Test";
import SearchAlternative from "../pages/SearchAlternative/SearchAlternative";
import SelectCondition from "../pages/SelectCondition/SelectCondition";
import SelectAlternative from "../pages/SelectAlternative/SelectAlternative";
import SelectOrder from "../pages/SelectOrder/SelectOrder";
import Test2 from "../pages/Test2";
import MapContainer from "../components/MapButton/MapContainer";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
        <Route path="/search-alternative" element={<SearchAlternative />} />
        <Route
          path="/search-alternative/:keyword"
          element={<SearchAlternative />}
        />
        <Route path="/select/condition" element={<SelectCondition />} />
        <Route path="/select/alternative" element={<SelectAlternative />} />
        <Route path="/select/order" element={<SelectOrder />} />
        <Route path="/report" element={<Test2 />} />
      </Routes>
    </BrowserRouter>
  );
}
