import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import styles from "../style/bg.module.css";
import JobListingSection from '../components/JobListingSection';  // Correct import
import Illustrators from '../components/IllustratorsPortfoliosSection'

function HomePage() {
  return (
    <div>
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section */}
      <section className={`${styles.homeHero}`}>
        <div className="container">
          <HeroSection />
        </div>
      </section>
  
      {/* Job Listing Section */}
      <JobListingSection /> {/* Correct component usage */}

       

     {/* Joportfolio Section */}


     <div className="container">
     <Illustrators  className=".container"/> 
          
        </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default HomePage;
