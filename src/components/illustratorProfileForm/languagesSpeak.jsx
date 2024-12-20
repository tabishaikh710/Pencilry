import React, { useContext } from "react";
import Languages from "../globalComponents/languages";
import Style from "../../style/illustretorProfilrForm/langForm.module.css";
import { AuthContext } from "../illustratorProfileForm/CreatProfileContextorm/profileform.context";

function LanguagesSpeak() {
  // Destructure formData and setFormData from the AuthContext
  const { formData, setFormData } = useContext(AuthContext);

  const handleLanguageChange = (e) => {
    const { name, value } = e.target;
    // Update the correct property of formData using the dynamic name
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const proficiencyLevels = ["Beginner", "Intermediate", "Advanced", "Fluent", "Native"];

  return (
        <>
    <div className={Style.langSpeak}>
      <div className={Style.langSpeakTitle}>
        <label htmlFor="languageSelector" className={Style.label}>
          Select a Language:
        </label>
        <select
          id="languageSelector"
          name="LanguagesSpeak" // Matches the key in formData
          value={formData.LanguagesSpeak} // Bind to formData
          onChange={handleLanguageChange}
          className={Style.select}
        >
          <option value="" disabled>
            Select a language
          </option>
          {Languages.map((lang, index) => (
            <option key={index} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>

      <div className={Style.levelSpeakTitle}>
        <label htmlFor="proficiencySelector" className={Style.label}>
          Level:
        </label>
        <select
          id="proficiencySelector"
          name="LangLavel" // Matches the key in formData
          value={formData.LangLavel} // Bind to formData
          onChange={handleLanguageChange}
          className={Style.select}
        >
          <option value="" disabled>
            Select proficiency level
          </option>
          {proficiencyLevels.map((level, index) => (
            <option key={index} value={level}>
              {level}
            </option>
          ))}
        </select>
      </div>

      <div className={Style.langSpeakButton}>
        <button
          onClick={() => console.log("Current Form Data:", formData)}
          className={Style.button}
        >
          Add Language
        </button>
      </div>
    </div>
    <div className={Style.langSpeak}>
    <div>
      <h2>Language Spoken</h2>
    </div>
    
    </div>
    </>
  );
}

export default LanguagesSpeak;
