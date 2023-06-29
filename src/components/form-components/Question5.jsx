import React from "react";

function Question5({ formData, setFormData }) {
  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div>
      <form required className="flex gap-3 items-center" action="">
        <input
          type="checkbox"
          id="true"
          name="question5"
          value="true"
          checked={formData.question5 === "true"}
          onChange={handleRadioChange}
          className="rounded-full mr-4"
        />
        <label htmlFor="option1">Yes</label>
        <input
          type="checkbox"
          id="false"
          name="question5"
          value="false"
          checked={formData.question5 === "false"}
          onChange={handleRadioChange}
          className="rounded-full mr-4"
        />
        <label htmlFor="false">No</label>
      </form>
    </div>
  );
}

export default Question5;
