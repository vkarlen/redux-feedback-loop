import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

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
    <div>
      <h2>How well are you understanding the content?</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Understanding?
          <input
            type="number"
            min="1"
            max="5"
            name="understanding"
            value={understandNum}
            onChange={(evt) => setUnderstandNum(evt.target.value)}
          ></input>
        </label>
      </form>
      <div>
        <button name="back" onClick={handleBack}>
          Back
        </button>
        <button name="next" onClick={handleSubmit}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Understanding;
