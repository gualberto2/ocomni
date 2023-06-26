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
        : prevFormData.features.filter((feature) => feature !== name)
    }));
  };

  const handleRadioChange = (event) => {
    const { value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      question5: value
    }));
  };

  const FormTitles = [
    "Choose a service",
    "Choose the stage of your project, or start from scratch",
    "How many pages/screens do you see having?",
    "Would you like any special features?",
    "Do You need a shopping cart?"
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
      alert("FORM SUBMITTED");
    } else {
      setPage((currPage) => currPage + 1);
    }
  };

  return (
    <div className="form container mx-auto">
      <div className="form-container container mx-auto">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
          <div className="body">{PageDisplay()}</div>
          <div className="footer">
            <p>
              {hours}
              <span> + Hours to complete</span>
            </p>
            <button disabled={page === 0} onClick={handlePrevClick}>
              Prev
            </button>
            <button onClick={handleNextClick}>
              {page === FormTitles.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Survey;