import { useState, useEffect } from 'react';
import axios from 'axios';
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
  TablePagination,
} from '@material-ui/core';

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
  }; //end handleDelete

  return (
    <Container maxWidth="md">
      <h2>Admin Portal</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Feeling</TableCell>
            <TableCell>Comprehension</TableCell>
            <TableCell>Support</TableCell>
            <TableCell>Comments</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {previousFeedback.map((entry) => {
            return (
              <TableRow key={entry.id}>
                <TableCell align="center">{entry.feeling}</TableCell>
                <TableCell align="center">{entry.understanding}</TableCell>
                <TableCell align="center">{entry.support}</TableCell>
                <TableCell>{entry.comments}</TableCell>
                <TableCell align="center">
                  <Button onClick={() => handleDelete(entry)}>Delete</Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Container>
  );
}

export default Admin;
