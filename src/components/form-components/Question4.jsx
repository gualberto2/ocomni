import React from 'react';

function Question4({formData, setFormData, handleCheckboxChange}) {
  return (
    <div>
      <form className='container mx-auto'>
        {/* Checkbox for User Registration & Authorization */}
        <input 
          type='checkbox' 
          id="usersandauth" 
          name="usersandauth" 
          value="usersandauth" 
          checked={formData.features.includes('usersandauth')} // Check if the value is included in the selected checkbox values
          onChange={handleCheckboxChange} // Call the event handler on checkbox change
        />
        <label 
          htmlFor="usersandauth"
        >
          User Registration & Autherization
        </label>
        
        {/* Checkbox for Members Feature */}
        <input 
          type="checkbox" 
          id="membersonly" 
          name="membersonly" 
          value="membersonly" 
          checked={formData.features.includes('membersonly')} // Check if the value is included in the selected checkbox values
          onChange={handleCheckboxChange} // Call the event handler on checkbox change
        />
        <label 
          htmlFor="membersonly"
        >
          Member Profiles
        </label>

        {/* Checkbox for Admin Feature */}
        <input 
          type="checkbox" 
          id="adminpanel"
          name="adminpanel" 
          value="adminpanel" 
          checked={formData.features.includes('adminpanel')} // Check if the value is included in the selected checkbox values
          onChange={handleCheckboxChange} // Call the event handler on checkbox change
        />
        <label
          htmlFor="adminpanel"
        >
          Admin Panel
        </label>

        {/* Checkbox for CRM Feature */}
        <input 
          type="checkbox" 
          id="crmsales" 
          name="crmsales" 
          value="crmsales" 
          checked={formData.features.includes('crmsales')} // Check if the value is included in the selected checkbox values
          onChange={handleCheckboxChange} // Call the event handler on checkbox change
        />
        <label 
          htmlFor="crmsales"
        >
          CRM Integration
        </label>

        {/* Checkbox for Dashboard Feature */}
        <input 
          type="checkbox" 
          id="dashboard" 
          name="dashboard" 
          value="dashboard" 
          checked={formData.features.includes('dashboard')} // Check if the value is included in the selected checkbox values
          onChange={handleCheckboxChange} // Call the event handler on checkbox change
        />
        <label 
          htmlFor="dashboard"
        >
          Dashboard
        </label>

        <input 
          type="checkbox" 
          id="blog" 
          name="blog" 
          value="blog" 
          checked={formData.features.includes('blog')} // Check if the value is included in the selected checkbox values
          onChange={handleCheckboxChange} // Call the event handler on checkbox change
        />
        <label
          htmlFor="blog"
        >
          Blog
        </label>

        <input 
          type="checkbox" 
          id="eventscheduling" 
          name="eventscheduling" 
          value="eventscheduling" 
          checked={formData.features.includes('eventscheduling')} // Check if the value is included in the selected checkbox values
          onChange={handleCheckboxChange} // Call the event handler on checkbox change
        />
        <label 
          htmlFor="eventscheduling"
        >
          Event Scheduling
        </label>

        <input 
          type="checkbox" 
          id="reservations" 
          name="reservations" 
          value="reservations" 
          checked={formData.features.includes('reservations')} // Check if the value is included in the selected checkbox values
          onChange={handleCheckboxChange} // Call the event handler on checkbox change
        />
        <label 
          htmlFor="reservations"
        >
          Reservations
        </label>

        <input
          type="checkbox" 
          id="chatsandlivechat" 
          name="chatsandlivechat" 
          value="chatsandlivechat" 
          checked={formData.features.includes('chatsandlivechat')} // Check if the value is included in the selected checkbox values
          onChange={handleCheckboxChange} // Call the event handler on checkbox change
        />
        <label 
          htmlFor="chatsandlivechat"
        >
          Chat/Live Chat
        </label>

        <input 
          type="checkbox" 
          id="imgandvidgallery" 
          name="imgandvidgallery" 
          value="imgandvidgallery" 
          checked={formData.features.includes('imgandvidgallery')} // Check if the value is included in the selected checkbox values
          onChange={handleCheckboxChange} // Call the event handler on checkbox change
        />
        <label 
          htmlFor="imgandvidgallery"
        >
          Image/Video Gallerys
        </label>

        <input
          type="checkbox" 
          id="geolocation" 
          name="geolocation" 
          value="geolocation" 
          checked={formData.features.includes('geolocation')} // Check if the value is included in the selected checkbox values
          onChange={handleCheckboxChange} // Call the event handler on checkbox change
        />
        <label 
          htmlFor="geolocation"
        >
          Geolocation Elements
        </label>

        <input 
          type="checkbox" 
          id="livestream" 
          name="livestream" 
          value="livestream" 
          checked={formData.features.includes('livestream')} // Check if the value is included in the selected checkbox values
          onChange={handleCheckboxChange} // Call the event handler on checkbox change
        />
        <label 
          htmlFor="livestream"
        >
          Live-Streaming
        </label>

      </form>
    </div>
  )
}

export default Question4;