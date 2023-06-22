import React, {useState} from 'react';
import ReactSlider from 'react-slider';


function Question3() {
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
          <p className='justify-between flex-grow justi'>1 - 5 Pages</p>
          <p className='justify-between flex-grow'>5 - 10 Pages</p>
          <p className='justify-between flex-grow'>10 - 15 Pages</p>
          <p className='justify-between flex-grow'>15 - 20 Pages</p>
        </div>        
      </div>
  );
}

export default Question3