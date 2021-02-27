import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Comments() {
  const dispatch = useDispatch();
  const history = useHistory();

  // Sets up local state. If there is already a value in
  //  the store, it sets it as that (like when back button
  //  is used)
  const [newComments, setNewComment] = useState(
    useSelector((store) => store.feedbackReducer.comments)
  );

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
  }; // end handleSubmit

  const handleBack = () => {
    history.push('/supported');
  }; // end handleBack

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
            onChange={(evt) => setNewComment(evt.target.value)}
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
