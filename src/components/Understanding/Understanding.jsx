import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Martial-UI Imports
import { Button, Container, TextField, Paper, Grid } from '@material-ui/core';

function Understanding() {
  const dispatch = useDispatch();
  const history = useHistory();

  // Sets up local state. If there is already a value in
  //  the store, it sets it as that (like when back button
  //  is used)
  const [understandNum, setUnderstandNum] = useState(
    useSelector((store) => store.feedbackReducer.understanding)
  );

  const handleSubmit = (evt) => {
    evt.preventDefault();

    // Validates input before sending to the store
    if (understandNum && understandNum >= 1 && understandNum <= 5) {
      dispatch({
        type: 'UPDATE_FEEDBACK',
        payload: {
          property: 'understanding',
          value: understandNum,
        },
      });

      history.push('/supported');
    } else {
      alert('Please enter a number between 1 and 5.');
    }
  }; // end handleSubmit

  const handleBack = () => {
    history.push('/feeling');
  }; // end handleBack

  return (
    <Container maxWidth="sm">
      <Paper elevation={2} className="formContainer">
        <Grid container spacing={4} justify="center">
          <Grid item xs={12}>
            <h2>How well are you understanding the content?</h2>

            <form onSubmit={handleSubmit}>
              <TextField
                id="filled-number"
                label="Enter 1 - 5"
                type="number"
                variant="standard"
                min="1"
                max="5"
                name="understanding"
                value={understandNum}
                onChange={(evt) => setUnderstandNum(evt.target.value)}
              />
            </form>
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
              Next
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default Understanding;
