import React, { useEffect } from 'react';

const Question2 = ({ formData, setFormData, setHours, sliderValue }) => {
  const handleRangeChange = (event) => {
    const {name, value} = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };
/*
  const handleSliderChange = (event) => {
    const value = parseInt(event.target.value);
    sliderValue(value);
  };

  useEffect(() => {
    setHours((prevHours) => prevHours + sliderValue);
  }, [sliderValue]);  
*/
  return (
    <div className='h-full w-full'>
      <input
        className="w-full h-full appearance-none bg-gray-300 rounded-md focus:outline-none focus:bg-gray-500"
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
