import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import SurveySteps from '../SurveySteps/SurveySteps';

// Martial-UI Imports
import { Button, Container, TextField, Paper, Grid } from '@material-ui/core';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';

function Supported() {
  const dispatch = useDispatch();
  const history = useHistory();

  // Sets up local state. If there is already a value in
  //  the store, it sets it as that (like when back button
  //  is used)
  const [supportNum, setSupportNum] = useState(
    useSelector((store) => store.feedbackReducer.supported)
  );
  const [errors, setErrors] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    // Double checks there are no errors
    if (!errors && supportNum) {
      // sends update request to store
      dispatch({
        type: 'UPDATE_FEEDBACK',
        payload: {
          property: 'supported',
          value: supportNum,
        },
      });

      // Moves user to next step
      history.push('/comments');
    } else {
      // change error status if validation fails
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

    setSupportNum(evt.target.value);
  }; // end handleChange

  const handleBack = () => {
    // Move user to the previous step
    history.push('/understanding');
  }; // end handleSubmit

  return (
    <Container maxWidth="sm">
      <Paper elevation={2} className="formContainer">
        <SurveySteps />
        <Grid container spacing={4} justify="center">
          <Grid item xs={12}>
            <h2>How well are you being supported?</h2>

            <form onSubmit={handleSubmit}>
              <TextField
                id="filled-number"
                label="Enter 1 - 5"
                type="number"
                variant="standard"
                min="1"
                max="5"
                name="supported"
                value={supportNum}
                onChange={(evt) => handleChange(evt)}
                error={errors ? true : null}
                helperText={errors ? 'Please enter a valid input' : null}
              />
            </form>
          </Grid>

          <Grid item sx={1}>
            <Button
              variant="contained"
              color="secondary"
              name="back"
              onClick={handleBack}
              disabled={errors ? true : null}
            >
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
              Next
              <ArrowForwardIos />
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default Supported;
