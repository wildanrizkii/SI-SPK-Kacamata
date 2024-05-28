import React from "react";

const FilterBahan = () => {
  return (
    <div>
      <fieldset>
        <p className="text-lg font-medium text-gray-900">Preferensi Bahan?</p>

        <p className="mt-1 text-pretty text-sm"></p>

        <div className="space-y-2">
          <label
            htmlFor="Metal"
            className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300"
                id="Metal"
              />
            </div>

            <div>
              <p className="font-medium text-gray-900">Metal</p>
            </div>
          </label>

          <label
            htmlFor="Plastik"
            className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300"
                id="Plastik"
              />
            </div>

            <div>
              <p className="font-medium text-gray-900">Plastik</p>
            </div>
          </label>

          <label
            htmlFor="Propionate"
            className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300"
                id="Propionate"
              />
            </div>

            <div>
              <p className="font-medium text-gray-900">Propionate</p>
            </div>
          </label>

          <label
            htmlFor="Stainless"
            className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300"
                id="Stainless"
              />
            </div>

            <div>
              <p className="font-medium text-gray-900">Stainless</p>
            </div>
          </label>

          <label
            htmlFor="Titanium"
            className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300"
                id="Titanium"
              />
            </div>

            <div>
              <p className="font-medium text-gray-900">Titanium</p>
            </div>
          </label>

          <label
            htmlFor="Wood"
            className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300"
                id="Wood"
              />
            </div>

            <div>
              <p className="font-medium text-gray-900">Wood</p>
            </div>
          </label>
        </div>
      </fieldset>
    </div>
  );
};

export default FilterBahan;
