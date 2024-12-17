import React, { useEffect, useState } from 'react';

function LanguagesSpeak() {
  const [languages, setLanguages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await fetch('https://cors-anywhere.herokuapp.com/https://restcountries.com/v3.1/all'
);
        if (!response.ok) {
          throw new Error('Failed to fetch languages');
        }
        const data = await response.json();
        
        // Extract all languages and deduplicate
        const languageSet = new Set();
        data.forEach((country) => {
          if (country.languages) {
            Object.values(country.languages).forEach((lang) => languageSet.add(lang));
          }
        });

        setLanguages(Array.from(languageSet));
      } catch (err) {
        setError(err.message);
      }
    };

    fetchLanguages();
  }, []);

  return (
    <div>
      <h2>Languages Spoken Around the World</h2>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {languages.map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LanguagesSpeak;
