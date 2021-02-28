# Feedback Loop

## Description

_Duration: 2 Day Sprint_

This is an app for gathering student feedback to better help gauge how they are feeling, how well they're understanding the material, and if they feel supported on a given day.

To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](www.heroku.com)

## Installation

Here is how you can get this up and running on your own machine:

1. Create a database named `prime_feedback`,
2. The queries in the `data.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries,
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage

1. Review the rating scale provided on the home page. When youre ready, click 'Start this Survey' to begin giving your feedback.
2. The survey will ask you a series of questions. Please provide a rating between 1 and 5. The first 3 questions are required but the comments are optional. If you wish to change an answer, you may use the back button or the stepper at the top of the page to jump back.
3. Once you click finish, you wil be given a chance to review your answers. Once they are acceptable, click submit to submit your feedback.
4. For the Admin: go to /admin to review past feedback given. To remove an entry, simply click the trash can at the end of the line.

## Built With

- HTML/CSS
- Material UI
- JavaScript
- Node
- Axios
- React
- Redux

## Acknowledgement

Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. (Thank your people)

## Support

If you have suggestions or issues, please email me at [vada.karlen@gmail.com](vada.karlen@gmail.com)
