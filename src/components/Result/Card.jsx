import React from "react";
import Divider from "@/components/Result/Divider";

const Card = ({ img, brand, serial, deskripsi, harga, tags = [] }) => {
  return (
    <div className="">
      <a href="#" className="block rounded-lg p-4 shadow-lg shadow-indigo-100">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="h-56 w-full rounded-md object-cover"
        />

        <div className="mt-2">
          <dl>
            <div>
              <dt className="sr-only">Brand</dt>

              <dd className="font-medium">{brand}</dd>
            </div>

            <div className="pb-2">
              <dt className="sr-only">Serial</dt>

              <dd className="text-sm text-gray-500">{serial}</dd>
            </div>

            <div>
              <dt className="sr-only">Deskripsi</dt>

              <dd className="text-sm text-gray-500">{deskripsi}</dd>
            </div>
            <Divider />

            <div>
              <dt className="sr-only">Harga</dt>

              <dd className="text-sm text-gray-500">{harga}</dd>
            </div>
          </dl>

          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="whitespace-nowrap rounded-full bg-blue-100 px-4 py-2 text-sm text-blue-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
