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
          <button name="Next">Next</button>
        </label>
      </form>
    </div>
  );
}

export default Supported;
