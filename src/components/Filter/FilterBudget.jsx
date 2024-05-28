import React from "react";

const FilterBudget = () => {
  return (
    <div>
      <fieldset>
        <p className="text-lg font-medium text-gray-900">Alokasi budget?</p>

        <p className="mt-1 text-pretty text-sm"></p>

        <div className="space-y-2">
          <label
            htmlFor="opsi1"
            className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300"
                id="opsi1"
              />
            </div>

            <div>
              <p className="font-medium text-gray-900">
                Kurang dari Rp 2.000.000
              </p>
            </div>
          </label>

          <label
            htmlFor="opsi2"
            className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300"
                id="opsi2"
              />
            </div>

            <div>
              <p className="font-medium text-gray-900">
                Diantara Rp 2.000.000 sampai Rp 5.000.000
              </p>
            </div>
          </label>

          <label
            htmlFor="opsi3"
            className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300"
                id="opsi3"
              />
            </div>

            <div>
              <p className="font-medium text-gray-900">
                Lebih dari Rp 5.000.000
              </p>
            </div>
          </label>
        </div>
      </fieldset>
    </div>
  );
};

export default FilterBudget;
