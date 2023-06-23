import React from 'react';

const Question3 = ({ formData, setFormData }) => {
  const handleRangeChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    <div className='container mx-auto'>
      <input
        type='range'
        id='pages'
        name='pages'
        min={1}
        max={20}
        value={formData.pages}
        onChange={handleRangeChange}
      />
      <div className='flex mx-auto mb-8'>
        <p className='justify-between flex-grow'>1 - 5 Pages</p>
        <p className='justify-between flex-grow'>5 - 10 Pages</p>
        <p className='justify-between flex-grow'>10 - 15 Pages</p>
        <p className='justify-between flex-grow'>15 - 20 Pages</p>
      </div>
    </div>
  );
};

export default Question3;
