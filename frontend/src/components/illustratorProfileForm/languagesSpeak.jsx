import React, { useContext, useState } from "react";
import Languages from "../globalComponents/languages";
import Style from "../../style/illustretorProfilrForm/langForm.module.css";
import { AuthContext } from "../illustratorProfileForm/CreatProfileContextorm/profileform.context";

function LanguagesSpeak() {
  const { formData, setFormData } = useContext(AuthContext);
  const [language, setLanguage] = useState("");
  const [level, setLevel] = useState("");

  const proficiencyLevels = ["Beginner", "Intermediate", "Advanced", "Fluent", "Native"];

  // Add new language and proficiency level to formData.languages
  const addLanguage = () => {
    if (language && level) {
      setFormData((prevData) => ({
        ...prevData,
        languages: [...(prevData.languages || []), { language, level }],
      }));
      setLanguage("");
      setLevel("");
    }
  };

  // Remove a language from the list
  const removeLanguage = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      languages: prevData.languages.filter((_, i) => i !== index),
    }));
  };

  return (
    <>
    <div className={Style.langSpeak}>
      <div className={Style.langSpeakTitle}>
        <label htmlFor="languageSelector" className={Style.label}>
          Select a Language:
        </label>
        <select
          id="languageSelector"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
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
          Select Proficiency Level:
        </label>
        <select
          id="proficiencySelector"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className={Style.select}
        >
          <option value="" disabled>
            Select proficiency level
          </option>
          {proficiencyLevels.map((lvl, index) => (
            <option key={index} value={lvl}>
              {lvl}
            </option>
          ))}
        </select>
      </div>

      <div className={Style.langSpeakButton}>
        <button onClick={addLanguage} className={Style.button}>
          Add Language
        </button>
      </div>

     
    </div>

    <div className={Style.langSpeak}>
    
   <div className={Style.languageList}>
        {formData.languages?.map((langObj, index) => (
          <div key={index} className={Style.langSpeak}>
            <div>
              <h3>Language</h3>
              <p>{langObj.language}</p>
            </div>
            <div>
              <h3>Proficiency</h3>
              <p>{langObj.level}</p>
            </div>
            <div>
              <button
                type="button"
                onClick={() => removeLanguage(index)}
                className={Style.removeButton}
              >
                Remove Language
              </button>
            </div>
          </div>
        ))}
      </div>
   </div>
    </> 

  );
}

export default LanguagesSpeak;
