import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Comments() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [newComments, setUnderstandNum] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch({
      type: 'UPDATE_FEEDBACK',
      payload: {
        property: 'comments',
        value: newComments,
      },
    });

    history.push('/review');
  };

  const handleBack = () => {
    history.push('/supported');
  };

  return (
    <div>
      <h2>Any comments you want to leave?</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Comments
          <input
            type="text"
            name="comments"
            value={newComments}
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

export default Comments;
