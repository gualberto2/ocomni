import React from 'react'

function Question4() {
  return (
    <div>
      <form className='container mx-auto'>
        <input type='checkbox' id="usersandauth" name="features" value="usersandauth"/>
        <label for="usersandauth">User Registration & Autherization</label>
        <input type="checkbox" id="membersonly" name="features" value="membersonly"/>
        <label for="membersonly">Member Profiles</label>
        <input type="checkbox" id="adminpanel" name="features" value="adminpanel"/>
        <label for="adminpanel">Admin Panel</label>
        <input type="checkbox" id="crmsales" name="features" value="crmsales"/>
        <label for="crmsales">CRM Integration</label>
        <input type="checkbox" id="dashboard" name="features" value="dashboard"/>
        <label for="dashboard">Dashboard</label>
        <input type="checkbox" id="blog" name="features" value="blog"/>
        <label for="blog">Blog</label>
        <input type="checkbox" id="eventscheduling" name="features" value="eventscheduling"/>
        <label for="eventscheduling">Event Scheduling</label>
        <input type="checkbox" id="reservations" name="features" value="reservations"/>
        <label for="reservations">Reservations</label>
        <input type="checkbox" id="chatsandlivechat" name="features" value="chatsandlivechat"/>
        <label for="chatsandlivechat">Chat/Live Chat</label>
        <input type="checkbox" id="imgandvidgallery" name="features" value="imgandvidgallery"/>
        <label for="imgandvidgallery">Image/Video Gallerys</label>
        <input type="checkbox" id="geolocation" name="features" value="geolocation"/>
        <label for="geolocation">Geolocation Elements</label>
        <input type="checkbox" id="livestream" name="features" value="livestream"/>
        <label for="livestream">Live-Streaming</label>

      </form>
    </div>
  )
}

export default Question4