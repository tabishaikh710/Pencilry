import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../../style/paging.module.css";

function Paging({ totalPages, renderContent, validatePage, onSubmit, routeToCreateProfile, nextButtonText }) {
  const [currentTab, setCurrentTab] = useState(1);
  const navigate = useNavigate();

  const handleNextPage = (e) => {
    e.preventDefault();

    if (currentTab < totalPages && validatePage(currentTab)) {
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
      {renderContent(currentTab)}

      <div className={style.paging}>
        <button
          onClick={handlePrevPage}
          className={style.prev}
          disabled={currentTab === 1}
        >
          Prev
        </button>
        <button
  onClick={(e) => {
    if (currentTab === totalPages) {
      onSubmit(e); // Pass the event object to handleSubmit
      routeToCreateProfile(navigate); // Navigate to the profile creation route
    } else {
      handleNextPage(e); // Navigate to the next page
    }
  }}
  className={style.next}
>
  {currentTab === totalPages ? nextButtonText : "Next"}
</button>

      </div>
    </div>
  );
}

export default Paging;
