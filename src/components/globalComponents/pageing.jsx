import { useState } from "react";
import RendercontentforSform from "../IllustratoSurvey/RendercontentforSform";
import style from "../../style/paging.module.css";

function Paging() {
  const [currentTab, setCurrentTab] = useState(1); // Start at the first tab
  const totalPages = 5;

  const validation = () => {
    // Add your validation logic here
    return true; // Default to true for now
  };

  const handleNextPage = () => {
    if (currentTab < totalPages && validation()) {
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
          Next
        </button>
      </div>
    </div>
  );
}

export default Paging;
