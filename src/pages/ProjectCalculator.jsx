import React from "react";
import Survey from "../components/Survey";
import { useState } from "react";

export default function ProjectCalculator() {
  const [hours, setHours] = useState(0);
  const [page, setPage] = useState(0);

  const FormTitles = [
    "Choose a service",
    "Choose the stage of your project, or start from scratch",
    "How many pages/screens do you see having?",
    "Would you like any special features?",
    "Do You need a shopping cart?",
  ];

  const handlePrevClick = () => {
    if (page === 1) {
      setHours(0); // Reset hours to 0 on the first page
    } else {
      setHours((currHours) => currHours - 20);
    }
    setPage((currPage) => currPage - 1);
  };

  const handleNextClick = () => {
    setHours((currHours) => currHours + 20);
    if (page === FormTitles.length - 1) {
      alert("End of form");
    } else {
      setPage((currPage) => currPage + 1);
    }
  };

  return (
    <div className="">
      <Survey />
      <div className="w-full flex flex-row justify-around border-t border-gray-500 sticky ">
        <button
          disabled={page === 0}
          onClick={handlePrevClick}
          className="hover:bg-gray-200 w-full h-full py-2 transition ease-in-out duration-150 rounded-sm disabled:text-gray-300 disabled:hover:bg-gray-50"
        >
          Prev
        </button>
        <div className="border-r border-gray-500"></div>
        <button
          onClick={handleNextClick}
          className="hover:bg-gray-200 w-full h-full py-2 transition ease-in-out duration-150 rounded-sm"
        >
          {page === FormTitles.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
    /* I will be importing the FormSurvey component, and the FormProvider components then nesting form in the
    form provider component...*/
  );
}
