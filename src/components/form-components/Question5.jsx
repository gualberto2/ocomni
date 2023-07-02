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
    <div className="flex gap-3 items-center">
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
  );
}

export default Question5;
