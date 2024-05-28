import React from "react";

const FilterSize = () => {
  return (
    <div>
      <fieldset>
        <p className="text-lg font-medium text-gray-900">
          Size Frame Kacamata?
        </p>

        <p className="mt-1 text-pretty text-sm"></p>

        <div className="space-y-2">
          <label
            htmlFor="Small"
            className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300"
                id="Small"
              />
            </div>

            <div>
              <p className="font-medium text-gray-900">Small</p>
            </div>
          </label>

          <label
            htmlFor="Medium"
            className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300"
                id="Medium"
              />
            </div>

            <div>
              <p className="font-medium text-gray-900">Medium</p>
            </div>
          </label>

          <label
            htmlFor="Large"
            className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300"
                id="Large"
              />
            </div>

            <div>
              <p className="font-medium text-gray-900">Large</p>
            </div>
          </label>
        </div>
      </fieldset>
    </div>
  );
};

export default FilterSize;
