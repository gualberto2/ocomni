import { useAtom } from "jotai";
import React from "react";
import { qFourAtom } from "./Atoms/atoms";

function Question4() {
  const [selectionData, setSelectionData] = useAtom(qFourAtom);

  const handleChkChange = (e) => {
    const { name, checked } = e.target;
    const updatedData = {
      ...selectionData,
      services: {
        ...(selectionData.services || {}),
        [name]: { value: checked },
      },
    };
    setSelectionData(updatedData);
    console.log(updatedData);
  };

  return (
    <div className="container mx-auto">
      {/* Checkbox for User Registration & Authorization */}
      <input
        className="bg-inherit rounded-md mr-2 mb-1 text-purple-400 focus:ring-purple-400"
        type="checkbox"
        id="usersandauth"
        name="usersandauth"
        value="usersandauth"
        checked={selectionData.services?.usersandauth?.value || false}
        onChange={handleChkChange}
      />
      <label
        className="text-lg mr-4  hover:text-gray-500 transition duration-150 ease-in"
        htmlFor="usersandauth"
      >
        User Registration & Authorization
      </label>

      {/* Checkbox for Members Feature */}
      <input
        className="bg-inherit rounded-md mr-2 mb-1 text-purple-400 focus:ring-purple-400"
        type="checkbox"
        id="membersonly"
        name="membersonly"
        value="membersonly"
        checked={selectionData.services?.membersonly?.value || false}
        onChange={handleChkChange}
      />
      <label
        className="text-lg mr-4  hover:text-gray-500 transition duration-150 ease-in"
        htmlFor="membersonly"
      >
        Member Profiles
      </label>

      {/* Checkbox for Admin Feature */}
      <input
        className="bg-inherit rounded-md mr-2 mb-1 text-purple-400 focus:ring-purple-400"
        type="checkbox"
        id="adminpanel"
        name="adminpanel"
        value="adminpanel"
        checked={selectionData.services?.adminpanel?.value || false}
        onChange={handleChkChange}
      />
      <label
        className="text-lg mr-4  hover:text-gray-500 transition duration-150 ease-in"
        htmlFor="adminpanel"
      >
        Admin Panel
      </label>
      <input
        className="bg-inherit rounded-md mr-2 mb-1 text-purple-400 focus:ring-purple-400"
        type="checkbox"
        id="crmsales"
        name="crmsales"
        value="crmsales"
        checked={selectionData.services?.crmsales?.value || false}
        onChange={handleChkChange}
      />
      <label
        className="text-lg mr-4  hover:text-gray-500 transition duration-150 ease-in"
        htmlFor="crmsales"
      >
        CRM Integration
      </label>

      <input
        className="bg-inherit rounded-md mr-2 mb-1 text-purple-400 focus:ring-purple-400"
        type="checkbox"
        id="dashboard"
        name="dashboard"
        value="dashboard"
        checked={selectionData.services?.dashboard?.value || false}
        onChange={handleChkChange}
      />
      <label
        className="text-lg mr-4  hover:text-gray-500 transition duration-150 ease-in"
        htmlFor="dashboard"
      >
        Dashboard
      </label>

      <input
        className="bg-inherit rounded-md mr-2 mb-1 text-purple-400 focus:ring-purple-400"
        type="checkbox"
        id="blog"
        name="blog"
        value="blog"
        checked={selectionData.services?.blog?.value || false}
        onChange={handleChkChange}
      />
      <label
        className="text-lg mr-4  hover:text-gray-500 transition duration-150 ease-in"
        htmlFor="blog"
      >
        Blog
      </label>

      <input
        className="bg-inherit rounded-md mr-2 mb-1 text-purple-400 focus:ring-purple-400"
        type="checkbox"
        id="eventscheduling"
        name="eventscheduling"
        value="eventscheduling"
        checked={selectionData.services?.eventscheduling?.value || false}
        onChange={handleChkChange}
      />
      <label
        className="text-lg mr-4  hover:text-gray-500 transition duration-150 ease-in"
        htmlFor="eventscheduling"
      >
        Event Scheduling
      </label>

      <input
        className="bg-inherit rounded-md mr-2 mb-1 text-purple-400 focus:ring-purple-400"
        type="checkbox"
        id="reservations"
        name="reservations"
        value="reservations"
        checked={selectionData.services?.reservations?.value || false}
        onChange={handleChkChange}
      />
      <label
        className="text-lg mr-4  hover:text-gray-500 transition duration-150 ease-in"
        htmlFor="reservations"
      >
        Reservations
      </label>

      <input
        className="bg-inherit rounded-md mr-2 mb-1 text-purple-400 focus:ring-purple-400"
        type="checkbox"
        id="chatsandlivechat"
        name="chatsandlivechat"
        value="chatsandlivechat"
        checked={selectionData.services?.chatsandlivechat?.value || false}
        onChange={handleChkChange}
      />
      <label
        className="text-lg mr-4  hover:text-gray-500 transition duration-150 ease-in"
        htmlFor="chatsandlivechat"
      >
        Chat/Live Chat
      </label>

      <input
        className="bg-inherit rounded-md mr-2 mb-1 text-purple-400 focus:ring-purple-400"
        type="checkbox"
        id="imgandvidgallery"
        name="imgandvidgallery"
        value="imgandvidgallery"
        checked={selectionData.services?.imgandvidgallery?.value || false}
        onChange={handleChkChange}
      />
      <label
        className="text-lg mr-4  hover:text-gray-500 transition duration-150 ease-in"
        htmlFor="imgandvidgallery"
      >
        Image/Video Gallerys
      </label>

      <input
        className="bg-inherit rounded-md mr-2 mb-1 text-purple-400 focus:ring-purple-400"
        type="checkbox"
        id="geolocation"
        name="geolocation"
        value="geolocation"
        checked={selectionData.services?.geolocation?.value || false}
        onChange={handleChkChange}
      />
      <label
        className="text-lg mr-4  hover:text-gray-500 transition duration-150 ease-in"
        htmlFor="geolocation"
      >
        Geolocation Elements
      </label>

      <input
        className="bg-inherit rounded-md mr-2 mb-1 text-purple-400 focus:ring-purple-400"
        type="checkbox"
        id="livestream"
        name="livestream"
        value="livestream"
        checked={selectionData.services?.livestream?.value || false}
        onChange={handleChkChange}
      />
      <label
        className="text-lg mr-4  hover:text-gray-500 transition duration-150 ease-in"
        htmlFor="livestream"
      >
        Live-Streaming
      </label>
    </div>
  );
}

export default Question4;
