import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

// Martial-UI Imports
import { Stepper, StepButton, Step } from '@material-ui/core';

function SurveySteps() {
  const history = useHistory();

  const [activeStep, setActiveStep] = useState(grabStep);
  //const [completed, setCompleted] = useState({});

  // Grab current location
  let path = useLocation();

  // Updates the step on load
  useEffect(() => {
    setActiveStep(grabStep);
  }, []); // end useEffect

  // Grabs current step
  const grabStep = () => {
    switch (path.pathname) {
      case '/feeling':
        return 0;
      case '/understanding':
        return 1;
      case '/supported':
        return 2;
      case '/comments':
        return 3;
      case '/review':
        return 4;
      default:
        return -1;
    }
  }; // end setStep

  const handleClick = (link) => {
    history.push(link);
  }; // end handleClick

  return (
    <Stepper activeStep={activeStep}>
      <Step>
        <StepButton onClick={() => handleClick('/feeling')} />
      </Step>
      <Step>
        <StepButton onClick={() => handleClick('/understanding')} />
      </Step>
      <Step>
        <StepButton onClick={() => handleClick('/supported')} />
      </Step>
      <Step>
        <StepButton onClick={() => handleClick('/comments')} />
      </Step>
      <Step>
        <StepButton onClick={() => handleClick('/review')} />
      </Step>
    </Stepper>
  );
}

export default SurveySteps;
