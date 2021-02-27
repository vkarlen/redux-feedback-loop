import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Feeling() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [feelingNum, setFeelingNum] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch({
      type: 'UPDATE_FEEDBACK',
      payload: {
        property: 'feeling',
        value: feelingNum,
      },
    });

    history.push('/understanding');
  };

  const handleBack = () => {
    history.push('/');
  };

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

export default Feeling;
