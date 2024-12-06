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
