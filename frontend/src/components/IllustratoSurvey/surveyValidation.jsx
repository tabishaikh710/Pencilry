export const SurveyValidation = (currentTab, contextValues) => {
  const { hasFreelancedBefore, biggestGoal } = contextValues;

  switch (currentTab) {
    case 1:
      return hasFreelancedBefore?.trim() !== ""; // Validate for tab 1
    case 3:
      return biggestGoal?.trim() !== ""; // Validate for tab 3
    default:
      return true; // No validation needed for other tabs
  }
};
export const handleSubmit = (e, contextValues) => {
  if (e && e.preventDefault) {
    e.preventDefault();
  }

  console.log("Form Submitted Successfully:");
  console.log("Context Values:", contextValues);

  // Perform further submission logic, e.g., API calls
};

export const routeToCreatYourProfile = (navigate) => {
  navigate("/Create-illustrator-profile");
};
