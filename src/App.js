import React, { useState } from 'react';
import CV from './components/CV';
import './styles.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="container">
        <button className="button" onClick={toggleDarkMode}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
          <CV darkMode={darkMode} />        
      </div>
    </div>
  );
};

export default App;
