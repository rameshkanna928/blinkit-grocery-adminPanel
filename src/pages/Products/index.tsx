import { Routes, Route } from "react-router-dom";
import AllProducts from "./Products";
import Category from "./category";
import AllVariations from "./variations";
import AllBrands from "./brands";
import AllUnits from "./units";
import AllTaxes from "./taxes";

function Products() {
  return (
    <Routes>
      <Route path="/" element={<AllProducts />} />
      <Route path="/category" element={<Category />} />
      <Route path="/variations" element={<AllVariations />} />
      <Route path="/brands" element={<AllBrands />} />
      <Route path="/units" element={<AllUnits />} />
      <Route path="/taxes" element={<AllTaxes />} />
    </Routes>
  );
}

export default Products;
