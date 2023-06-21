import React from "react";

const Policy = () => {
  const myPolicy = 56848444; // your policy id
  return (
    <div>
      <div className="container mt-8 mx-auto border-b-2 border-slate-500">
        <h1 className="text-xl ">
          <span className="font-OCOMNI mr-1">Ocomni</span> Privacy Policy
        </h1>
        <p className="mt-4 mb-4 font-thin">
          This application/website collects data from its users
        </p>
      </div>
      <div className="container mx-auto mt-4">
        <h2 className="font-bold">
          Personal Data processed for the following purposes and using the
          following services:
        </h2>
      </div>
      <div className="container mx-auto mt-7">
        <ul className="md:grid lg:grid md:grid-cols-2 lg:grid-cols-2 md:grid-rows-2 lg:grid-rows-2">
          <li className="mb-4">
            <div>
              <h3 className="font-bold">Analytics</h3>
              <ul>
                <li>
                  <h3 className="font-bold text-sm text-slate-500">
                    Google Analytics
                  </h3>
                  <p className="text-sm">Personal Data: Trackers; Usage Data</p>
                </li>
              </ul>
            </div>
          </li>
          <li className="mb-4">
            <div>
              <h3 className="font-bold">Connecting Data</h3>
              <ul>
                <li>
                  <h3 className="font-bold text-sm text-slate-500">Zapiar</h3>
                  <p className="text-sm">
                    Personal Data: Data communicated while using the service
                  </p>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div>
              <h3 className="font-bold">
                Managing contacts and sending messages
              </h3>
              <ul>
                <li>
                  <h3 className="font-bold text-sm text-slate-500">
                    Mailchimp
                  </h3>
                  <p className="text-sm">
                    Personal Data: Data communicated while using the service
                  </p>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className="container mt-8 mb-8 mx-auto border-t-2 border-slate-500">
        <div>
          <h3 className="font-bold">Contact Info</h3>
          <div>
            <h2 className="font-bold text-sm">Owner & Data Controller</h2>
            <p className="text-sm">
              Maelstrom INC 1012 2nd Street, Encinitas, CA 92024
            </p>
          </div>
          <div>
            <p className="text-sm">
              Owner Contact Email:{" "}
              <span className="text-sm text-slate-500">
                {" "}
                support@ocomni.com
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;
