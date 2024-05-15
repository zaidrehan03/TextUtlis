// import React from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import './App.css';
function App() {

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = '#042743';
    }

    else {
      setMode('light');
      document.body.style.background = 'rgb(212, 238, 238)';
    }
  }
 
  return (
 <div>
      <Navbar title="" mode={mode} toggleMode={toggleMode} />
    
      <div className="container my-3">

        <center>
          <TextForm heading="ENTER THE TEXT TO ANALYZE" mode={mode} />
     
        </center>
      </div>

    </div>
  );
}
export default App