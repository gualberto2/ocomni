import React from "react";
import { useAtom } from "jotai";
import { qOneAtom } from "./Atoms/atoms";

const Question1 = () => {
  const [selected, setSelected] = useAtom(qOneAtom);

  const inputSelection = (e) => {
    const { name, value } = e.target;
    setSelected({ ...selected, [name]: value });
    console.log(value);
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="mt-6 border-y py-3 px-7 flex flex-row items-center w-full  hover:bg-gray-100">
          <input
            type="radio"
            id="development"
            name="services"
            label="Development"
            value="development"
            className=""
            onChange={inputSelection}
            checked={selected.services === "development"}
          />
          <label htmlFor="development">Development</label>
        </div>
        <div className=" py-3 px-7 flex flex-row items-center w-full  hover:bg-gray-100">
          <input
            type="radio"
            id="design"
            name="services"
            value="design"
            className=""
            onChange={inputSelection}
            checked={selected.services === "design"}
          />
          <label htmlFor="design">Design</label>
        </div>

        <div className="border-y py-3 px-7 flex flex-row items-center w-full  hover:bg-gray-100">
          <input
            type="radio"
            id="both"
            name="services"
            value="both"
            className=""
            checked={selected.services === "both"}
            onChange={inputSelection}
          />
          <label htmlFor="both">Both</label>
        </div>
      </div>
    </div>
  );
};

export default Question1;
