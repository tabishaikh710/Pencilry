import { useState } from "react";
import RendercontentforSform from "../IllustratoSurvey/RendercontentforSform";
import style from "../../style/paging.module.css";
import { SurveyValidation } from "../IllustratoSurvey/surveyValidation";
function Paging( {toPages , newButText}) {
  const [currentTab, setCurrentTab] = useState(1); // Start at the first tab
  const totalPages = toPages;
   
  // const nwwButrender= () => {
             
  // }
   

  const validation = SurveyValidation(currentTab)

  const handleNextPage = () => {
    if (currentTab < totalPages && validation ) {
      setCurrentTab((prevTab) => prevTab + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentTab > 1) {
      setCurrentTab((prevTab) => prevTab - 1);
    }
  };

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
          onClick={handleNextPage}
          className={style.next}
          disabled={currentTab === totalPages} // Disable at the last tab
        >
       
       {currentTab === totalPages ? ` ${newButText}` : "Next"}
        </button>
      </div>
    </div>
  );
}

export default Paging;
