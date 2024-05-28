import React from "react";

import Card from "@/components/Result/Card";
import Header from "@/components/HeaderOnly";
import Button from "@/components/Result/Button";
const page = () => {
  return (
    <div>
      <div className="relative pb-4">
        <Header />
      </div>
      <div className="px-8 py-6">
        <p className="font-bold text-2xl">Hasil filter :</p>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="rounded-lg px-8 py-2">
          <Card
            brand="Oakley HSTN"
            serial="(009242A-07) s52"
            deskripsi="A Dark Amber/Light Curry W/ Prizm Tungsten"
            harga="Rp 3.000.000"
            tags={["Oakley", "Sunglasses", "Female"]}
          />
        </div>
        <div className="rounded-lg px-8 py-2">
          <Card
            brand="Ray-Ban"
            serial="RB3565"
            deskripsi="001/51 s53"
            harga="Rp 2.728.000"
            tags={["Rayban", "Sunglasses", "Female"]}
          />
        </div>
        <div className="rounded-lg px-8 py-2">
          <Card
            brand="Ray-Ban"
            serial="RB2195F"
            deskripsi="901/31 s53"
            harga="Rp 2.552.000"
            tags={["Rayban", "Sunglasses", "Female"]}
          />
        </div>
      </div>
      <div className="text-center pt-16">
        <Button />
      </div>
    </div>
  );
};

export default page;
