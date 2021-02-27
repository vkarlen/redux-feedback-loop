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
          <button>Next</button>
        </label>
      </form>
    </div>
  );
}

export default Feeling;
