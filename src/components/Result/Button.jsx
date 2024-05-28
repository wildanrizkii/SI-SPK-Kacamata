"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Button = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center gap-4">
      <button
        className="rounded mb-4 border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
        onClick={() => router.push("/filter")}
      >
        Ulangi
      </button>
      <button
        className="rounded mb-4 border border-blue-600 bg-transparent px-12 py-3 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring active:text-blue-500"
        onClick={() => router.push("/")}
      >
        Kembali ke Home
      </button>
    </div>
  );
};

export default Button;
