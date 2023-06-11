import React from "react";

const Policy = () => {
  const myPolicy = 56848444; // your policy id
  return (
    <div>
      <div className="container mt-8 mx-auto border-b-2 border-slate-500">
        <h1 className="text-xl font-bold">Ocomni Privacy Policy</h1>  
        <p className="mt-4 mb-4">This application/website collects data from its users</p>  
      </div>
      <div className="container mx-auto mt-4">
        <h2 className="font-bold">Personal Data processed for the following purposes and using the following services:</h2>
      </div>
      <div>
        <ul>
          <li>
            <div>
              <h3>Analytics</h3>
              <ul>
                <li>
                  <h3>Google Analytics</h3>
                  <p>Personal Data: Trackers; Usage Data</p>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div>
              <h3>Connecting Data</h3>
              <ul>
                <li>
                  <h3>Zapiar</h3>
                  <p>Personal Data: Data communicated while using the service</p>
                </li>
              </ul>
            </div>
          </li>      
          <li>
            <div>
              <h3>Managing contacts and sending messages</h3>
              <ul>
                <li>
                  <h3>Mailchimp</h3>
                  <p>Personal Data: Data communicated while using the service</p>
                </li>
              </ul>
            </div>
          </li>      
        </ul>
      </div>
    </div>
  );
};

export default Policy;
