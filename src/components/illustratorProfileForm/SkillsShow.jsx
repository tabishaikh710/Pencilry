import { useContext } from "react";
import { AuthContext } from "../illustratorProfileForm/CreatProfileContextorm/profileform.context";

function SkillShow() {
  const { formData, setFormData } = useContext(AuthContext); // Corrected context usage

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
      setFormData({ ...formData, skills: [...formData.skills, search], search: "" });
    }
  };

  // Handle adding a popular skill
  const handleAddSkill = (skill) => {
    if (!formData.skills.includes(skill)) {
      setFormData({ ...formData, skills: [...formData.skills, skill] });
    }
  };

  return (
    <>
      <h1>What work are you here to do?</h1>
      <p>
        Your skills show clients what you can offer, and help us choose which
        jobs to recommend to you. Add or remove the ones we’ve suggested, or
        start typing to pick more. It’s up to you.
      </p>

      <div className="skillShow">
        <input
          type="text"
          placeholder="Search for a skill..."
          value={search}
          onChange={handleSearchChange}
          className="searchField" // Corrected class name
        />
        <button onClick={handleAddCustomSkill} className="addSkillButton">
          +
        </button>

        <div className="skillSelect skillShowContainer">
          {popularSkills
            .filter((skill) =>
              skill.toLowerCase().includes(search.toLowerCase())
            )
            .map((skill, index) => (
              <button
                key={index}
                onClick={() => handleAddSkill(skill)}
                className="skillButton"
              >
                {skill}
              </button>
            ))}
        </div>
      </div>
    </>
  );
}

export default SkillShow;
