import { serverTimestamp, addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { toast } from "react-toastify";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    email: "",
    phone: "",
  });
  const { first, last, email, phone } = formData;

  function onChange(e) {
    if (!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value,
      }));
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const formDataCopy = {
      ...formData,
      timestamp: serverTimestamp(),
    };
    delete formDataCopy.formData;
    const docRef = await addDoc(collection(db, "contact"), formDataCopy);
    setLoading(false);
    toast.success(
      "Contact Information Submitted! We will get back to you soon :)"
    );
  }

  return (
    <form onSubmit={onSubmit} className="max-w-sm mx-auto">
      <div className="container mx-auto]">
        <h3 className="text-center mt-2 text-black text-2xl font-semibold mb-4">
          Get In Touch with Us Today for an E-Commerce Consultation
        </h3>
      </div>
      <div className="mb-4 flex">
        <div className="mr-2 flex-1">
          <label
            htmlFor="first"
            className="block mb-1 font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            id="first"
            value={first}
            onChange={onChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="flex-1">
          <label
            htmlFor="last"
            className="block mb-1 font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            id="last"
            value={last}
            onChange={onChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={onChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block mb-1 font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={onChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      <button
        type="submit"
        className="rounded mt-4 px-7 py-3 bg-[#6366F1] text-white relative group hover:text-white overflow-hidden c-btn tracking-wider transition ease-in-out duration-150 bg-[#6366F1] hover:bg-[#5F56D6] active:bg-[#5B45BB]"
      >
        Submit
      </button>
    </form>
  );
}
