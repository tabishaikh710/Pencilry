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
  
    return (
      <div>
        <h1>Great, so what kind of work are you here to do?</h1>
        {illustrationCategories.map((category, index) => (
          <div key={index}>
            <label>
              <input type="checkbox" value={category} />
              {category}
            </label>
          </div>
        ))}
      </div>
    );
  }
  
  export default KindOfWork;
  