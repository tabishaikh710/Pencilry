import  { useContext } from "react";
import { AuthContext } from "../illustratorProfileForm/CreatProfileContextorm/profileform.context";

const WorkExperience = () => {

  const { formData, setFormData } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const styles = {
    form: {
      maxWidth: "600px",
      margin: "20px auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      fontFamily: "Arial, sans-serif",
    },
    formGroup: {
      marginBottom: "15px",
    },
    label: {
      display: "block",
      fontWeight: "bold",
      marginBottom: "5px",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "5px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      fontSize: "14px",
    },
    textarea: {
      width: "100%",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      fontSize: "14px",
      resize: "none",
      height: "80px",
    },
    dateSelect: {
      display: "flex",
      gap: "10px",
    },
    checkboxGroup: {
      display: "flex",
      alignItems: "center",
    },
  };

  return (
    <form style={styles.form}>
      <div style={styles.formGroup}>
        <label style={styles.label}>Title *</label>
        <input
          type="text"
          name="wtitle"
          value={formData.wtitle}
          onChange={handleChange}
          placeholder="Enter job title"
          style={styles.input}
          required
        />
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Company *</label>
        <input
          type="text"
          name="wcompany"
          value={formData.wcompany}
          onChange={handleChange}
          placeholder="Enter company name"
          style={styles.input}
          required
        />
      </div>

      <div style={{ ...styles.formGroup, display: "flex", gap: "10px" }}>
        <div style={{ flex: "1" }}>
          <label style={styles.label}>Location</label>
          <input
            type="text"
            name="wlocation"
            value={formData.wlocation}
            onChange={handleChange}
            placeholder="Ex: London"
            style={styles.input}
          />
        </div>
        <div style={{ flex: "1" }}>
          <label style={styles.label}>Country</label>
          <input
            type="text"
            name="wcountry"
            value={formData.wcountry}
            onChange={handleChange}
            placeholder="Country"
            style={styles.input}
          />
        </div>
      </div>

      <div style={styles.formGroup}>
        <label style={styles.checkboxGroup}>
          <input
            type="checkbox"
            name="wisCurrent"
            checked={formData.wisCurrent}
            onChange={handleChange}
            style={{ marginRight: "5px" }}
          />
          I am currently working in this role
        </label>
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Start Date *</label>
        <div style={styles.dateSelect}>
          <select
            name="wstartDateMonth"
            value={formData.wstartDateMonth}
            onChange={handleChange}
            style={styles.input}
          >
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
          </select>
          <select
            name="wstartDateYear"
            value={formData.wstartDateYear}
            onChange={handleChange}
            style={styles.input}
          >
            {Array.from({ length: 30 }, (_, i) => 2021 - i).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      {!formData.wisCurrent && (
        <div style={styles.formGroup}>
          <label style={styles.label}>End Date *</label>
          <input
            type="date"
            name="wendDate"
            value={formData.wendDate}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
      )}

      <div style={styles.formGroup}>
        <label style={styles.label}>Description</label>
        <textarea
          name="wdescription"
          value={formData.wdescription}
          onChange={handleChange}
          placeholder="Enter job description"
          style={styles.textarea}
        />
      </div>
    </form>
  );
};

export default WorkExperience;
