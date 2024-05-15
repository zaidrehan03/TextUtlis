import React, { useState } from 'react';
import './Welcome.css';

function Welcome() {
  const [name, setName] = useState('');
  const [showAlert, setShowAlert] = useState(true);
  const [validationError, setValidationError] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAlertOK = () => {
    if (name === '') {
      setValidationError(true);
    } else {
      setShowAlert(false);
      // window.location.href='/App'
      
    }
  };

  // const handleProceed = () => {
  //   // Handle the logic to proceed to the actual website here
  //   console.log('Proceed to the actual website');
  // };


  return (
    <div>
      {showAlert?
        (<div className="alert-box">
        <input type="text" value={name} onChange={handleNameChange} placeholder="ENTER YOUR NAME" />
        <button onClick={handleAlertOK}>OK</button>
        {validationError && <p>Please enter your name.</p>}
      </div>):<div className="alert-box">
        <p>{name}</p>
      </div>
      }
    </div>
  );


}
export default Welcome;
