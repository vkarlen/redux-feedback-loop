import moment from 'moment';
import axios from 'axios';

// Martial-UI Imports
import { Button, TableCell, TableRow } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

function AdminRow({ entry, handleDelete }) {
  return (
    <TableRow>
      <TableCell align="center">{moment(entry.date).format('L')}</TableCell>
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
}

export default AdminRow;
