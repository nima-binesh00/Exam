"use client";

import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Product from "@/components/Product";
import React from "react";
import Data from "../../data/products.json";
import store from "@/redux/Store";
import { Provider } from "react-redux";

export default function page({ searchParams }) {
  const id = searchParams.id;

  const product = Data.find((item) => item.id === Number(id));

  if (!product) return <p className="text-center mt-10">Product not found</p>;
  return (
    <div>
      <Provider store={store}>
        <Nav />
        <Product Data={product} All={Data} />
        <Footer />
      </Provider>
    </div>
  );
}
