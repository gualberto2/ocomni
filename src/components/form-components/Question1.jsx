import React from 'react';

function Question1() {
  return (
    <div>
      <form className='container mx-auto'>
        <input 
          type='radio' 
          id="development" 
          name="services" 
          value="development"
        />
        <label 
          for="development"
        >
          Development
        </label>

        <input 
          type="radio" 
          id="design" 
          name="services" 
          value="design"
        />
        <label 
          for="design"
        >
          Design
        </label>

        <input 
          type="radio" 
          id="both" 
          name="services" 
          value="both"
        />
        <label 
          for="both"
        >
          Both
        </label>
      </form>
    </div>
  )
}

export default Question1;