import React from "react";

const FilterKeperluan = () => {
  return (
    <div>
      <fieldset>
        <p className="text-lg font-medium text-gray-900">Perlu buat apa?</p>

        <p className="mt-1 text-pretty text-sm">
          (Reading glasses or Sunglasses?)
        </p>

        <div className="space-y-2">
          <label
            htmlFor="baca"
            className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300"
                id="baca"
              />
            </div>

            <div>
              <p className="font-medium text-gray-900">Buat Baca</p>
            </div>
          </label>

          <label
            htmlFor="fashion"
            className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300"
                id="fashion"
              />
            </div>

            <div>
              <p className="font-medium text-gray-900"> Gaya / Fashion </p>
            </div>
          </label>
        </div>
      </fieldset>
    </div>
  );
};

export default FilterKeperluan;
