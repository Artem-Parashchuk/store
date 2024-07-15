import { Route, Routes } from "react-router-dom";

import { Home } from "../Home/Home";
import { SingleProducts } from "../SingleProducts/SingleProducts";

export const Layout = () => {
  return (
    <Routes>
      <Route
        index
        element={<Home />}
      />
      {/* <Route path="/products" element={<SingleProducts/>}/> */}
      <Route path="/products/:id" element={<SingleProducts />} />
    </Routes>
  );
};
