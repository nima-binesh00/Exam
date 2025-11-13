"use client";

import { Rainbow, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

export default function Nav() {
  const cartItems = useSelector((state) => state.Store);
  const itemCount = cartItems.length;
  return (
    <nav className="w-full flex  justify-between px-10 pt-5 align-middle bg-slate-800">
      <article className="text-green-400">
        <Rainbow size={40} />
      </article>
      <article className="flex gap-2">
        <div className="relative inline-block">
          <Link href="/Cardstore">
            <ShoppingBag size={40} className="text-white" />
          </Link>

          {/* دایره قرمز برای تعداد آیتم‌ها */}
          {itemCount > 0 && (
            <span
              className="
            absolute -top-1 -right-1 
            bg-red-600 text-white text-xs 
            w-5 h-5 flex items-center justify-center 
            rounded-full font-bold
          "
            >
              {itemCount}
            </span>
          )}
        </div>
        <Link href={"/Contact"}>
          <Image
            src={"/images.png"}
            width={40}
            height={40}
            className="rounded-full"
          />
        </Link>
      </article>
    </nav>
  );
}
