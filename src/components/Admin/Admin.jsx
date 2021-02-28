import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import './Admin.css';

// Martial-UI Imports
import {
  Button,
  Paper,
  Container,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';

function Admin() {
  useEffect(() => {
    getFeedback();
  }, []);

  const [previousFeedback, setPreviousFeedback] = useState([]);

  const getFeedback = () => {
    console.log('in get');

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
    console.log(feedback.id);

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
                <TableRow key={entry.id}>
                  <TableCell align="center">
                    {moment(entry.date).format('L')}
                  </TableCell>
                  <TableCell align="center">{entry.feeling}</TableCell>
                  <TableCell align="center">{entry.understanding}</TableCell>
                  <TableCell align="center">{entry.support}</TableCell>
                  <TableCell>{entry.comments}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      color="secondary"
                      name="delete"
                      onClick={() => handleDelete(entry)}
                      style={{ width: '20px' }}
                    >
                      <Delete />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}

export default Admin;
