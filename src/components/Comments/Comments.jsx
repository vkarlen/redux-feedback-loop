import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Comments.css';

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
    dispatch({
      type: 'UPDATE_FEEDBACK',
      payload: {
        property: 'comments',
        value: newComments,
      },
    });

    history.push('/review');
  }; // end handleSubmit

  const handleBack = () => {
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
                multiline
                rowsMax={6}
                fullWidth
                value={newComments}
                onChange={(evt) => setNewComment(evt.target.value)}
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
