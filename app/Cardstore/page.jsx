"use client";

import Footer from "@/components/Footer";
import List from "@/components/List";
import Nav from "@/components/Nav";
import store from "@/redux/Store";
import React from "react";
import { Provider } from "react-redux";

export default function page() {
  return (
    <div>
      <Provider store={store}>
        <Nav />
        <List />
        <Footer />
      </Provider>
    </div>
  );
}
