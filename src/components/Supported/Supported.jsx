import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Supported() {
  const dispatch = useDispatch();
  const history = useHistory();

  // Sets up local state. If there is already a value in
  //  the store, it sets it as that (like when back button
  //  is used)
  const [supportNum, setSupportNum] = useState(
    useSelector((store) => store.feedbackReducer.supported)
  );

  const handleSubmit = (evt) => {
    evt.preventDefault();

    // Validates input before sending to the store
    if (supportNum && supportNum >= 1 && supportNum <= 5) {
      dispatch({
        type: 'UPDATE_FEEDBACK',
        payload: {
          property: 'supported',
          value: supportNum,
        },
      });

      history.push('/comments');
    } else {
      alert('Please enter a number between 1 and 5.');
    }
  }; // end handleSubmit

  const handleBack = () => {
    history.push('/understanding');
  }; // end handleBack

  return (
    <div>
      <h2>How well are you being supported?</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Support?
          <input
            type="number"
            min="1"
            max="5"
            name="supported"
            value={supportNum}
            onChange={(evt) => setSupportNum(evt.target.value)}
            required
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

export default Supported;
