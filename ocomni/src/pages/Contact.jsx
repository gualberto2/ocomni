import React, { useState } from 'react';

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    { id: 1, label: 'First Name', state: firstName, setState: setFirstName },
    { id: 2, label: 'Last Name', state: lastName, setState: setLastName },
    { id: 3, label: 'Email', state: email, setState: setEmail },
    { id: 4, label: 'Phone Number', state: phone, setState: setPhone },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic here
    // You can access the form values using the state variables (firstName, lastName, email, phone)
  };

  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <div className="carousel">
        {questions.map((question, index) => (
          <div
            key={question.id}
            className={`carousel-item ${currentQuestion === index ? 'block' : 'hidden'} transition-transform duration-300`}
          >
            <label htmlFor={question.label} className="block mb-1 font-medium text-gray-700">
              {question.label}
            </label>
            <input
              type="text"
              id={question.label}
              value={question.state}
              onChange={(e) => question.setState(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-4">
        {currentQuestion > 0 && (
          <button
            type="button"
            onClick={handlePreviousQuestion}
            className="px-4 py-2 text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
          >
            Previous
          </button>
        )}

        {currentQuestion < questions.length - 1 ? (
          <button
            type="button"
            onClick={handleNextQuestion}
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Next
          </button>
        ) : (
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Submit
          </button>
        )}
      </div>
    </form>
  );
};
export default ContactForm;