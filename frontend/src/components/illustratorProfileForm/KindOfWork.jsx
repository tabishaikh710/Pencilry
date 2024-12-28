import React, { useContext } from "react";
import { AuthContext } from "../illustratorProfileForm/CreatProfileContextorm/profileform.context";

function KindOfWork() {
  const illustrationCategories = [
    "Portraits",
    "Concept Art",
    "Character Design",
    "Book Illustrations",
    "Comics and Manga",
    "Children’s Illustrations",
    "Storyboard Art",
    "Graphic Design",
    "Fashion Illustration",
    "Environmental Art",
    "Digital Painting",
    "Traditional Art",
    "Product Illustrations",
    "Tattoo Design",
    "Technical Illustrations",
    "Fantasy Art",
    "Sci-Fi Art",
    "Animal Illustrations",
    "Medical Illustrations",
    "Editorial Illustrations",
  ];

  // Extracting formData and setFormData from context
  const { formData, setFormData } = useContext(AuthContext);

  // Initialize selectedCategories in formData if it doesn't exist
  const selectedCategories = formData.selectedCategories || [];

  // Handle checkbox toggle
  const handleCategoryChange = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((selected) => selected !== category) // Remove category
      : [...selectedCategories, category]; // Add category

    // Update formData with the updated categories
    setFormData({ ...formData, selectedCategories: updatedCategories });
  };

  return (
    <div>
      <h1>Great, so what kind of work are you here to do?</h1>
      {illustrationCategories.map((category, index) => (
        <div key={index}>
          <label>
            <input
              type="checkbox"
              value={category}
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />
            {category}
          </label>
        </div>
      ))}

      {/* Display selected categories */}
      <h2>Selected Categories:</h2>
      <div>
        <ul>
          {selectedCategories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default KindOfWork;
