import { createContext, useState, useEffect } from "react";

const surveyContext = createContext({});

export const surveyProvider = ({ children }) => {
  return (
      <FormContext.Provider value={{}}>
        {children}
      </FormContext.Provider>
    );
};

export default FormContext;
