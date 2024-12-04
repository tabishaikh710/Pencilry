import style from "../../style/illustretorSurveyform/Qone.module.css";
import { FcSearch } from "react-icons/fc";
function QuesThree() {
    
    return (
        <>
        <h1>Q3</h1>
          <h1>A few quick questions: first, have you freelanced before?
          </h1>
          <p>
          This lets us know how much help to give you along the way. We won’t share your answer with anyone else, including potential clients.
          </p>
    
          <form className={style.container}>
          
              
            <div className={style.optionSection}>
            <FcSearch className={style.repIcon} />
              <label>I am brand new to this </label>
              <input
                type="radio"
                name="projectSize"
                value="Large"
                checked="Large"
              />
            </div>
    
            <div className={style.optionSection}>
            <FcSearch className={style.repIcon} />
              <label>I am brand new to this </label>
              <input
                type="radio"
                name="projectSize"
                value="Large"
                checked="Large"
              />
            </div>
    
    
    
            <div className={style.optionSection}>
            <FcSearch className={style.repIcon} />
              <label>I am brand new to this </label>
              <input
                type="radio"
                name="projectSize"
                value="Large"
                checked="Large"
                />
            </div>
    
                
    
    
          </form>
        </>
      );
}

export default QuesThree;