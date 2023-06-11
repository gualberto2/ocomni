import React from "react";
import Iubenda from 'react-iubenda-policy';

const Policy = () => {
  const myPolicy = 56848444 // your policy id
  return (
    <div>
      {/* Renders the Privacy Policy link with the text 'Privacy Policy' */}
      <Iubenda id={myPolicy}/>
        
      <Iubenda id={myPolicy} type='terms-and-conditions' styling='nostyle'>
        
      </Iubenda>

      <Iubenda id={myPolicy} type='privacy' styling='white'>

      </Iubenda>
 
      <Iubenda id={myPolicy} type='cookie' styling='black'>

      </Iubenda>      
    </div>
  )
};

export default Policy;