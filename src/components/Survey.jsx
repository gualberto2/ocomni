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
  const [timer, setTimer] = useState(0); //Sets timer for question4.jsx, which will have its total added to the global {hours} check the span in the return statement below.
  const [formData, setFormData] = useState({
    features: [],
    question5: "",
  });

  const handleSliderChange = (event) => {
    const value = parseInt(event.target.value);
    setSliderValue(value);
  };  // Memory for both slider questions2.jsx and 3.jsx

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      features: checked
        ? [...prevFormData.features, name]
        : prevFormData.features.filter((feature) => feature !== name)
    }));
  
    // Update timers based on checkbox selection
    if (checked && name === 'usersandauth') {
        setTimer((prevTimer) => prevTimer + 10); // Add 10 hours to timer
        setHours((prevHours) => prevHours + 10); // Add 10 hours to hours
    } else if (!checked && name === 'usersandauth') {
        setTimer((prevTimer) => prevTimer >= 10 ? prevTimer - 10 : 0); // Subtract 10 hours from timer if greater than or equal to 10
        setHours((prevHours) => prevHours >= 10 ? prevHours - 10 : 0); // Subtract 10 hours from hours if greater than or equal to 10
    } else if (checked && name === 'membersonly') {
        setTimer((prevTimer) => prevTimer + 10); // Add 10 hours to timer
        setHours((prevHours) => prevHours + 10); // Add 10 hours to hours
    } else if (!checked && name === 'membersonly') {
        setTimer((prevTimer) => prevTimer >= 10 ? prevTimer - 10 : 0); // Subtract 10 hours from timer if greater than or equal to 10
        setHours((prevHours) => prevHours >= 10 ? prevHours - 10 : 0); // Subtract 10 hours from hours if greater than or equal to 10
    } else if (checked && name === 'adminpanel') {
        setTimer((prevTimer) => prevTimer + 30); // Add 30 hours to timer
        setHours((prevHours) => prevHours + 30); // Add 30 hours to hours
    } else if (!checked && name === 'adminpanel') {
        setTimer((prevTimer) => prevTimer >= 30 ? prevTimer - 30 : 0); // Subtract 30 hours from timer if greater than or equal to 30
        setHours((prevHours) => prevHours >= 30 ? prevHours - 30 : 0); // Subtract 30 hours from hours if greater than or equal to 30
    } else if (checked && name === 'crmsales') {
        setTimer((prevTimer) => prevTimer + 130); // Add 130 hours to timer
        setHours((prevHours) => prevHours + 130); // Add 130 hours to hours
    } else if (!checked && name === 'crmsales') {
        setTimer((prevTimer) => prevTimer >= 130 ? prevTimer - 130 : 0); // Subtract 130 hours from timer if greater than or equal to 30
        setHours((prevHours) => prevHours >= 130 ? prevHours - 130 : 0); // Subtract 130 hours from hours if greater than or equal to 30
    } else if (checked && name === 'dashboard') {
        setTimer((prevTimer) => prevTimer + 50); // Add 50 hours to the timer
        setHours((prevHours) => prevHours + 50); // Add 50 hours to the hours
    } else if ( !checked && name === 'dashboard') {
        setTimer((prevTimer) => prevTimer >= 50 ? prevTimer - 50 : 0); // Subtract 50 hours from timer if greater than or equal to 50
        setHours((prevHours) => prevHours >= 50 ? prevHours - 50 : 0); // Subtract 50 hours from hours if greater than or equal to 50
    } else if (checked && name === 'blog') {
        setTimer((prevTimer) => prevTimer + 40); // Add 40 hours to the timer
        setHours((prevHours) => prevHours + 40); // Add 40 hours to the hours
    } else if (!checked && name === 'blog') {
        setTimer((prevTimer) => prevTimer >= 40 ? prevTimer - 40 : 0); // Subtract 40 hours from timer if greater than or equal to 50
        setHours((prevHours) => prevHours >= 40 ? prevHours - 40 : 0); // Subtract 40 hours from hours if greater than or equal to 50
    } else if (checked && name === 'eventscheduling') {
        setTimer((prevTimer) => prevTimer + 50); // Add 50 hours to the timer
        setHours((prevHours) => prevHours + 50); // Add 50 hours to the hours
    } else if ( !checked && name === 'eventscheduling') {
        setTimer((prevTimer) => prevTimer >= 50 ? prevTimer - 50 : 0); // Subtract 50 hours from timer if greater than or equal to 50
        setHours((prevHours) => prevHours >= 50 ? prevHours - 50 : 0); // Subtract 50 hours from hours if greater than or equal to 50
    } else if (checked && name === 'reservations') {
        setTimer((prevTimer) => prevTimer + 50); // Add 50 hours to the timer
        setHours((prevHours) => prevHours + 50); // Add 50 hours to the hours
    } else if ( !checked && name === 'reservations') {
        setTimer((prevTimer) => prevTimer >= 50 ? prevTimer - 50 : 0); // Subtract 50 hours from timer if greater than or equal to 50
        setHours((prevHours) => prevHours >= 50 ? prevHours - 50 : 0); // Subtract 50 hours from hours if greater than or equal to 50
    } else if (checked && name === 'chatsandlivechat') {
        setTimer((prevTimer) => prevTimer + 80); // Add 80 hours to the timer
        setHours((prevHours) => prevHours + 80); // Add 80 hours to the hours
    } else if ( !checked && name === 'chatsandlivechat') {
        setTimer((prevTimer) => prevTimer >= 80 ? prevTimer - 80 : 0); // Subtract 80 hours from timer if greater than or equal to 80
        setHours((prevHours) => prevHours >= 80 ? prevHours - 80 : 0); // Subtract 80 hours from hours if greater than or equal to 80
    } else if (checked && name === 'imgandvidgallery') {
        setTimer((prevTimer) => prevTimer + 10); // Add 10 hours to the timer
        setHours((prevHours) => prevHours + 10); // Add 10 hours to the hours
    } else if ( !checked && name === 'imgandvidgallery') {
        setTimer((prevTimer) => prevTimer >= 10 ? prevTimer - 10 : 0); // Subtract 10 hours from timer if greater than or equal to 50
        setHours((prevHours) => prevHours >= 10 ? prevHours - 10 : 0); // Subtract 10 hours from hours if greater than or equal to 50
    } else if (checked && name === 'geolocation') {
        setTimer((prevTimer) => prevTimer + 50); // Add 50 hours to the timer
        setHours((prevHours) => prevHours + 50); // Add 50 hours to the hours
    } else if ( !checked && name === 'geolocation') {
        setTimer((prevTimer) => prevTimer >= 50 ? prevTimer - 50 : 0); // Subtract 50 hours from timer if greater than or equal to 50
        setHours((prevHours) => prevHours >= 50 ? prevHours - 50 : 0); // Subtract 50 hours from hours if greater than or equal to 50
    } else if (checked && name === 'livestream') {
        setTimer((prevTimer) => prevTimer + 420); // Add 420 hours to the timer
        setHours((prevHours) => prevHours + 420); // Add 420 hours to the hours
    } else if ( !checked && name === 'livestream') {
        setTimer((prevTimer) => prevTimer >= 420 ? prevTimer - 420 : 0); // Subtract 420 hours from timer if greater than or equal to 420
        setHours((prevHours) => prevHours >= 420 ? prevHours - 420 : 0); // Subtract 420 hours from hours if greater than or equal to 420
    }
    // Add more conditions for other checkboxes if needed
  };
  
  const handleRadioChange = (event) => {
    const { value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      question5: value
    }));
  }; //This helps to remember the selection in Question5.jsx

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