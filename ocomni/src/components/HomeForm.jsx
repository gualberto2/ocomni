import React, { useState } from 'react';

const ContactForm = () => { {/* In this function we have useState to make the first name, last name, email, and phone numbers */}
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');{/* To cont.. all these lines 4 - 6 declare state variables along with their respective setter functions */}
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => { {/* this function declares an event handler that is triggered as the submit button is clicked. */}
    e.preventDefault();

    // Perform form submission logic here
    // You can access the form values using the state variables (firstName, lastName, email, phone)
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <div className="mt-2 text-black text-2xl font-semibold md:text-[2.8rem] lg:text-[3rem]">
        <h3>Get In Touch with Us Today for an E-Commerce Consultation</h3>
      </div>
      <div className="mb-4 flex">
        <div className="mr-2 flex-1">
          <label htmlFor="firstName" className="block mb-1 font-medium text-gray-700">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="flex-1">
          <label htmlFor="lastName" className="block mb-1 font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block mb-1 font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block mb-1 font-medium text-gray-700">Phone Number</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      <button type="submit" className="rounded mt-4 px-7 py-3 bg-[#6366F1] text-white relative group hover:text-white overflow-hidden c-btn tracking-wider">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
