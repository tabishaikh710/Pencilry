import React, { useContext } from "react";
import { AuthContext } from "../illustratorProfileForm/CreatProfileContextorm/profileform.context";
const bio = () => {
     const { formData, setFormData } = useContext(AuthContext);
    "I'm a developer experienced in building websites for small and medium-sized businesses. Whether you're trying to win work, list your services, or create a new online store, I can help."


  const styles = {
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      padding: "20px",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    formSection: {
      width: "48%",
    },
    textArea: {
      width: "100%",
      padding: "10px",
      fontSize: "16px",
      border: "1px solid #ddd",
      borderRadius: "4px",
      resize: "none",
    },
    previewSection: {
      width: "48%",
      border: "1px solid #ddd",
      padding: "20px",
      borderRadius: "8px",
      backgroundColor: "#f9f9f9",
    },
    profileCard: {
      textAlign: "center",
    },
    profilePic: {
      borderRadius: "50%",
      width: "100px",
      height: "100px",
    },
    rating: {
      fontSize: "14px",
      color: "#555",
    },
    bioPreview: {
      margin: "20px 0",
      fontSize: "16px",
    },
    ul: {
      listStyleType: "none",
      padding: "0",
    },
    li: {
      marginBottom: "10px",
      fontSize: "14px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formSection}>
        <h2>Great. Now write a bio to tell the world about yourself.</h2>
        <p>
          Help people get to know you at a glance. What work do you do best?
          Tell them clearly, using paragraphs or bullet points. You can always
          edit later; just make sure you proofread now.
        </p>
        <textarea
          value={bio}
          onChange={(e) => setFormData.bio(e.target.value)}
          rows="10"
          maxLength="5000"
          style={styles.textArea}
        />
        <p>{5000 - bio.length} characters left</p>
      </div>
      <div style={styles.previewSection}>
        <div style={styles.profileCard}>
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            style={styles.profilePic}
          />
          <h3>Marti G.</h3>
          <p style={styles.rating}>
            ⭐ 5.0 &nbsp; | &nbsp; $75.00/hr &nbsp; | &nbsp; 14 jobs
          </p>
          <p style={styles.bioPreview}>{bio}</p>
          <ul style={styles.ul}>
            <li style={styles.li}>
              Knows HTML and CSS3, PHP, jQuery, WordPress, and SEO
            </li>
            <li style={styles.li}>Full project management from start to finish</li>
            <li style={styles.li}>
              Regular communication is important to me, so let’s keep in touch.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default bio;
