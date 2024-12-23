import { useContext } from "react";
import { AuthContext } from "../components/IllustratoSurveyContext/IllustratoSurvey.context";
import Paging from "../components/globalComponents/pageing";
import { SurveyValidation, handleSubmit, routeToCreatYourProfile } from "../components/IllustratoSurvey/surveyValidation";
import RendercontentforSform from "../components/IllustratoSurvey/RendercontentforSform";

function IllustratorQuestionForm() {
  const contextValues = useContext(AuthContext);

  const validatePage = (currentTab) => SurveyValidation(currentTab, contextValues);

  const renderContent = (currentTab) => <RendercontentforSform currentTab={currentTab} />;

  return (
    <Paging
    totalPages={2} // Adjust based on the actual number of tabs
    renderContent={renderContent}
    validatePage={validatePage}
    onSubmit={(e) => handleSubmit(e, contextValues)} // Pass event and contextValues
    routeToCreateProfile={routeToCreatYourProfile}
    nextButtonText="Next: Create Your Profile"
  />
  
  );
}

export default IllustratorQuestionForm;
