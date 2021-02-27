import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Review() {
  const feedback = useSelector((store) => store.feedbackReducer);
  const history = useHistory();

  const handleSubmit = () => {
    axios
      .post('/api/feedback', feedback)
      .then((res) => {
        history.push('/submit');
      })
      .catch((err) => {
        console.log('Error in post', err);
      });
  };

  const handleBack = () => {
    history.push('/comments');
  };

  return (
    <>
      <div>
        <h2>Review Your Feedback</h2>
        <p>Feelings: {feedback.feeling}</p>
        <p>Understanding: {feedback.understanding}</p>
        <p>Support: {feedback.supported}</p>
        <p>Comments: {feedback.comments}</p>
      </div>
      <div>
        <button name="back" onClick={handleBack}>
          Back
        </button>
        <button name="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
}

export default Review;
