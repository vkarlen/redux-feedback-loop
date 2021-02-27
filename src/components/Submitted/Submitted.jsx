import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Submitted() {
  const history = useHistory();
  const dispatch = useDispatch();

  const finishFeedback = () => {
    // Clearing feedback store
    dispatch({
      type: 'CLEAR_FEEDBACK',
    });

    // Sending user to the home page
    history.push('/');
  };

  return (
    <div>
      <h2>Thank you!</h2>
      <button onClick={finishFeedback}>Leave New Feedback</button>
    </div>
  );
}

export default Submitted;
