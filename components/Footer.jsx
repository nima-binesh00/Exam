import { Rainbow } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full p-10 pt-2 text-white pb-1 bg-gray-900 flex justify-between ">
      <span className="text-green-400">
        {" "}
        <Rainbow size={40} />
      </span>
      <p>Copyright © 2025 Tailwind Labs Inc. · Trademark Policy</p>
    </footer>
  );
}
