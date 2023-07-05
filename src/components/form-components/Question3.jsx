import { useAtom } from "jotai";
import React, { useState } from "react";
import { Hours, qThreeAtom } from "./Atoms/atoms";

const Question3 = () => {
  const [slider, setSlider] = useAtom(qThreeAtom);
  const [stepValue, setStepValue] = useState(0);
  const [hours, setHours] = useAtom(Hours);

  const handleRangeChange = (e) => {
    const { value } = e.target;
    setSlider(value);
    console.log(value);
    setStepValue(parseInt(value));
  };
  const handleOptionSelect = (value) => {
    setStepValue(value);
  };

  const calculateAdditionalHours = (pages) => {
    if (pages > 5 && pages <= 10) {
      return 80;
    } else if (pages > 10 && pages <= 15) {
      return 120;
    } else if (pages > 15 && pages <= 20) {
      return 160;
    } else if (pages > 20 && pages <= 30) {
      return 200;
    } else if (pages > 30) {
      return 250;
    } else {
      return 60;
    }
  }; /* This function above determines the additional
  hours needed based on the number of pages selected.
  */

  const stepLabels = [
    "≤5 Pages",
    "≤10 Pages",
    "≤20 Pages",
    "≤30 Pages",
    "40+ Pages",
  ];

  return (
    <div className="h-full w-full">
      <input
        className="w-full h-full appearance-none bg-gray-200 rounded-md focus:outline-none focus:bg-gray-300"
        type="range"
        id="pages"
        name="pages"
        min="1"
        max="5"
        steps="1"
        value={slider}
        onChange={handleRangeChange}
      />
      <div className="">
        <ul className="flex flex-row justify-between items-center">
          {stepLabels.map((label, index) => (
            <li
              key={index}
              className={`cursor-pointer text-sm font-medium text-gray-500 hover:bg-gray-100 ${
                stepValue === index ? "font-bold" : ""
              }`}
              onClick={() => handleOptionSelect(index)}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Question3;
