"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Button = () => {
  const router = useRouter();
  return (
    <div>
      <button
        className="rounded mb-4 border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
        onClick={() => router.push("/result")}
      >
        Selesai
      </button>
    </div>
  );
};

export default Button;
