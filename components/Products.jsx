import { List, MoveRight } from "lucide-react";
import React from "react";
import Data from "../data/products.json";
import Image from "next/image";
import Link from "next/link";
export default function Products() {
  return (
    <section className="w-full bg-gray-900 text-white pt-10">
      <article className="w-full px-10 p-3 flex justify-between">
        <span>brand new</span>
        <span className="flex gap-3">
          view all collection <MoveRight />{" "}
        </span>
      </article>
      <article className="grid grid-cols-12 w-full px-10 py-5 gap-5 ">
        {Data.map((item) => {
          return (
            <Link
              href={{ pathname: "/Products", query: { id: item.id } }}
              className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3"
            >
              <article
                className="w-full   text-white bg-slate-700 rounded-md pb-3"
                key={item.id}
              >
                <Image
                  src={item.image}
                  width={390}
                  height={100}
                  className="h-[180px] rounded-md"
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
        })}
      </article>
    </section>
  );
}
