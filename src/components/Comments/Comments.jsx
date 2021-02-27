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
          <button name="Next">Next</button>
        </label>
      </form>
    </div>
  );
}

export default Comments;
