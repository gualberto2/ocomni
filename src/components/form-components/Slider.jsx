import React from 'react';
import ReactSlider from 'react-slider';

function Slider() {
  return (
    <div className='container mx-auto'>
      <div className='px-10 py-10 mb-4'>
        <ReactSlider 
          className='customSlider'
          trackClassName='customSlider-track'
          thumbClassName="customSlider-thumb"
          markClassName="customSlider-mark"
          marks={20}
          min={0}
          max={100}
        />
      </div>
      <div className='flex mx-auto mb-8'>
          <p className='justify-between flex-grow'>No assets or mockups</p>
          <p className='justify-between flex-grow'>Got Assets & Mockups</p>
          <p className='justify-between flex-grow'>Just need a feature</p>
        </div>        
      </div>
  );
};


export default Slider;