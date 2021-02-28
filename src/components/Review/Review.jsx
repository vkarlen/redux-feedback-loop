import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// Martial-UI Imports
import { Button, Container, TextField, Paper, Grid } from '@material-ui/core';

function Review() {
  const feedback = useSelector((store) => store.feedbackReducer);
  const history = useHistory();

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
        <Grid container spacing={4} justify="center">
          <Grid item xs={12}>
            <h2>Review Your Feedback</h2>
            <p>Feelings: {feedback.feeling}</p>
            <p>Understanding: {feedback.understanding}</p>
            <p>Support: {feedback.supported}</p>
            <p>Comments: {feedback.comments}</p>
          </Grid>
          <Grid item sx={1}>
            <Button
              variant="contained"
              color="secondary"
              name="back"
              onClick={handleBack}
            >
              Back
            </Button>
            &nbsp;
            <Button
              variant="contained"
              color="primary"
              name="next"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default Review;
