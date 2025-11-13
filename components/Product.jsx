"use client";

import React from "react";
import { Home, Box, CircleCheck, ShoppingCart, List } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { increment } from "@/redux/state";

export default function Product({ Data, All }) {
  const dispatch = useDispatch();
  return (
    <section className=" w-full text-white bg-gray-600">
      <section className="w-full">
        <div className="flex px-10 items-center space-x-2  text-sm text-white">
          <Link href="/" className="flex items-center gap-1">
            <Home size={16} />
            <span>Home</span>
          </Link>
          <span>/</span>
          <Link
            href="/Products"
            className="flex items-center gap-1 text-lime-300 "
          >
            <Box size={16} />
            <span>Product</span>
          </Link>
        </div>
        <article className="w-full flex h-fit gap-3 px-10 py-5 flex-col md:flex-row">
          <Image
            src={Data.image}
            width={400}
            height={400}
            className=" w-full md:w-1/2 h-[340px]  rounded-2xl"
          />
          <article className="w-full md:w-1/2 flex flex-col justify-between text-center md:text-start">
            <h1 className="text-lg font-bold">{Data.title}</h1>
            <p className="text-opacity-70">TECK</p>
            <h2>{Data.description}</h2>
            <span className="flex gap-1">
              <CircleCheck className="text-green-600" /> Lorem ipsum dolor sit{" "}
            </span>
            <p className="text-2xl">${Data.price}</p>
            <button
              className="w-[160px] p-5 pt-3 rounded-2xl bg-green-400 flex justify-center gap-2"
              onClick={() => {
                dispatch(increment({ ...Data }));
                alert("add new card to store");
              }}
            >
              <ShoppingCart />
              Add to card
            </button>
          </article>
        </article>
      </section>
      <section className="w-full">
        <p className="text-2xl px-10">similar Products</p>
        <article className="grid grid-cols-12 w-full px-10 py-5 gap-5 ">
          {All.map((item) => {
            if (item.id <= 4) {
              return (
                <Link
                  href={{ pathname: "/Products", query: { id: item.id } }}
                  className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3"
                >
                  <article
                    className="w-full text-white bg-slate-700 rounded-md pb-3"
                    key={item.id}
                  >
                    <Image
                      src={item.image}
                      width={400}
                      height={400}
                      className="w-full h-72 rounded-md"
                    />
                    <h3 className="truncates px-5 pt-2">{item.title}</h3>
                    <p className="px-5 flex justify-between pt-2">
                      <span className="flex gap-1">
                        <List /> TECH
                      </span>
                      {item.price}
                    </p>
                  </article>
                </Link>
              );
            } else return;
          })}
        </article>
      </section>
    </section>
  );
}
