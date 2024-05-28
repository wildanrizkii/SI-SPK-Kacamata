import Divider from "@/components/Divider";
import Button from "@/components/Filter/Button";
import FilterBahan from "@/components/Filter/FilterBahan";
import FilterBentuk from "@/components/Filter/FilterBentuk";
import FilterBrand from "@/components/Filter/FilterBrand";
import FilterBudget from "@/components/Filter/FilterBudget";
import FilterGender from "@/components/Filter/FilterGender";
import FilterKeperluan from "@/components/Filter/FilterKeperluan";
import FilterSize from "@/components/Filter/FilterSize";
import Header from "@/components/HeaderOnly";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="relative pb-4">
        <Header />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <div className="rounded-lg px-8 py-2">
          <FilterGender />
        </div>
        <div className="rounded-lg px-8 py-2">
          <FilterKeperluan />
        </div>
        <div className="rounded-lg px-8 py-2">
          <FilterBrand />
        </div>
        <div className="rounded-lg px-8 py-2">
          <FilterSize />
        </div>
        <div className="rounded-lg px-8 py-2">
          <FilterBentuk />
        </div>
        <div className="rounded-lg px-8 py-2">
          <FilterBahan />
        </div>
        <div className="rounded-lg px-8 py-2">
          <FilterBudget />
        </div>
      </div>

      <div className="text-center p-8">
        <Divider />
        <Button />
      </div>
    </div>
  );
};

export default page;
