import React from "react";
import { useAtom } from "jotai";
import { qOneAtom } from "./Atoms/atoms";

const Question1 = () => {
  const [selected, setSelected] = useAtom(qOneAtom);

  const inputSelection = (e) => {
    const { value } = e.target;
    setSelected({ services: value });
    console.log(`This is question one: ${value}`);
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="mt-6 border-y py-3 px-7 flex flex-row items-center w-full  hover:bg-gray-100 ">
          <input
            type="radio"
            id="development"
            name="services"
            label="Development"
            value="development"
            className="text-purple-300 focus:ring-purple-500"
            onChange={inputSelection}
            checked={selected.services === "development"}
          />
          <label htmlFor="development" className=" ml-2 text-xl font-medium ">
            Development
          </label>
        </div>
        <div className=" py-3 px-7 flex flex-row items-center w-full  hover:bg-gray-100">
          <input
            type="radio"
            id="design"
            name="services"
            value="design"
            className="text-purple-300 focus:ring-purple-500"
            onChange={inputSelection}
            checked={selected.services === "design"}
          />
          <label htmlFor="design" className=" ml-2 text-xl font-medium ">
            Design
          </label>
        </div>

        <div className="border-y py-3 px-7 flex flex-row items-center w-full  hover:bg-gray-100">
          <input
            type="radio"
            id="both"
            name="services"
            value="both"
            className="text-purple-300 focus:ring-purple-500"
            checked={selected.services === "both"}
            onChange={inputSelection}
          />
          <label htmlFor="both" className=" ml-2 text-xl font-medium ">
            Both
          </label>
        </div>
      </div>
    </div>
  );
};

export default Question1;
