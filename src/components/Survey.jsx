// components/Survey.js
import { useState } from 'react';

const Survey = () => {
  const [hours, setHours] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleTimeChange = (e) => {
    setHours(parseInt(e.target.value));
  };

  return (
    <div>
      {currentPage === 1 && (
        <div>
          <h1>Question 1</h1>
          <input type="number" min="0" value={hours} onChange={handleTimeChange} />
          <button onClick={handleNext}>Next</button>
        </div>
      )}

      {currentPage === 2 && (
        <div>
          <h1>Question 2</h1>
          <p>Total hours: {hours}</p>
          <button onClick={handlePrevious}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>
      )}

      {currentPage === 3 && (
        <div>
          <h1>Question 3</h1>
          <p>Total hours: {hours}</p>
          <button onClick={handlePrevious}>Previous</button>
        </div>
      )}
    </div>
  );
};

export default Survey;
