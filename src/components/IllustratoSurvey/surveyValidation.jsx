import { useContext } from "react";
import { AuthContext } from "../IllustratoSurveyContext/IllustratoSurvey.context";


export const SurveyValidation = (currentTab) => {
  const { hasFreelancedBefore, biggestGoal } = useContext(AuthContext);

  switch (currentTab) {
    case 1:
      return hasFreelancedBefore?.trim() !== ""; // Ensure optional chaining in case the value is undefined
    case 3:
      return biggestGoal?.trim() !== ""; // Ensure optional chaining
    default:
      return true;
  }
};

export const handleSubmit = (e, currentTab, validation, contextValues) => {
  e.preventDefault();

  if (currentTab === 2 && validation) {
    console.log("Form Submitted Successfully:");
    console.log("Context Values:", contextValues);
  } else {
    console.log("Form submission failed due to validation errors.");
  }
};


export  const routeToCreatYourProfile=(navigate)=>{
  navigate('/Create-illustrator-profile');
} 

