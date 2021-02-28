import { useEffect } from 'react';
import axios from 'axios';

function Admin() {
  useEffect(() => {
    getFeedback();
  }, []);

  const getFeedback = () => {
    console.log('in get');

    axios
      .get('/api/feedback')
      .then((res) => {
        console.log('feedback', res);
      })
      .catch((err) => {
        console.log('Error in post', err);
      });
  }; // end getFeedback
  return <div>Admin</div>;
}

export default Admin;
