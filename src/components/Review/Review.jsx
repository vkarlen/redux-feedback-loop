import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import SurveySteps from '../SurveySteps/SurveySteps';

// Martial-UI Imports
import { Button, Container, Paper, Grid } from '@material-ui/core';
import { ArrowBackIos, Check } from '@material-ui/icons';

function Review() {
  const feedback = useSelector((store) => store.feedbackReducer);
  const history = useHistory();

  const [errors, setErrors] = useState(false);

  // Checks for errors on load
  useEffect(() => {
    if (feedback.feeling && feedback.understanding && feedback.supported) {
      setErrors(false);
    } else {
      setErrors(true);
    }
  }, []); // end useEffect

  const handleSubmit = () => {
    // Sends feedback data to the server
    axios
      .post('/api/feedback', feedback)
      .then((res) => {
        history.push('/submit');
      })
      .catch((err) => {
        console.log('Error in post', err);
      });
  }; // end handleSubmit

  const handleBack = () => {
    history.push('/comments');
  }; // end handleBack

  return (
    <Container maxWidth="sm">
      <Paper elevation={2} className="formContainer">
        <SurveySteps />
        <Grid container spacing={4} justify="center">
          <Grid item xs={12}>
            <h2>Review Your Feedback</h2>
            <p>Feelings: {feedback.feeling}</p>
            <p>Understanding: {feedback.understanding}</p>
            <p>Support: {feedback.supported}</p>
            <p>Comments: {feedback.comments}</p>
          </Grid>
          <Grid item sx={1}>
            <Button variant="contained" color="secondary" onClick={handleBack}>
              <ArrowBackIos />
              Back
            </Button>
            &nbsp;
            <Button
              variant="contained"
              color="primary"
              name="next"
              onClick={handleSubmit}
              disabled={errors ? true : null}
            >
              Submit
              <Check />
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default Review;
