import React from "react";

const FilterBentuk = () => {
  return (
    <div>
      <fieldset>
        <p className="text-lg font-medium text-gray-900">Preferensi Bentuk?</p>

        <p className="mt-1 text-pretty text-sm"></p>

        <div className="space-y-2">
          <label
            htmlFor="Rectangle"
            className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300"
                id="Rectangle"
              />
            </div>

            <div>
              <p className="font-medium text-gray-900">Rectangle</p>
            </div>
          </label>

          <label
            htmlFor="Square"
            className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300"
                id="Square"
              />
            </div>

            <div>
              <p className="font-medium text-gray-900">Square</p>
            </div>
          </label>

          <label
            htmlFor="Oval"
            className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300"
                id="Oval"
              />
            </div>

            <div>
              <p className="font-medium text-gray-900">Oval</p>
            </div>
          </label>

          <label
            htmlFor="Irregular"
            className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300"
                id="Irregular"
              />
            </div>

            <div>
              <p className="font-medium text-gray-900">Irregular</p>
            </div>
          </label>

          <label
            htmlFor="Phantos"
            className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300"
                id="Phantos"
              />
            </div>

            <div>
              <p className="font-medium text-gray-900">Phantos</p>
            </div>
          </label>

          <label
            htmlFor="Pilot"
            className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300"
                id="Pilot"
              />
            </div>

            <div>
              <p className="font-medium text-gray-900">Pilot</p>
            </div>
          </label>

          <label
            htmlFor="Butterfly"
            className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300"
                id="Butterfly"
              />
            </div>

            <div>
              <p className="font-medium text-gray-900">Butterfly</p>
            </div>
          </label>

          <label
            htmlFor="Pillow"
            className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300"
                id="Pillow"
              />
            </div>

            <div>
              <p className="font-medium text-gray-900">Pillow</p>
            </div>
          </label>
        </div>
      </fieldset>
    </div>
  );
};

export default FilterBentuk;
