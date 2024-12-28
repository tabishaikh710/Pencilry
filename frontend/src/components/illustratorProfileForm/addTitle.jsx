import React, { useState } from "react";

const AddTitle = () => {
  const [title, setTitle] = useState("Design");

  const styles = {
    container: {
      padding: "20px",
      maxWidth: "800px",
      margin: "0 auto",
      fontFamily: "Arial, sans-serif",
    },
    stepCounter: {
      fontSize: "14px",
      color: "#666",
      marginBottom: "10px",
    },
    heading: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    subHeading: {
      fontSize: "16px",
      color: "#444",
      marginBottom: "20px",
    },
    label: {
      fontSize: "14px",
      fontWeight: "bold",
      marginBottom: "10px",
      display: "block",
    },
    inputWrapper: {
      display: "flex",
      alignItems: "center",
      border: "1px solid #ddd",
      borderRadius: "4px",
      padding: "10px",
    },
    input: {
      flex: 1,
      fontSize: "16px",
      border: "none",
      outline: "none",
    },
    clearButton: {
      background: "none",
      border: "none",
      fontSize: "18px",
      cursor: "pointer",
      color: "#aaa",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.stepCounter}>4/10</div>
      <h2 style={styles.heading}>
        Got it. Now, add a title to tell the world what you do.
      </h2>
      <p style={styles.subHeading}>
        It's the very first thing clients see, so make it count. Stand out by
        describing your expertise in your own words.
      </p>
      <label style={styles.label} htmlFor="titleInput">
        Your professional role
      </label>
      <div style={styles.inputWrapper}>
        <input
          id="titleInput"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your professional role"
          style={styles.input}
        />
        {title && (
          <button
            onClick={() => setTitle("")}
            style={styles.clearButton}
            aria-label="Clear input"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
};

export default AddTitle;
