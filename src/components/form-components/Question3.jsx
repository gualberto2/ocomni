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

  return (
    <div className="h-full w-full">
      <input
        className="w-full h-full appearance-none bg-gray-300 rounded-md focus:outline-none focus:bg-gray-500"
        type="range"
        id="pages"
        name="pages"
        min="1"
        max="5"
        steps="1"
        value={slider}
        onChange={handleRangeChange}
      />

      {/* <div className="hours-info">
        <p className="invisible">
          {additionalHours} <span className="invisible">Hours to complete</span>
        </p>
      </div>
      <div className="footer"></div> */}
    </div>
  );
};

export default Question3;
//  <div className="flex mx-auto mb-8">
//         <div
//           className={`justify-between flex-grow ${
//             sliderValue >= 1 && sliderValue <= 5 ? "selected" : ""
//           }`}
//         >
//           1 - 5 Pages
//         </div>
//         <div
//           className={`justify-between flex-grow ${
//             sliderValue > 5 && sliderValue <= 10 ? "selected" : ""
//           }`}
//         >
//           5 - 10 Pages
//         </div>
//         <div
//           className={`justify-between flex-grow ${
//             sliderValue > 10 && sliderValue <= 15 ? "selected" : ""
//           }`}
//         >
//           10 - 15 Pages
//         </div>
//         <div
//           className={`justify-between flex-grow ${
//             sliderValue > 15 && sliderValue <= 20 ? "selected" : ""
//           }`}
//         >
//           15 - 20 Pages
//         </div>
//         <div
//           className={`justify-between flex-grow ${
//             sliderValue > 20 && sliderValue <= 30 ? "selected" : ""
//           }`}
//         >
//           20+ Pages
//         </div>
//       </div>
