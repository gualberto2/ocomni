import React, { useEffect } from "react";
import { useState } from "react";
import { useAtom } from "jotai";
import {
  qOneAtom,
  qTwoAtom,
  qThreeAtom,
  qFourAtom,
  qFiveAtom,
  Hours,
} from "../components/form-components/Atoms/atoms";
import Question1 from "../components/form-components/Question1";
import Question2 from "../components/form-components/Question2";
import Question3 from "../components/form-components/Question3";
import Question4 from "../components/form-components/Question4";
import Question5 from "../components/form-components/Question5";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function ProjectCalculator() {
  //  Global Atoms (Variables) State Storage
  // expiremental :: const userData = atom({ name: "", email: "", phone: "" });
  const [selected] = useAtom(qOneAtom);
  const [slider1] = useAtom(qTwoAtom);
  const [slider2] = useAtom(qThreeAtom);
  const [selections] = useAtom(qFourAtom);
  const [bool] = useAtom(qFiveAtom);

  const [formData, setFormData] = useState({
    selected: "",
    slider1: "",
    slider2: "",
    selections: {},
    bool: "",
  });

  useEffect(() => {
    setFormData({
      selected: selected.services,
      slider1,
      slider2,
      selections,
      bool,
    });
  }, [selected, slider1, slider2, selections, bool]);

  // const { selected, slider1, slider2, selections, bool } = formData;
  // Local Variable State
  const [page, setPage] = useState(0);
  const [hours, setHours] = useAtom(Hours);

  const navigate = useNavigate();
  const FormTitles = [
    "Choose a service",
    "Choose the current stage of completion for your project, or start from scratch",
    "How many pages do you plan to have on your website?",
    "Would you like any special features?",
    "Do You need a shopping cart?",
  ];

  //Change question components to objects containing the actual HTML/Object information for each question, or function holding arguments -> pagedisplay() and then return function

  const PageDisplay = () => {
    if (page === 0) {
      return <Question1 />;
    } else if (page === 1) {
      return <Question2 />;
    } else if (page === 2) {
      return <Question3 />;
    } else if (page === 3) {
      return <Question4 />;
    } else if (page === 4) {
      return <Question5 />;
    }
  };

  const pageNum = PageDisplay();

  const handlePrevClick = () => {
    if (page === 1) {
      setHours(0); // Reset hours to 0 on the first page
    } else {
      setHours((currHours) => currHours - 20);
    }
    setPage((currPage) => currPage - 1);
  };

  const handleNextClick = () => {
    setHours((currHours) => currHours + 20);
    if (page === FormTitles.length - 1) {
      alert("End of form");
    } else {
      setPage((currPage) => currPage + 1);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const formDataCopy = {
      ...formData,
      timestamp: serverTimestamp(),
      userRef: auth.currentUser.uid,
    };
    const docRef = await addDoc(
      collection(db, "calculator-submissions"),
      formDataCopy
    );
    toast.success("Thank you");
    navigate("/");

    // try {
    //   // Prepare the data to be submitted
    //   const data = {
    //     selected: selected,
    //     slider1: slider1,
    //     slider2: slider2,
    //     selections: selections,
    //     bool: bool,
    //   };

    //   // Submit the data to Firebase
    //   const docRef = await addDoc(
    //     collection(db, "calculator-submissions"),
    //     formDataCopy
    //   );

    //   // Clear the form data
    //   setFormData({
    //     selected: "",
    //     slider1: "",
    //     slider2: "",
    //     selections: {},
    //     bool: "",
    //   });

    //   // Display a success message
    //   console.log("Form submitted successfully");
    // } catch (error) {
    //   // Handle any errors
    //   console.error("Error submitting form:", error);
    // }
  }
  console.log("FormData:", formData);

  return (
    <div className="h-screen">
      <div className="mt-20 sm:px-8 px-4 h-[450px]">
        <h1 className="font-bold text-3xl sm:text-4xl mb-6">
          {FormTitles[page]}
        </h1>
        <div className="">{pageNum}</div>
      </div>

      <div className="">
        {/* Hours to complete  */}
        <div className="border-t mt-8 px-2">
          <p className="text-semibold text-amber-600 py-2">
            {hours}+
            <span className="text-semibold text-gray-600">
              {" "}
              Hours to complete
            </span>
          </p>
        </div>

        {/* Next and Prev Buttons */}
        <div className="w-full flex flex-row justify-around border-t bottom border-gray-500  ">
          <button
            disabled={page === 0}
            onClick={handlePrevClick}
            className="hover:bg-gray-200 w-full h-full py-2 transition ease-in-out duration-150 rounded-sm disabled:text-gray-300 disabled:hover:bg-gray-50 font-bold text-gray-700"
          >
            Prev
          </button>
          <div className="border-r border-gray-500"></div>

          {(page === FormTitles.length - 1 && (
            <button
              onClick={handleSubmit}
              className="hover:bg-gray-200 w-full h-full py-2 transition ease-in-out duration-150 rounded-sm text-gray-700 font-bold"
            >
              Submit
            </button>
          )) || (
            <button
              onClick={handleNextClick}
              className="hover:bg-gray-200 w-full h-full py-2 transition ease-in-out duration-150 rounded-sm text-gray-700 font-bold"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
    /* I will be importing the FormSurvey component, and the FormProvider components then nesting form in the
    form provider component...*/
  );
}
