import React from "react";

const Question1 = ({ formData, setFormData }) => {
  const handleInputChange = (event) => {
    /* To the left is the handleInput change function which nests setFormData and updates based on radio btn selection*/
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <form className="flex flex-col items-center">
        <div className="mt-6 border-y py-3 px-7 flex flex-row items-center w-full  hover:bg-gray-100">
          <input
            type="radio"
            id="development"
            name="services"
            label="Development"
            value="development"
            checked={formData.services === "development"} // To the left is the formData with the name appended.
            onChange={handleInputChange}
            className=""
          />
          <label htmlFor="development">Development</label>
        </div>
        <div className=" py-3 px-7 flex flex-row items-center w-full  hover:bg-gray-100">
          <input
            type="radio"
            id="design"
            name="services"
            value="design"
            checked={formData.services === "design"}
            onChange={handleInputChange}
            className=""
          />
          <label htmlFor="design">Design</label>
        </div>

        <div className="border-y py-3 px-7 flex flex-row items-center w-full  hover:bg-gray-100">
          <input
            type="radio"
            id="both"
            name="services"
            value="both"
            checked={formData.services === "both"}
            onChange={handleInputChange}
            className=""
          />
          <label htmlFor="both">Both</label>
        </div>
      </form>
    </div>
  );
};

export default Question1;
