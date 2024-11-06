import React, { useState } from "react";
import jobSecsStyles from "../style/bg.module.css";
import JobCard from "./JobsCard";
import image from "../assets/hero1.png";

function JobListingSection() {
  const cardsData = [
    {
      imageSrc: image,
      title: "Card Title 1",
      text: " This is the second card with its own unique content.",
      lastUpdated: "5 mins ago",
    },
    {
      imageSrc: image,
      title: "Card Title 2",
      text: "This is the second card with its own unique content.",
      lastUpdated: "10 mins ago",
    },
    {
      imageSrc: image,
      title: "Card Title 3",
      text: " the second card with its own unique content.",
      lastUpdated: "15 mins ago",
    },
    {
      imageSrc: image,
      title: "Card Title 4",
      text: " tThis is the second card with its own unique content.",
      lastUpdated: "20 mins ago",
    },
    {
      imageSrc: image,
      title: "Card Title 5",
      text: "This is This is the second card with its own unique content.",
      lastUpdated: "25 mins ago",
    },
    {
      imageSrc: image,
      title: "Card Title 6",
      text: "This is the second card with its own unique content.",
      lastUpdated: "30 mins ago",
    },
    {
      imageSrc: image,
      title: "Card Title 7",
      text: "This is the seventh card with some additional text to describe it.",
      lastUpdated: "35 mins ago",
    },
    {
      imageSrc: image,
      title: "Card Title 8",
      text: "This is the eighth card with some additional text to describe it.",
      lastUpdated: "40 mins ago",
    },
    {
      imageSrc: image,
      title: "Card Title 9",
      text: "This is the ninth card with some additional text to describe it.",
      lastUpdated: "45 mins ago",
    },
    {
      imageSrc: image,
      title: "Card Title 10",
      text: "This is the tenth card with some additional text to describe it.",
      lastUpdated: "50 mins ago",
    },
    {
        imageSrc: image,
        title: "Card Title 1",
        text: " This is the second card with its own unique content.",
        lastUpdated: "5 mins ago",
      },
      {
        imageSrc: image,
        title: "Card Title 2",
        text: "This is the second card with its own unique content.",
        lastUpdated: "10 mins ago",
      },
      {
        imageSrc: image,
        title: "Card Title 3",
        text: " the second card with its own unique content.",
        lastUpdated: "15 mins ago",
      },
      {
        imageSrc: image,
        title: "Card Title 4",
        text: " tThis is the second card with its own unique content.",
        lastUpdated: "20 mins ago",
      },
      {
        imageSrc: image,
        title: "Card Title 5",
        text: "This is This is the second card with its own unique content.",
        lastUpdated: "25 mins ago",
      },
      {
        imageSrc: image,
        title: "Card Title 6",
        text: "This is the second card with its own unique content.",
        lastUpdated: "30 mins ago",
      },
      {
        imageSrc: image,
        title: "Card Title 7",
        text: "This is the seventh card with some additional text to describe it.",
        lastUpdated: "35 mins ago",
      },
      {
        imageSrc: image,
        title: "Card Title 8",
        text: "This is the eighth card with some additional text to describe it.",
        lastUpdated: "40 mins ago",
      },
      {
        imageSrc: image,
        title: "Card Title 9",
        text: "This is the ninth card with some additional text to describe it.",
        lastUpdated: "45 mins ago",
      },
      {
        imageSrc: image,
        title: "Card Title 10",
        text: "This is the tenth card with some additional text to describe it.",
        lastUpdated: "50 mins ago",
      },
    // Add more cards if needed...
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6; // Define how many cards to display per page

  // Logic for displaying cards for the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardsData.slice(indexOfFirstCard, indexOfLastCard);

  // Calculate total number of pages
  const totalPages = Math.ceil(cardsData.length / cardsPerPage);

  // Handlers for pagination
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className={`${jobSecsStyles.contain} container`}>
      <h1>Job Listing</h1>

      {/* Display current page of cards in 2 rows (3 cards per row) */}
      <div className="row">
        {currentCards.map((card, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <JobCard
              imageSrc={card.imageSrc}
              title={card.title}
              text={card.text}
              lastUpdated={card.lastUpdated}
            />
          </div>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="pagination-controls" style={{ marginTop: "20px", textAlign: "center" }}>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span style={{ margin: "0 10px" }}>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </section>
  );
}

export default JobListingSection;
