import { useContext } from "react";
import style from "../../style/illustretorSurveyform/Qone.module.css";
import { FcSearch } from "react-icons/fc";
import {AuthContext}from "../IllustratoSurveyContext/IllustratoSurvey.context";
function QuesTwo() {
    
  const { biggestGoal, setBiggestGoal} = useContext(AuthContext);

  const handleChange = (e) => {
    setBiggestGoal(e.target.value); // Ensure this function is available in your context
  };
  
  return (
     

    <>
    <h1>Q2</h1>
    <h1>A few quick questions: first, have you freelanced before?</h1>
    <p>
      This lets us know how much help to give you along the way. We won’t share your answer
      with anyone else, including potential clients.
    </p>

    <form className={style.container}>
      {/* Option 1 */}
      <div className={style.optionSection}>
        <FcSearch className={style.repIcon} />
        <label htmlFor="brandNew">To earn my main income</label>
        <input
          id="biggestGoal1"
          type="radio"
          name="biggestGoal"
          value="To earn my main income"
          checked={biggestGoal === "To earn my main income"}
          onChange={handleChange}
        />
      </div>

      {/* Option 2 */}
      <div className={style.optionSection}>
        <FcSearch className={style.repIcon} />
        <label htmlFor="someExperience">To make money on the side</label>
        <input
          id="biggestGoal2"
          type="radio"
          name="biggestGoal"
          value="To make money on the side"
          checked={biggestGoal === "To make money on the side"}
          onChange={handleChange}
        />
      </div>

      {/* Option 3 */}
      <div className={style.optionSection}>
        <FcSearch className={style.repIcon} />
        <label htmlFor="expert">To get experience, for a full-time job</label>
        <input
          id="biggestGoal3"
          type="radio"
          name="biggestGoal"
          value="To get experience, for a full-time job"
          checked={biggestGoal === "To get experience, for a full-time job"}
          onChange={handleChange}
        />
      </div>

      <div className={style.optionSection}>
        <FcSearch className={style.repIcon} />
        <label htmlFor="expert">I don't have a goal in mind yet</label>
        <input
          id="biggestGoal4"
          type="radio"
          name="biggestGoal"
          value="I don't have a goal in mind yet"
          checked={biggestGoal === "I don't have a goal in mind yet"}
          onChange={handleChange}
        />
      </div>
      

    </form>
  </>
      );
    
}

export default QuesTwo;