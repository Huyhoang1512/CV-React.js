// CV.js
import React from 'react';
import Header from './Header';
import Introduction from './Introduction';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';

const CV = ({ darkMode }) => {
  return (
    <div className={`cv-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header />
      <Introduction />
      <Experience />
      <Education />
      <Skills />
    </div>
  );
};

export default CV;
