import { useContext } from "react";
import { AuthContext } from "../components/illustratorProfileForm/CreatProfileContextorm/profileform.context";
import Paging from "../components/globalComponents/pageing";
import {profileValidation, handleSubmit, routeToCreatYourProfile } from "../components/illustratorProfileForm/profileValidation"
import RendercontentforPforms from "../components/illustratorProfileForm/renderContentProfileform";


function createillustratorProfile() {


    const contextValues = useContext(AuthContext);

    const validatePage = (currentTab) => profileValidation(currentTab, contextValues);
  
    const renderContent = (currentTab) => <RendercontentforPforms currentTab={currentTab} />;

 return(
    <>
    <br/>
    <br/>
<h1>create your profile</h1>

    <Paging
    totalPages={8} // Adjust based on the actual number of tabs
    renderContent={renderContent}
    validatePage={validatePage}
    onSubmit={(e) => handleSubmit(e, contextValues)} // Pass event and contextValues
    routeToCreateProfile={routeToCreatYourProfile}
    nextButtonText="Next: Your Profile"
  />
  
  

    </>
 )
}

export default createillustratorProfile;