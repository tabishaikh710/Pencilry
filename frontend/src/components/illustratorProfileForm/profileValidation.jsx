 export const profileValidation=( contextValues)=>{
    const {formData }=contextValues

return formData?.trim() !=="";



}


export const handleSubmit = (e, contextValues) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
  
    console.log("Form Submitted Successfully:");
    console.log("Context Values:", contextValues);
  
    // Perform further submission logic, e.g., API calls
  };



  export const routeToCreatYourProfile = (navigate) => {
    navigate("/JobsPages");
  };