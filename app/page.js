"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Products from "@/components/Products";
import store from "@/redux/Store";
import React from "react";
import { Provider } from "react-redux";

export default function page() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Products />
        <Footer />
      </Provider>
    </div>
  );
}
