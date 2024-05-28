"use client";
import { redirect, useRouter } from "next/navigation";
import React from "react";

const LandingPage = () => {
  const router = useRouter();
  return (
    <>
      <section className="absolute bg-[url('/images/bg.png')] bg-cover bg-center bg-no-repeat inset-0 h-full w-full object-cover opacity-80">
        <div className="absolute inset-0 "></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6  lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              JANGAN BINGUNG LAGI PILIH KACAMATA !
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
              Selamat datang! Website ini berfungsi untuk membantu Anda dalam
              memilih kacamata.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <button
                className="block w-[50%] rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                onClick={() => router.push("/filter")}
              >
                Mulai Pilih Kacamata
              </button>

              {/* <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Login
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
