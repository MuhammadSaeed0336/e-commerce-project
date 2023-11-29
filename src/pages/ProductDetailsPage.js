import React from "react";
import ProductDetails from "../features/product/components/ProductDetails";
import NavBar from "../features/navbar/Navbar";

const ProductDetailsPage = () => {
  return (
    <>
      <NavBar>
        <ProductDetails />
      </NavBar>
    </>
  );
};

export default ProductDetailsPage;
