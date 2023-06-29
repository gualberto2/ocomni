import React, { useState } from "react";
import Question1 from "./form-components/Question1";
import Question2 from "./form-components/Question2";
import Question3 from "./form-components/Question3";
import Question4 from "./form-components/Question4";
import Question5 from "./form-components/Question5";

function Survey() {
  const [page, setPage] = useState(0);
  const [hours, setHours] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);
  const [formData, setFormData] = useState({
    features: [],
    question5: "",
  });

  const handleSliderChange = (event) => {
    const value = parseInt(event.target.value);
    setSliderValue(value);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      features: checked
        ? [...prevFormData.features, name]
        : prevFormData.features.filter((feature) => feature !== name),
    }));
  };

  const handleRadioChange = (event) => {
    const { value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      question5: value,
    }));
  };

  const FormTitles = [
    "Choose a service",
    "Choose the stage of your project, or start from scratch",
    "How many pages/screens do you see having?",
    "Would you like any special features?",
    "Do You need a shopping cart?",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <Question1
          formData={formData}
          setFormData={setFormData}
          hours={hours}
          setHours={setHours}
        />
      );
    } else if (page === 1) {
      return (
        <Question2
          formData={formData}
          setFormData={setFormData}
          hours={hours}
          setHours={setHours}
          sliderValue={sliderValue}
          handleSliderChange={handleSliderChange}
        />
      );
    } else if (page === 2) {
      return (
        <Question3
          formData={formData}
          setFormData={setFormData}
          hours={hours}
          setHours={setHours}
          sliderValue={sliderValue}
          handleSliderChange={handleSliderChange}
        />
      );
    } else if (page === 3) {
      return (
        <Question4
          formData={formData}
          setFormData={setFormData}
          handleCheckboxChange={handleCheckboxChange}
          hours={hours}
          setHours={setHours}
        />
      );
    } else if (page === 4) {
      return (
        <Question5
          formData={formData}
          setFormData={setFormData}
          handleRadioChange={handleRadioChange}
          hours={hours}
          setHours={setHours}
        />
      );
    }
  };

  const pageNum = PageDisplay();

  // const handlePrevClick = () => {
  //   if (page === 1) {
  //     setHours(0); // Reset hours to 0 on the first page
  //   } else {
  //     setHours((currHours) => currHours - 20);
  //   }
  //   setPage((currPage) => currPage - 1);
  // };

  // const handleNextClick = () => {
  //   setHours((currHours) => currHours + 20);
  //   if (page === FormTitles.length - 1) {
  //   } else {
  //     setPage((currPage) => currPage + 1);
  //   }
  // };

  return (
    <div className="my-20 sm:px-8 px-4">
      <h1 className="font-bold text-4xl">{FormTitles[page]}</h1>
      <div className="">{pageNum}</div>

      <div className="border-t mt-8">
        <p className="text-semibold text-amber-600 py-2">
          {hours}+
          <span className="text-semibold text-gray-600">
            {" "}
            Hours to complete
          </span>
        </p>
      </div>
    </div>
  );
}

export default Survey;
