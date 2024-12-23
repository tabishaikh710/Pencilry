import { useContext } from "react";
import { AuthContext } from "../illustratorProfileForm/CreatProfileContextorm/profileform.context";
import Style from "../../style/illustretorProfilrForm/addSkillForm.module.css";

function SkillShow() {
  const { formData, setFormData } = useContext(AuthContext);

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

  // Initialize formData.search if not already done
  const search = formData.search || "";

  // Handle search input changes
  const handleSearchChange = (e) => {
    setFormData({ ...formData, search: e.target.value });
  };

  // Handle adding a custom skill
  const handleAddCustomSkill = () => {
    if (search && !formData.skills.includes(search)) {
      setFormData({
        ...formData,
        skills: [...formData.skills, search],
        search: "",
      });
    }
  };

  // Handle adding a popular skill
  const handleAddSkill = (skill) => {
    if (!formData.skills.includes(skill)) {
      setFormData({ ...formData, skills: [...formData.skills, skill] });
    }
  };

  // Handle removing a skill
  const handleSkillRemove = (skillToRemove) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((skill) => skill !== skillToRemove),
    });
  };

  return (
    <>
      <h1>What work are you here to do?</h1>
      <p>
        Your skills show clients what you can offer, and help us choose which
        jobs to recommend to you. Add or remove the ones we’ve suggested, or
        start typing to pick more. It’s up to you.
      </p>

      <div className={Style.skillShow}>
        <input
          type="text"
          placeholder="Search for a skill..."
          value={search}
          onChange={handleSearchChange}
          className={Style.searchField}
        />
        <button onClick={handleAddCustomSkill} className={Style.addSkillButton}>
          +
        </button>

        <div className={`${Style.skillSelect} ${Style.skillShowContainer}`}>
          {popularSkills
            .filter((skill) =>
              skill.toLowerCase().includes(search.toLowerCase())
            )
            .map((skill, index) => (
              <button
                key={index}
                onClick={() => handleAddSkill(skill)}
                className={Style.skillButton}
              >
                {skill}
              </button>
            ))}
        </div>

        <div className={Style.skillsSelected}>
          {formData.skills.map((skill, index) => (
            <div key={index} className={Style.skillSelected}>
              {skill}
              <button
                onClick={() => handleSkillRemove(skill)}
                className={Style.removeButton}
                aria-label={`Remove ${skill}`}
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SkillShow;
