import React from "react";
import IllustratorsCard from "./IllustratorsCard";

function IllustratorPortfolioSection() {
  const illustrators = [
    {
      title: "Illustrator Name 1",
      text: "This is an illustrator description 1.",
      imgSrc: "https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=1444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imgAlt: "Illustrator Image 1",
      btnText: "View Portfolio",
    },
    {
      title: "Illustrator Name 2",
      text: "This is an illustrator description 2.",
      imgSrc: "https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=1444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imgAlt: "Illustrator Image 2",
      btnText: "View Portfolio",
    },
    {
      title: "Illustrator Name 3",
      text: "This is an illustrator description 3.",
      imgSrc: "https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=1444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imgAlt: "Illustrator Image 3",
      btnText: "View Portfolio",
    },
    {
      title: "Illustrator Name 4",
      text: "This is an illustrator description 4.",
      imgSrc: "https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=1444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imgAlt: "Illustrator Image 4",
      btnText: "View Portfolio",
    },
    {
      title: "Illustrator Name 5",
      text: "This is an illustrator description 5.",
      imgSrc: "https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=1444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imgAlt: "Illustrator Image 5",
      btnText: "View Portfolio",
    },
    {
      title: "Illustrator Name 6",
      text: "This is an illustrator description 6.",
      imgSrc: "https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=1444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imgAlt: "Illustrator Image 6",
      btnText: "View Portfolio",
    },

    {
      title: "Illustrator Name 7",
      text: "This is an illustrator description 6.",
      imgSrc: "https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=1444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imgAlt: "Illustrator Image 6",
      btnText: "View Portfolio",
    },


    {
      title: "Illustrator Name 6",
      text: "This is an illustrator description 6.",
      imgSrc: "https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=1444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imgAlt: "Illustrator Image 6",
      btnText: "View Portfolio",
    },

    {
      title: "Illustrator Name 7",
      text: "This is an illustrator description 6.",
      imgSrc: "https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=1444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imgAlt: "Illustrator Image 6",
      btnText: "View Portfolio",
    },

  ];

  // Split illustrators into chunks of three to create two rows
  const firstRow = illustrators.slice(0, 3);
  const secondRow = illustrators.slice(3, 6);

  return (
    <div>
      <h1>Illustrator Portfolio</h1>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {firstRow.map((illustrator, index) => (
          <IllustratorsCard
            key={index}
            title={illustrator.title}
            text={illustrator.text}
            imgSrc={illustrator.imgSrc}
            imgAlt={illustrator.imgAlt}
            btnText={illustrator.btnText}
          />
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
        {secondRow.map((illustrator, index) => (
          <IllustratorsCard
            key={index + 3}
            title={illustrator.title}
            text={illustrator.text}
            imgSrc={illustrator.imgSrc}
            imgAlt={illustrator.imgAlt}
            btnText={illustrator.btnText}
          />
        ))}
      </div>
    </div>
  );
}

export default IllustratorPortfolioSection;
