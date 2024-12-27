
 import { AuthContext } from "../illustratorProfileForm/CreatProfileContextorm/profileform.context";








import React, { useContext } from "react";

function EducationHistory() {
    const { formData, setFormData } = useContext(AuthContext);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const generateYears = (start, end) => {
    const years = [];
    for (let i = start; i <= end; i++) {
      years.push(i);
    }
    return years;
  };

  const years = generateYears(2000, 2030); // Adjust range as needed

  return (
    <form
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      {/* School Input */}
      <div style={{ position: "relative" }}>
        <label htmlFor="school" style={{ display: "block", marginBottom: "5px" }}>
          School *
        </label>
        <input
          type="text"
          id="school"
          name="school"
          value={formData.school}
          onChange={handleInputChange}
          placeholder=".Enter School Name"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        {formData.school && (
          <button
            type="button"
            onClick={() => setFormData({ ...formData, school: "" })}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            ✖
          </button>
        )}
      </div>

      {/* Degree Input */}
      <div>
        <label htmlFor="degree" style={{ display: "block", marginBottom: "5px" }}>
          Degree
        </label>
        <input
          type="text"
          id="degree"
          name="degree"
          value={formData.degree}
          onChange={handleInputChange}
          placeholder="Ex: Bachelors"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>

      {/* Field of Study Input */}
      <div style={{ position: "relative" }}>
        <label htmlFor="fieldOfStudy" style={{ display: "block", marginBottom: "5px" }}>
          Field of Study
        </label>
        <input
          type="text"
          id="fieldOfStudy"
          name="fieldOfStudy"
          value={formData.fieldOfStudy}
          onChange={handleInputChange}
          placeholder="Enter Field of Study"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        {formData.fieldOfStudy && (
          <button
            type="button"
            onClick={() => setFormData({ ...formData, fieldOfStudy: "" })}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            ✖
          </button>
        )}
      </div>

      {/* Dates Attended */}
      <div>
        <label style={{ display: "block", marginBottom: "5px" }}>Dates Attended</label>
        <div style={{ display: "flex", gap: "10px" }}>
          <select
            name="startYear"
            value={formData.startYear}
            onChange={handleInputChange}
            style={{
              flex: 1,
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              background: "#fff",
              appearance: "none",
            }}
          >
            <option value="" disabled>
              Start Year
            </option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>

          <select
            name="endYear"
            value={formData.endYear}
            onChange={handleInputChange}
            style={{
              flex: 1,
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              background: "#fff",
              appearance: "none",
            }}
          >
            <option value="" disabled>
              End Year
            </option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" style={{ display: "block", marginBottom: "5px" }}>
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Enter Description"
          rows="4"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
    </form>
  );
}


  

export default EducationHistory;
