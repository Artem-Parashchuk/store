import { Route, Routes } from "react-router-dom";

import { Home } from "../Home/Home";

export const Layout = () => {
  return (
    <Routes>
      <Route
        index
        element={<Home />}
      />
    </Routes>
  );
};
