import React from "react";
import { useState } from "react";
import { atom, useAtom } from "jotai";
import {
  qOneAtom,
  qTwoAtom,
  qThreeAtom,
  qFourAtom,
  qFiveAtom,
  Hours,
} from "../components/form-components/Atoms/atoms";
import Question1 from "../components/form-components/Question1";
import Question2 from "../components/form-components/Question2";
import Question3 from "../components/form-components/Question3";
import Question4 from "../components/form-components/Question4";
import Question5 from "../components/form-components/Question5";

export default function ProjectCalculator() {
  //  Global Atoms (Variables) State Storage
  // expiremental :: const userData = atom({ name: "", email: "", phone: "" });
  const [selected] = useAtom(qOneAtom);
  // Local Variable State
  const [page, setPage] = useState(0);
  const [hours, setHours] = useAtom(Hours);

  const FormTitles = [
    "Choose a service",
    "Choose the stage of your project, or start from scratch",
    "How many pages do you plan to have on your website?",
    "Would you like any special features?",
    "Do You need a shopping cart?",
  ];

  //Change question components to objects containing the actual HTML/Object information for each question, or function holding arguments -> pagedisplay() and then return function

  const PageDisplay = () => {
    if (page === 0) {
      return <Question1 />;
    } else if (page === 1) {
      return <Question2 />;
    } else if (page === 2) {
      return <Question3 />;
    } else if (page === 3) {
      return <Question4 />;
    } else if (page === 4) {
      return <Question5 />;
    }
  };

  const pageNum = PageDisplay();

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
    <div className="h-screen">
      <div className="mt-20 sm:px-8 px-4 h-[450px]">
        <h1 className="font-bold text-3xl sm:text-4xl mb-6">
          {FormTitles[page]}
        </h1>
        <div className="">{pageNum}</div>
      </div>

      <div className="">
        {/* Hours to complete  */}
        <div className="border-t mt-8 px-2">
          <p className="text-semibold text-amber-600 py-2">
            {hours}+
            <span className="text-semibold text-gray-600">
              {" "}
              Hours to complete
            </span>
          </p>
        </div>

        {/* Next and Prev Buttons */}
        <div className="w-full flex flex-row justify-around border-t bottom border-gray-500  ">
          <button
            disabled={page === 0}
            onClick={handlePrevClick}
            className="hover:bg-gray-200 w-full h-full py-2 transition ease-in-out duration-150 rounded-sm disabled:text-gray-300 disabled:hover:bg-gray-50 font-bold text-gray-700"
          >
            Prev
          </button>
          <div className="border-r border-gray-500"></div>
          <button
            onClick={handleNextClick}
            className="hover:bg-gray-200 w-full h-full py-2 transition ease-in-out duration-150 rounded-sm text-gray-700 font-bold"
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
    /* I will be importing the FormSurvey component, and the FormProvider components then nesting form in the
    form provider component...*/
  );
}
