import React, { useState } from "react";
import Question1 from "./form-components/Question1";
import Question2 from "./form-components/Question2";
import Question3 from "./form-components/Question3";
import Question4 from "./form-components/Question4";
import Question5 from "./form-components/Question5";

function Survey() {
    const [page, setPage] = useState(0);
    
    const FormTitles = ["Choose a service", "Choose the stage of your project, or start from scratch", "How many pages/screens do you see having?", "Would you like any special features?", "Do You need a shopping cart?"];

    const handleSliderChange = (value) => {
      // Update the state or perform any other necessary logic
    }; 

    const PageDisplay = () => {
      if (page === 0 ) {
        return <Question1/>
      } else if (page === 1) {
        return <Question2 />
      } else if (page === 2) {
        return <Question3/>
      } else if (page === 3) {
        return <Question4/>
      } else if (page === 4) {
        return <Question5/>
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