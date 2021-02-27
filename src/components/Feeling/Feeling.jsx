import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Feeling() {
  const dispatch = useDispatch();
  const history = useHistory();

  // Sets up local state. If there is already a value in
  //  the store, it sets it as that (like when back button
  //  is used)
  const [feelingNum, setFeelingNum] = useState(
    useSelector((store) => store.feedbackReducer.feeling)
  );

  const handleSubmit = (evt) => {
    evt.preventDefault();

    // Validates input before sending to the store
    if (feelingNum && feelingNum >= 1 && feelingNum <= 5) {
      dispatch({
        type: 'UPDATE_FEEDBACK',
        payload: {
          property: 'feeling',
          value: feelingNum,
        },
      });

      history.push('/understanding');
    } else {
      alert('Please enter a number between 1 and 5.');
    }
  }; // end handleSubmit

  return (
    <div>
      <h2>How are you feeling today?</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Feeling?
          <input
            type="number"
            min="1"
            max="5"
            name="feeling"
            value={feelingNum}
            onChange={(evt) => setFeelingNum(evt.target.value)}
            required
          ></input>
        </label>
      </form>
      <div>
        <button name="next" onClick={handleSubmit}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Feeling;
