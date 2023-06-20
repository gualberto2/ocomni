import React from 'react';
import ReactSlider from 'react-slider';

function Slider() {
  return (
    <div>
      <ReactSlider
        className='customSlider'
        trackClassName='customSlider-track'
      />
    </div>
  );
};


export default Slider;