import React from "react";

const FilterBrand = () => {
  return (
    <div>
      <fieldset>
        <p className="text-lg font-medium text-gray-900">
          Brand/Merk Preferensi?
        </p>

        <p className="mt-1 text-pretty text-sm"></p>

        <div className="space-y-2">
          <label
            htmlFor="RayBan"
            className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300"
                id="RayBan"
              />
            </div>

            <div>
              <p className="font-medium text-gray-900">Ray-Ban</p>
            </div>
          </label>

          <label
            htmlFor="Oakley"
            className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300"
                id="Oakley"
              />
            </div>

            <div>
              <p className="font-medium text-gray-900">Oakley</p>
            </div>
          </label>

          <label
            htmlFor="TomFord"
            className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300"
                id="TomFord"
              />
            </div>

            <div>
              <p className="font-medium text-gray-900">Tom Ford</p>
            </div>
          </label>

          <label
            htmlFor="Fila"
            className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300"
                id="Fila"
              />
            </div>

            <div>
              <p className="font-medium text-gray-900">Fila</p>
            </div>
          </label>
        </div>
      </fieldset>
    </div>
  );
};

export default FilterBrand;
