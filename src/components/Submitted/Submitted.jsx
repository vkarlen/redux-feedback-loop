import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './Submitted.css';

// Martial-UI Imports
import { Button } from '@material-ui/core';

function Submitted() {
  const history = useHistory();
  const dispatch = useDispatch();

  const restartFeedback = () => {
    // Clearing feedback store
    dispatch({
      type: 'CLEAR_FEEDBACK',
    });

    // Sending user to the home page
    history.push('/');
  }; // end restartFeedback

  return (
    <div>
      <h2>Thank you for your feedback!</h2>
      <Button
        variant="contained"
        color="primary"
        name="restart"
        onClick={restartFeedback}
        id="restartBtn"
      >
        Leave New Feedback
      </Button>
    </div>
  );
}

export default Submitted;
