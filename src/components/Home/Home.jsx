import { useHistory } from 'react-router-dom';
import './Home.css';

// Martial-UI Imports
import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Paper,
} from '@material-ui/core';

function Home() {
  const history = useHistory();

  return (
    <Container maxWidth="xs">
      <h2>Rating Scale</h2>
      <Paper id="ratingContainer">
        <Table size="small">
          <TableBody>
            <TableRow>
              <TableCell align="right">5</TableCell>
              <TableCell>Absolutely killin' it!</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="right">4</TableCell>
              <TableCell>Feeling pretty solid.</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="right">3</TableCell>
              <TableCell>Think I'm doing okay.</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="right">2</TableCell>
              <TableCell>This is pretty rough.</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="right">1</TableCell>
              <TableCell>Help me Obi-Wan Kenobi!!</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>

      <Button
        variant="contained"
        color="primary"
        name="start"
        onClick={() => history.push('/feeling')}
        id="startBtn"
      >
        Start the Survey!
      </Button>
    </Container>
  );
}

export default Home;
