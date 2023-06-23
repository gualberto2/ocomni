import React, { useState } from 'react';

const Question2 = ({ formData, setFormData }) => {
  const handleRangeChange = (event) => {
    const {name, value} = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    <div className='container mx-auto'>
      <input
        type='range'
        id='rangeValue'
        name='rangeValue'
        min={0}
        max={100}
        value={formData.rangeValue}
        onChange={handleRangeChange}
      />
    </div>
  );
};

export default Question2;
