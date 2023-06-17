import React from "react";
import FormContext from "../components/form-components/SurveyContext";
import Survey from "../components/Survey";

export default function ProjectCalculator() {
  return (
      <FormContext>
        <Survey/>
      </FormContext>
    /* I will be importing the FormSurvey component, and the FormProvider components then nesting form in the
    form provider component...*/
  );
}
