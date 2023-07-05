import { useAtom } from "jotai";
import React from "react";
import { qFiveAtom } from "./Atoms/atoms";

function Question5() {
  const [answer, setAnswer] = useAtom(qFiveAtom);

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setAnswer((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    console.log(value);
  };

  return (
    <div className="flex flex-col  items-center">
      <div className="mt-6 border-y py-3 px-7 flex flex-row items-center w-full  hover:bg-gray-100 ">
        <input
          type="radio"
          id="true"
          name="question5"
          value="true"
          // checked={answer.service === "true"}
          onChange={handleRadioChange}
          className="rounded-full mr-4"
        />
        <label htmlFor="option1">Yes</label>
      </div>
      <div className="mt-6 border-y py-3 px-7 flex flex-row items-center w-full  hover:bg-gray-100 ">
        <input
          type="radio"
          id="false"
          name="question5"
          value="false"
          // checked={answer.service === "false"}
          onChange={handleRadioChange}
          className="rounded-full mr-4"
        />
        <label htmlFor="false">No</label>
      </div>
    </div>
  );
}

export default Question5;
