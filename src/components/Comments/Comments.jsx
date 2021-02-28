import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import SurveySteps from '../SurveySteps/SurveySteps';

// Martial-UI Imports
import { Button, Container, TextField, Paper, Grid } from '@material-ui/core';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';

function Comments() {
  const dispatch = useDispatch();
  const history = useHistory();

  // Sets up local state. If there is already a value in
  //  the store, it sets it as that (like when back button
  //  is used)
  const [newComments, setNewComment] = useState(
    useSelector((store) => store.feedbackReducer.comments)
  );

  const handleSubmit = (evt) => {
    evt.preventDefault();

    // Sends update request to the store
    dispatch({
      type: 'UPDATE_FEEDBACK',
      payload: {
        property: 'comments',
        value: newComments,
      },
    });

    // Move user to next step
    history.push('/review');
  }; // end handleSubmit

  const handleBack = () => {
    // Move user to previous step
    history.push('/supported');
  }; // end handleBack

  return (
    <Container maxWidth="sm">
      <Paper elevation={2} className="formContainer">
        <SurveySteps />
        <Grid container spacing={4} justify="center">
          <Grid item xs={12}>
            <h2>Any comments you want to leave?</h2>
            <form onSubmit={handleSubmit}>
              <TextField
                id="standard-multiline-flexible"
                label="Type here"
                type="text"
                name="comments"
                rowsMax={6}
                value={newComments}
                onChange={(evt) => setNewComment(evt.target.value)}
                multiline
                fullWidth
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
              <ArrowBackIos />
              Back
            </Button>
            &nbsp;
            <Button
              variant="contained"
              color="primary"
              name="next"
              onClick={handleSubmit}
            >
              Finish
              <ArrowForwardIos />
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default Comments;
