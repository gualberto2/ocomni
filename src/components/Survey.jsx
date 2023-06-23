import React, { useState } from "react";
import Question1 from "./form-components/Question1";
import Question2 from "./form-components/Question2";
import Question3 from "./form-components/Question3";
import Question4 from "./form-components/Question4";
import Question5 from "./form-components/Question5";

function Survey() {
    // Below is the variable with an array of page, and setPage arg that useState to keep track of which module we are in...
    const [page, setPage] = useState(0);

    /*
    Below is a variable with formData, and setFormData as arguments to be 
    called as a property of the modules below. I'll also use onChange in the modules 
    passing formData, and setFormData as args in the exported functions.
    */
    // State to store form data, including selected checkbox values
    const [formData, setFormData] = useState({
      features: [], //Initializes an empty array...
    });

    // Event handler for checkbox changes
    const handleCheckboxChange = (event) => {
      const {name, checked} = event.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        features: checked
        ? [...prevFormData.features, name] // Add the selected checkbox values to the array
        : prevFormData.features.filter((feature) => feature !== name), // This removes the deselected checkbox value from the array
      }));
    };
    
    // Below is the FormTitles variable which is an array of strings that will be displayed as <h1>'s based on the current page, see "header" className in the return body
    const FormTitles = ["Choose a service", "Choose the stage of your project, or start from scratch", "How many pages/screens do you see having?", "Would you like any special features?", "Do You need a shopping cart?"];

    const PageDisplay = () => {
      if (page === 0 ) {
        return <Question1 formData={formData} setFormData={setFormData}/>;
      } else if (page === 1) {
        return <Question2 formData={formData} setFormData={setFormData}/>;
      } else if (page === 2) {
        return <Question3 formData={formData} setFormData={setFormData}/>;
      } else if (page === 3) {
        return <Question4 formData={formData} setFormData={setFormData} handleCheckboxChange={handleCheckboxChange}/>;
      } else if (page === 4) {
        return <Question5 formData={formData} setFormData={setFormData} handleCheckboxChange={handleCheckboxChange}/>;
      }
    };

    return (
      <div className="form container mx-auto">
        <div className="form-container container mx-auto">
          <div className="header">
            <h1>{FormTitles[page]}</h1>
            <div className="body">{PageDisplay()}</div>
            <div className="footer">
              <button 
                disabled={page == 0}
                onClick={() => {
                 setPage((currPage) => currPage - 1);
                }}
              >
                Prev
              </button>
              <button 
                onClick={() => {
                  if (page === FormTitles.length - 1) {
                    alert("FORM SUBMITTED");
                  } else {
                    setPage((currPage) => currPage + 1);
                  }
                }}
              >
                {page === FormTitles.length - 1 ? "Submit" : "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Survey;