import { useState, useContext } from "react";
import RendercontentforSform from "../IllustratoSurvey/RendercontentforSform";
import style from "../../style/paging.module.css";
import { useNavigate } from "react-router-dom";
import { SurveyValidation, handleSubmit ,routeToCreatYourProfile } from "../IllustratoSurvey/surveyValidation";
import { AuthContext } from "../IllustratoSurveyContext/IllustratoSurvey.context";

function Paging({ toPages, newButText }) {
  const [currentTab, setCurrentTab] = useState(1); // Start at the first tab
  const totalPages = toPages;
  const contextValues = useContext(AuthContext); // Get context values

  // Validate the current tab
  const validation = SurveyValidation(currentTab, contextValues);

  const handleNextPage = (e) => {
    e.preventDefault();

    if (currentTab < totalPages && validation) {
      setCurrentTab((prevTab) => prevTab + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentTab > 1) {
      setCurrentTab((prevTab) => prevTab - 1);
    }
  };
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <RendercontentforSform currentTab={currentTab} />

      <div className={style.paging}>
        <button
          onClick={handlePrevPage}
          className={style.prev}
          disabled={currentTab === 1} // Disable at the first tab
        >
          Prev
        </button>
        <button
          onClick={(e) => {
            if (currentTab === totalPages) {
              handleSubmit(e, currentTab, validation, contextValues); // Call handleSubmit when on the last page
              routeToCreatYourProfile(navigate);
              
            } else {
              handleNextPage(e); // Navigate to the next page
            }
          }}
          className={style.next}
          disabled={!validation} // Disable if validation fails
        >
          {currentTab === totalPages ? newButText : "Next"}
        </button>
      </div>
    </div>
  );
}

export default Paging;
