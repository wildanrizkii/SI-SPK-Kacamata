import React from "react";

const FilterGender = () => {
  return (
    <div>
      <fieldset>
        <p className="text-lg font-medium text-gray-900">Untuk siapa?</p>

        <p className="mt-1 text-pretty text-sm"></p>

        <div className="space-y-2">
          <label
            htmlFor="Pria"
            className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300"
                id="Pria"
              />
            </div>

            <div>
              <p className="font-medium text-gray-900">Pria</p>
            </div>
          </label>

          <label
            htmlFor="Wanita"
            className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300"
                id="Wanita"
              />
            </div>

            <div>
              <p className="font-medium text-gray-900">Wanita</p>
            </div>
          </label>
        </div>
      </fieldset>
    </div>
  );
};

export default FilterGender;
