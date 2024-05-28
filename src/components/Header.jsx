"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {
  const router = useRouter();
  return (
    <div>
      <header className="bg-transparent">
        <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <img className="h-16" src="/images/logospk.png" alt="logospk" />
              <p className="">SPK Kacamata</p>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <button
                    className="rounded-md bg-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow"
                    onClick={() => router.push("/login")}
                  >
                    Login
                  </button>

                  <div className="hidden sm:flex">
                    <button
                      className="rounded-md bg-gray-200 px-5 py-2.5 text-sm font-medium text-gray-500"
                      onClick={() => router.push("/register")}
                    >
                      Register
                    </button>
                  </div>
                </div>

                <div className="block md:hidden sm:hidden">
                  <button
                    className="rounded-md bg-gray-200 px-5 py-2.5 text-sm font-medium text-gray-500"
                    onClick={() => router.push("/register")}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
