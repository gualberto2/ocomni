import React from 'react';

function Question5({ formData, setFormData }) {
  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div>
      <input
        type="radio"
        id="option1"
        name="question6"
        value="option1"
        checked={formData.question6 === 'option1'}
        onChange={handleRadioChange}
      />
      <label 
        htmlFor="option1"      
      >
        Yes
      </label>

      <input
        type="radio"
        id="option2"
        name="question6"
        value="option2"
        checked={formData.question6 === 'option2'}
        onChange={handleRadioChange}
      />
      <label 
        htmlFor="option2"
      >
        No
      </label>   
</div>
  );
}

export default Question5;
