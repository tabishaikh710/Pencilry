import JobCard from '../components/JobsCard';
import image from "../assets/hero1.png";
import JobFilter from "../components/jobspageComFolder/jobsearchFilter"; // Ensure the correct component name

function JobsPage() {
  const cardsData = [
    {
      imageSrc: image,
      title: "Card Title 1",
      text: "This is the second card with its own unique content.",
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
      text: "This is the second card with its own unique content.",
      lastUpdated: "15 mins ago",
    },
    // Add more cards here if needed
  ];

  return (
    <>
    <h1>Card List</h1>
      <div>
        {/* Use the JobFilter component */}
        <JobFilter />
      </div>
      <div>
        
        {cardsData.map((card, index) => (
          <JobCard
            key={index} // Add a unique key
            imageSrc={card.imageSrc}
            title={card.title}
            text={card.text}
            lastUpdated={card.lastUpdated}
          />
        ))}
      </div>
    </>
  );
}

export default JobsPage;
