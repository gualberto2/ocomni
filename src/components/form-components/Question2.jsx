import React from "react";
import { qTwoAtom } from "./Atoms/atoms";
import { useAtom } from "jotai";

const Question2 = () => {
  const [rangeValue, setRangeValue] = useAtom(qTwoAtom);
  const handleRangeChange = (e) => {
    const { value } = e.target;
    setRangeValue(value);
    console.log(`Question 2 ${value}% current stage `);
  };
  const handleOptionSelect = (value) => {
    setRangeValue(value);
  };

  return (
    <div className="h-full w-full">
      <input
        className="w-full h-full appearance-none bg-gray-200 rounded-md focus:outline-none hover:bg-gray-300 transition ease-in-out duration-150"
        type="range"
        id="rangeValue"
        name="rangeValue"
        step="10"
        value={rangeValue}
        onChange={handleRangeChange}
        list="rangeLabels"
      />
      <div className="">
        <ul className=" flex flex-row justify-between items-center">
          <li
            className="cursor-pointer ml-2 text-sm font-medium text-gray-500 hover:bg-gray-100"
            onClick={() => handleOptionSelect(0)}
          >
            0%
          </li>
          <li
            className="cursor-pointer ml-2 text-sm font-medium text-gray-500 hover:bg-gray-100"
            onClick={() => handleOptionSelect(20)}
          >
            20%
          </li>
          <li
            className="cursor-pointer ml-2 text-sm font-medium text-gray-500  hover:bg-gray-100"
            onClick={() => handleOptionSelect(40)}
          >
            40%
          </li>
          <li
            className="cursor-pointer ml-2 text-sm font-medium text-gray-500  hover:bg-gray-100"
            onClick={() => handleOptionSelect(60)}
          >
            60%
          </li>
          <li
            className="cursor-pointer ml-2 text-sm font-medium text-gray-500  hover:bg-gray-100"
            onClick={() => handleOptionSelect(80)}
          >
            80%
          </li>
          <li
            className="cursor-pointer ml-2 text-sm font-medium text-gray-500  hover:bg-gray-100"
            onClick={() => handleOptionSelect(100)}
          >
            100%
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Question2;
