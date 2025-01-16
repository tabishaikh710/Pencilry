import React from "react";
function employmentCard(){
    const cardStyle = {
        backgroundColor: "#fff",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "20px",
        maxWidth: "300px",
        width: "100%",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        margin: "20px auto",
        transition: "transform 0.2s, box-shadow 0.2s",
      };
    
      const deleteButtonStyle = {
        backgroundColor: "#ff4d4d",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        padding: "8px 12px",
        cursor: "pointer",
        marginTop: "10px",
        fontSize: "1rem",
      };
    
      const hoverEffect = {
        transform: "translateY(-5px)",
        boxShadow: "0 6px 8px rgba(0, 0, 0, 0.2)",
      };
    
      const handleDelete = () => {
        alert("Delete button clicked!");
      };
    
      return (
        <div
          style={cardStyle}
          onMouseOver={(e) => Object.assign(e.target.style, hoverEffect)}
          onMouseOut={(e) => Object.assign(e.target.style, cardStyle)}
        >
          <h2>Software Engineer</h2>
          <p>
            <strong>Company:</strong> Tech Corp
          </p>
          <p>
            <strong>Location:</strong> New York
          </p>
          <p>
            <strong>Country:</strong> USA
          </p>
          <p>
            <strong>Start Date:</strong> 2024-02-01
          </p>
          <p>
            <strong>Job Description:</strong> Developing and maintaining web
            applications.
          </p>
          <button style={deleteButtonStyle} onClick={handleDelete}>
            Delete
          </button>
        </div>
      );
    }

export default employmentCard;