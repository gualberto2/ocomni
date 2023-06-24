import React from 'react';

const Question1 = ({ formData, setFormData }) => {
  const handleInputChange = (event) => { /* To the left is the handleInput change function which nests setFormData and updates based on radio btn selection*/
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <form className='container mx-auto'>
        <input 
          type='radio'
          id="development" 
          name="services" 
          value="development"
          checked={formData.services === "development"} // To the left is the formData with the name appended.
          onChange={handleInputChange}
        />
        <label htmlFor="development">
          Development
        </label>

        <input 
          type="radio" 
          id="design" 
          name="services" 
          value="design"
          checked={formData.services === "design"}
          onChange={handleInputChange}
        />
        <label htmlFor="design">
          Design
        </label>

        <input 
          type="radio" 
          id="both" 
          name="services" 
          value="both"
          checked={formData.services === "both"}
          onChange={handleInputChange}
        />
        <label htmlFor="both">
          Both
        </label>
      </form>
    </div>
  );
}

export default Question1;
