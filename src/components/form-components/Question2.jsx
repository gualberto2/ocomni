import React, { useEffect } from "react";
import { qTwoAtom } from "./Atoms/atoms";
import { useAtom } from "jotai";

const Question2 = () => {
  const [rangeValue, setRangeValue] = useAtom(qTwoAtom);
  const handleRangeChange = (e) => {
    const { value } = e.target;
    setRangeValue(value);
    console.log(value);
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
      />
    </div>
  );
};

export default Question2;
