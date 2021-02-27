import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Review() {
  const feedback = useSelector((store) => store.feedbackReducer);
  const history = useHistory();

  const handleSubmit = () => {
    console.log('in Submit');
    console.log(feedback);
  };

  return (
    <div>
      <h2>Review Your Feedback</h2>
      <p>Feelings: {feedback.feeling}</p>
      <p>Understanding: {feedback.understanding}</p>
      <p>Support: {feedback.supported}</p>
      <p>Comments: {feedback.comments}</p>
      <button name="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Review;
