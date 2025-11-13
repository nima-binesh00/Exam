import { deleteItem } from "@/redux/state";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function List() {
  const dispatch = useDispatch();

  const list = useSelector((state) => state.Store);
  const totalPrice = list.reduce((sum, item) => sum + item.price, 0);
  return (
    <section className="w-full bg-slate-800 text-white pb-10">
      <h1 className="text-center text-3xl pb-5">Your Cart</h1>
      <section className="w-full flex flex-col px-52 pb-10 gap-5">
        {list.map((item) => {
          return (
            <article className=" flex w-full h-[110px]">
              <Image
                src={item.image}
                width={260}
                height={140}
                className="h-full w-[260px]"
              />
              <div className="flex flex-col justify-center w-full gap-3 px-10">
                <h2>{item.title}</h2>
                <p>TECH</p>
                <span>${item.price}</span>
              </div>
              <span
                className="flex justify-end items-center"
                onClick={() => dispatch(deleteItem(item.id))}
              >
                <X size={40} />
              </span>
            </article>
          );
        })}
      </section>
      <hr className="mx-48" />
      <section className="w-full px-52 items-end text-right">
        <h2 className="text-3xl text-center pt-10">Toal</h2>
        <h3 className="text-end text-2xl"> ${totalPrice.toFixed(2)}</h3>
        <Link href={"/"}>
          <button className=" mt-3 p-3 px-7 rounded-2xl bg-green-500">
            Check out
          </button>
        </Link>
      </section>
    </section>
  );
}
