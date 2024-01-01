const fs = require('fs');

const express = require('express');
const app = express();

// app.get('/', (req, res) => {
//   res
//     .status(200)
//     .json({ Message: 'Hello from the server side!', app: 'Natorus' });
// });

// app.post('/', (req, res) => {
//   res.send('You can post to this enpoint...');
// });

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours,
    },
  });
});

const port = 3000;
app.listen(port, () => {
  console.log('Server is running on port 3000');
});
