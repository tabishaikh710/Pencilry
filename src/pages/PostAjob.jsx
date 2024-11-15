import React, { useState } from "react";
import ClientNav from "../components/ClientNevbar"; // Correct component import
import style from "../style/PostAjob.module.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const PostAjob = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    skills: [], // Initialize as an array for proper handling
    projectSize: "",
    projectDuration: "",
    experienceLevel: "",
    contractToHire: "",
    budget: "",
    document:"",
    description: ""
  });
  const totalPages = 9;
  const popularSkills = [
    "Digital Painting (Photoshop, Procreate, Illustrator)",
    "Graphic Design (Logos, Branding, Posters)",
    "Vector Art",
    "3D Modeling (Blender, Maya, ZBrush)",
    "Animation (2D, 3D, Motion Graphics)",
    "Game Art (Character Design, Environment Design, Pixel Art)",
    "Video Editing and Compositing (After Effects, Premiere Pro)",
    "Concept Art (Characters, Environments, Weapons)",
    "UI/UX Design (App, Web Design)",
    "Illustration (Digital Comics, Concept Art)",
    "Photo Manipulation and Retouching",
    "Visual Effects (VFX)",
  ];
  const validation=()=>{
    switch (currentTab) {
      case 1:
        return formData.title.trim() !== "" && formData.title.length >= 2  ;
      case 2:
        return formData.skills.length > 0;
      case 3:
        return formData.projectSize.trim() !== "";
      case 4:
        return formData.projectDuration.trim() !== "";
      case 5:
        return formData.experienceLevel.trim() !== "";
      case 6:
        return formData.contractToHire.trim() !== "";
      case 7:
        return formData.budget.trim() !== "";
      case 8:
        return formData.description.trim() !== "" && formData.document.trim() !== "";
      default:
        return true;
    }
   }
    

   const handleSubmit= (e)=>{
     
    e.preventDefault();

    setCurrentTab(currentTab ==9)

   }


  const handleSkillSelect = (skill) => {
    if (!formData.skills.includes(skill)) {
      setFormData((prevData) => ({
        ...prevData,
        skills: [...prevData.skills, skill],
      }));
    }
  };

  const handleSkillRemove = (skill) => {
    setFormData((prevData) => ({
      ...prevData,
      skills: prevData.skills.filter((s) => s !== skill),
    }));
  };

  const handleSearchChange = (e) => {
    setFormData({ ...formData, searchSkill: e.target.value });
  };

  const handleAddCustomSkill = () => {
    if (
      formData.searchSkill?.trim() &&
      !formData.skills.includes(formData.searchSkill)
    ) {
      setFormData((prevData) => ({
        ...prevData,
        skills: [...prevData.skills, formData.searchSkill],
        searchSkill: "",
      }));
    }
  };

  const handleNextPage = () => {
    if (currentTab < totalPages && validation()) setCurrentTab(currentTab + 1);
  };

  const handlePrevPage = () => {
    if (currentTab > 1) setCurrentTab(currentTab - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData,  [name]: value });
  };

  //cse3 radiobuttons
  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const renderContent = () => {
    switch (currentTab) {
      case 1:
        return (
          <div className={`container ${style.container}`}>
            <div className={style.innercontainerLeft}>
              <h1 className={style.head}>
                Let's start with a strong <br />
                title.
              </h1>
              <p className={style.para}>
                This helps your job post stand out to the right candidates. It’s
                the first thing they’ll see, so make it count!
              </p>
            </div>
            <div className={style.innercontainerRight}>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter your job title"
                className={style.inputField}
              />
              <p className={style.para}>Talent are looking for:</p>
              <ul>
                <li>Clear expectations about your task or deliverables</li>
                <li>The skills required for your work</li>
                <li>Good communication</li>
                <li>Details about how you or your team like to work</li>
              </ul>
            </div>
          </div>
        );

      case 2:
        return (
          <div className={`container ${style.container}`}>
            <div className={style.innercontainerLeft}>
              <h1 className={style.head} style={{ fontSize: "20px" }}>
                What are the main skills <br />
                required for your work?
              </h1>
              <p className={style.para}>
                This helps your job post stand out to the right candidates. It’s
                the first thing they’ll see, so make it count!
              </p>
            </div>
            <div className={style.innercontainerRight}>
              <input
                type="text"
                placeholder="Search skills or add your own"
                value={formData.searchSkill || ""}
                onChange={handleSearchChange}
                className={style.searchField}
              />
              <button
                onClick={handleAddCustomSkill}
                className={style.addButton}
              >
                +
              </button>

              <div className={`${style.skillSelect} ${style.skillsContainer}`}>
                {popularSkills
                  .filter((skill) =>
                    skill
                      .toLowerCase()
                      .includes(formData.searchSkill?.toLowerCase())
                  )
                  .map((skill, index) => (
                    <button
                      key={index}
                      onClick={() => handleSkillSelect(skill)}
                      className={style.skillButton}
                    >
                      {skill} +
                    </button>
                  ))}
              </div>

              <div className={style.selectedSkills}>
                {formData.skills.map((skill, index) => (
                  <div key={index} className={style.selectedSkill}>
                    {skill}
                    <button
                      onClick={() => handleSkillRemove(skill)}
                      className={style.removeButton}
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className={`container ${style.container}`}>
            <div className={style.innercontainerLeft}>
              <h1 className={style.head}>Choose the project size.</h1>
              <p className={style.para}>
                Select the scope that best describes the project.
              </p>
            </div>
            <div className={style.innercontainerRight}>
              <label>
                <input
                  type="radio"
                  name="projectSize"
                  value="Large"
                  checked={formData.projectSize === "Large"}
                  onChange={handleRadioChange}
                />
                Large - Longer term or complex initiatives (ex. design and build
                a full website)
              </label>
              <label>
                <input
                  type="radio"
                  name="projectSize"
                  value="Medium"
                  checked={formData.projectSize === "Medium"}
                  onChange={handleRadioChange}
                />
                Medium - Well-defined projects (ex. a landing page)
              </label>
              <label>
                <input
                  type="radio"
                  name="projectSize"
                  value="Small"
                  checked={formData.projectSize === "Small"}
                  onChange={handleRadioChange}
                />
                <span>
                  <strong>Small</strong>
                  <br /> Quick and straightforward tasks (ex. update text and
                  images on a webpage)
                </span>
              </label>
            </div>
          </div>
        );
      case 4:
        return (
          <div className={`container ${style.container}`}>
            <div className={style.innercontainerLeft}>
              <h1 className={style.head}>Choose the project size.</h1>
              <p className={style.para}>
                Select the scope that best describes the project.
              </p>
            </div>

            <div className={style.innercontainerRight}>
              <h5>How long will your work take?</h5>
              <label>
                <input
                  type="radio"
                  name="projectDuration"
                  value="3 to 6 months"
                  checked={formData.projectDuration === "3 to 6 months"}
                  onChange={handleRadioChange}
                />
                <span>
                  <strong>3 to 6 months</strong>
                </span>
              </label>
              <label>
                <input
                  type="radio"
                  name="projectDuration"
                  value="1 to 3 months"
                  checked={formData.projectDuration === "1 to 3 months"}
                  onChange={handleRadioChange}
                />
                <span>
                  <strong>1 to 3 months</strong>
                </span>
              </label>
              <label>
                <input
                  type="radio"
                  name="projectDuration"
                  value="Less than 1 month"
                  checked={formData.projectDuration === "Less than 1 month"}
                  onChange={handleRadioChange}
                />
                <span>
                  <strong>Less than 1 month</strong>
                </span>
              </label>
            </div>
          </div>
        );

      case 5:
        return (
          <div className={`container ${style.container}`}>
            <div className={style.innercontainerLeft}>
              <h1 className={style.head}>Choose the project size.</h1>
              <p className={style.para}>
                Select the scope that best describes the project.
              </p>
            </div>

            <div className={style.innercontainerRight}>
              <h5>What level of experience will it need?</h5>
              <label>
                <input
                  type="radio"
                  name="experienceLevel"
                  value="Entry"
                  checked={formData.experienceLevel === "Entry"}
                  onChange={handleRadioChange}
                />
                <span>
                  <strong>Entry</strong>
                  <br />
                  Looking for someone relatively new to this field
                </span>
              </label>
              <label>
                <input
                  type="radio"
                  name="experienceLevel"
                  value="Intermediate"
                  checked={formData.experienceLevel === "Intermediate"}
                  onChange={handleRadioChange}
                />
                <span>
                  <strong>Intermediate</strong>
                  <br />
                  Looking for substantial experience in this field
                </span>
              </label>
              <label>
                <input
                  type="radio"
                  name="experienceLevel"
                  value="Expert"
                  checked={formData.experienceLevel === "Expert"}
                  onChange={handleRadioChange}
                />
                <span>
                  <strong>Expert</strong>
                  <br />
                  Looking for comprehensive and deep expertise in this field
                </span>
              </label>
            </div>
          </div>
        );

      case 6:
        return (
          <div className={`container ${style.container}`}>
            <div className={style.innercontainerLeft}>
              <h1 className={style.head}>
                Is this job a contract-to-hire opportunity?
              </h1>
              <p className={style.para}>
                This helps set expectations with talent and won't restrict who
                can submit proposals.
              </p>
            </div>

            <div className={style.innercontainerRight}>
              <label>
                <input
                  type="radio"
                  name="contractToHire"
                  value="Yes, this could become full time"
                  checked={
                    formData.contractToHire ===
                    "Yes, this could become full time"
                  }
                  onChange={handleRadioChange}
                />
                <span>
                  <strong>Yes, this could become full time</strong>
                </span>
              </label>
              <label>
                <input
                  type="radio"
                  name="contractToHire"
                  value="No, not at this time"
                  checked={formData.contractToHire === "No, not at this time"}
                  onChange={handleRadioChange}
                />
                <span>
                  <strong>No, not at this time</strong>
                </span>
              </label>
            </div>
          </div>
        );

      case 7:
        return (
          <div className={`container ${style.container}`}>
            <div className={style.innercontainerLeft}>
              <h1 className={style.head}>Tell us about your budget.</h1>
              <p className={style.para}>
                This will help us match you to talent within your range.
              </p>
            </div>

            <div className={style.innercontainerRight}>
              <p>
                Set a price for the project and pay at the end, or you can
                divide the project into milestones and pay as each milestone is
                completed
              </p>
              <h5>What is the best cost estimate for your project?</h5>
              <p>
                You can negotiate this cost and create milestones when you chat
                with your freelancer.
              </p>
              <div className={style.budgetInputContainer}>
  <         span className={style.dollarSign}>$</span>
     <input
       type="number"
       min="0"
       max="10000"
       step="1"
       name="budget"
       className={style.budgetInput}
       required="required"
       placeholder="0.00"
       value={formData.budget}
       onChange={handleChange}
       />
       </div>



            </div>
          </div>
        );




        case 8:
        return (
          <div className={`container ${style.container}`}>
            <div className={style.innercontainerLeft}>
              <h1 className={style.head}>Start the conversation.</h1>
              <p className={style.para}>
              Talent are looking for:
              </p>
              <ul>
                <li>Clear expectations about your task or deliverables</li>
                <li>The skills required for your work</li>
                <li>Good communication</li>
                <li>Details about how you or your team like to work</li>
              </ul>
            </div>

            <div className={style.innercontainerRight}>
            

            <textarea

            onChange={handleChange} 
            name="description"
            value={formData.description}
            className={style.textarea}
            placeholder="Tell us about your project"
            

            /><br />
            


            <input type="file" 
            placeholder="Attach file "
            name="document"
            className={style.fileInput}
            onChange={handleChange} 
            value={formData.document}

            />

            </div>
          </div>
        );

        




      default:
        return <h1>form submited</h1>;
    }
  };

 


  return (
    <>
      <ClientNav />
      <section>
        <div className="container">
          <div className="row">
            <div className={style.tabcontent}>{renderContent()}</div>
          </div>
        </div>
  
        <div
          className="pagination-controls"
          style={{ marginTop: "20px", textAlign: "center" }}
        >
          <button onClick={handlePrevPage} disabled={currentTab === 1}>
            Previous
          </button>
          <span style={{ margin: "0 10px" }}>Page {currentTab}</span>
  
          {currentTab === 8 ? (
            <button onClick={handleSubmit}>Submit</button>
          ) : (
            <button onClick={handleNextPage} disabled={currentTab === totalPages && !validation()}  >
              Next
            </button>
          )}
        </div>
      </section>
    </>
  )
};

export default PostAjob;
