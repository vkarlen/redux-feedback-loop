import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Supported() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [supportNum, setSupportNum] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch({
      type: 'UPDATE_FEEDBACK',
      payload: {
        property: 'supported',
        value: supportNum,
      },
    });

    history.push('/comments');
  };

  const handleBack = () => {
    history.push('/understanding');
  };

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
