import Image from "next/image";
import React from "react";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="w-full bg-slate-800">
      <Nav />
      <section className="w-full h-[500px] flex flex-col align-middle justify-center gap-5">
        <h1 className="text-center text-5xl text-green-400">
          ALL Your digital products <br />
          is one click Away
        </h1>
        <h2 className="text-center text-white">
          start exploring state of the art assets Now!
        </h2>
        <div className="flex justify-center gap-5">
          <button className="p-5 bg-green-400 text-white">Get started</button>
          <button className="p-5 border-green-400 border-2 text-white">
            Learn more
          </button>
        </div>
      </section>
    </header>
  );
}
