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
        type="checkbox"
        id="usersandauth"
        name="usersandauth"
        value="usersandauth"
        checked={selectionData.services?.usersandauth?.value || false}
        onChange={handleChkChange}
      />
      <label htmlFor="usersandauth">User Registration & Authorization</label>

      {/* Checkbox for Members Feature */}
      <input
        type="checkbox"
        id="membersonly"
        name="membersonly"
        value="membersonly"
        checked={selectionData.services?.membersonly?.value || false}
        onChange={handleChkChange}
      />
      <label htmlFor="membersonly">Member Profiles</label>

      {/* Checkbox for Admin Feature */}
      <input
        type="checkbox"
        id="adminpanel"
        name="adminpanel"
        value="adminpanel"
        checked={selectionData.services?.adminpanel?.value || false}
        onChange={handleChkChange}
      />
      <label htmlFor="adminpanel">Admin Panel</label>
      <input
        type="checkbox"
        id="crmsales"
        name="crmsales"
        value="crmsales"
        checked={selectionData.services?.crmsales?.value || false}
        onChange={handleChkChange}
      />
      <label htmlFor="crmsales">CRM Integration</label>

      <input
        type="checkbox"
        id="dashboard"
        name="dashboard"
        value="dashboard"
        checked={selectionData.services?.dashboard?.value || false}
        onChange={handleChkChange}
      />
      <label htmlFor="dashboard">Dashboard</label>

      <input
        type="checkbox"
        id="blog"
        name="blog"
        value="blog"
        checked={selectionData.services?.blog?.value || false}
        onChange={handleChkChange}
      />
      <label htmlFor="blog">Blog</label>

      <input
        type="checkbox"
        id="eventscheduling"
        name="eventscheduling"
        value="eventscheduling"
        checked={selectionData.services?.eventscheduling?.value || false}
        onChange={handleChkChange}
      />
      <label htmlFor="eventscheduling">Event Scheduling</label>

      <input
        type="checkbox"
        id="reservations"
        name="reservations"
        value="reservations"
        checked={selectionData.services?.reservations?.value || false}
        onChange={handleChkChange}
      />
      <label htmlFor="reservations">Reservations</label>

      <input
        type="checkbox"
        id="chatsandlivechat"
        name="chatsandlivechat"
        value="chatsandlivechat"
        checked={selectionData.services?.chatsandlivechat?.value || false}
        onChange={handleChkChange}
      />
      <label htmlFor="chatsandlivechat">Chat/Live Chat</label>

      <input
        type="checkbox"
        id="imgandvidgallery"
        name="imgandvidgallery"
        value="imgandvidgallery"
        checked={selectionData.services?.imgandvidgallery?.value || false}
        onChange={handleChkChange}
      />
      <label htmlFor="imgandvidgallery">Image/Video Gallerys</label>

      <input
        type="checkbox"
        id="geolocation"
        name="geolocation"
        value="geolocation"
        checked={selectionData.services?.geolocation?.value || false}
        onChange={handleChkChange}
      />
      <label htmlFor="geolocation">Geolocation Elements</label>

      <input
        type="checkbox"
        id="livestream"
        name="livestream"
        value="livestream"
        checked={selectionData.services?.livestream?.value || false}
        onChange={handleChkChange}
      />
      <label htmlFor="livestream">Live-Streaming</label>
    </div>
  );
}

export default Question4;
