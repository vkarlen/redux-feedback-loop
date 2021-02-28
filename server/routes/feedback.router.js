const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
  console.log('req', req.body);
  const feedback = req.body;

  const sqlScript = `INSERT INTO "feedback"
  ("feeling", "understanding", "support", "comments")
  VALUES ($1, $2, $3, $4);`;

  pool
    .query(sqlScript, [
      feedback.feeling,
      feedback.understanding,
      feedback.supported,
      feedback.comments,
    ])
    .then((dbRes) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('Error in DB post', err);
      res.sendStatus(500);
    });
});

router.get('/', (req, res) => {
  pool
    .query('SELECT * FROM "feedback" ORDER BY "date" DESC;')
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch((err) => {
      console.log('Error in DB get', err);
      res.sendStatus(500);
    });
});

router.delete('/:id', (req, res) => {
  console.log('in delete');
  const feedbackID = req.params.id;
  const sqlScript = `DELETE FROM "feedback" WHERE "id"=$1`;

  pool
    .query(sqlScript, [feedbackID])
    .then((dbRes) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('Error in delete', err);
      res.sendStatus(500);
    });
});

module.exports = router;
