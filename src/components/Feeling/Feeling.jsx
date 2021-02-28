import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Martial-UI Imports
import { Button, Container, TextField, Paper, Grid } from '@material-ui/core';

function Feeling() {
  const dispatch = useDispatch();
  const history = useHistory();

  // Sets up local state. If there is already a value in
  //  the store, it sets it as that (like when back button
  //  is used)
  const [feelingNum, setFeelingNum] = useState(
    useSelector((store) => store.feedbackReducer.feeling)
  );
  const [errors, setErrors] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    // Double checks there are no errors
    if (!errors && feelingNum) {
      dispatch({
        type: 'UPDATE_FEEDBACK',
        payload: {
          property: 'feeling',
          value: feelingNum,
        },
      });

      history.push('/understanding');
    } else {
      setErrors(true);
    }
  }; // end handleSubmit

  const handleChange = (evt) => {
    let input = evt.target.value;

    // Validate that input is acceptable
    if (input <= 0 || input > 5) {
      setErrors(true);
    } else {
      setErrors(false);
    }

    setFeelingNum(evt.target.value);
  }; // end handleChange

  return (
    <Container maxWidth="sm">
      <Paper elevation={2} className="formContainer">
        <Grid container spacing={4} justify="center">
          <Grid item xs={12}>
            <h2>How are you feeling today?</h2>
            <form onSubmit={handleSubmit}>
              <TextField
                id="filled-number"
                label="Enter 1 - 5"
                type="number"
                variant="standard"
                min="1"
                max="5"
                name="feeling"
                value={feelingNum}
                onChange={(evt) => handleChange(evt)}
                error={errors ? true : null}
                helperText={errors ? 'Please enter a valid input' : null}
              />
            </form>
          </Grid>
          <Grid item sx={1}>
            <Button
              variant="contained"
              color="primary"
              name="next"
              onClick={handleSubmit}
              disabled={errors ? true : null}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default Feeling;
