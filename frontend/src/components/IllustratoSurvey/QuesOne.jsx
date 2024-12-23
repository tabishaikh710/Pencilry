import { useContext } from "react";
import style from "../../style/illustretorSurveyform/Qone.module.css";
import { FcSearch } from "react-icons/fc";
import {AuthContext}from "../IllustratoSurveyContext/IllustratoSurvey.context";

function QuesOne() {
  const { hasFreelancedBefore, setHasFreelancedBefore } = useContext(AuthContext);

  const handleChange = (e) => {
    setHasFreelancedBefore(e.target.value); // Ensure this function is available in your context
  };

  return (
    <>
      <h1>Q1</h1>
      <h1>A few quick questions: first, have you freelanced before?</h1>
      <p>
        This lets us know how much help to give you along the way. We won’t share your answer
        with anyone else, including potential clients.
      </p>

      <form className={style.container}>
        {/* Option 1 */}
        <div className={style.optionSection}>
          <FcSearch className={style.repIcon} />
          <label htmlFor="brandNew">I am brand new to this</label>
          <input
            id="brandNew"
            type="radio"
            name="hasFreelancedBefore"
            value="I am brand new to this"
            checked={hasFreelancedBefore === "I am brand new to this"}
            onChange={handleChange}
          />
        </div>

        {/* Option 2 */}
        <div className={style.optionSection}>
          <FcSearch className={style.repIcon} />
          <label htmlFor="someExperience">I have some experience</label>
          <input
            id="someExperience"
            type="radio"
            name="hasFreelancedBefore"
            value="I have some experience"
            checked={hasFreelancedBefore === "I have some experience"}
            onChange={handleChange}
          />
        </div>

        {/* Option 3 */}
        <div className={style.optionSection}>
          <FcSearch className={style.repIcon} />
          <label htmlFor="expert">I am an expert</label>
          <input
            id="expert"
            type="radio"
            name="hasFreelancedBefore"
            value="I am an expert"
            checked={hasFreelancedBefore === "I am an expert"}
            onChange={handleChange}
          />
        </div>
      </form>
    </>
  );
}

export default QuesOne;
