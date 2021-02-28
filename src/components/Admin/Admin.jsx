import { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.css';

import AdminRow from '../AdminRow/AdminRow';

// Martial-UI Imports
import {
  Paper,
  Container,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
} from '@material-ui/core';

function Admin() {
  // Get past feedback on page load
  useEffect(() => {
    getFeedback();
  }, []);

  // Local State to store past feedback
  const [previousFeedback, setPreviousFeedback] = useState([]);

  const getFeedback = () => {
    // Grabbing feedback from server
    axios
      .get('/api/feedback')
      .then((res) => {
        setPreviousFeedback(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log('Error in post', err);
      });
  }; // end getFeedback

  const handleDelete = (feedback) => {
    // Sending delete request to server
    axios
      .delete(`/api/feedback/${feedback.id}`)
      .then((res) => {
        getFeedback();
      })
      .catch((err) => {
        console.log('Error in post', err);
      });
  }; //end handleDelete

  return (
    <Container maxWidth="md">
      <h2>Admin Portal</h2>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Feeling</TableCell>
              <TableCell align="center">Comprehension</TableCell>
              <TableCell align="center">Support</TableCell>
              <TableCell align="center" style={{ width: '60%' }}>
                Comments
              </TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {previousFeedback.map((entry) => {
              return (
                <AdminRow
                  key={entry.id}
                  entry={entry}
                  handleDelete={handleDelete}
                />
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}

export default Admin;
