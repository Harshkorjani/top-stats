const express = require('express');
const { exec } = require('child_process');
const app = express();

app.get('/', (req, res) => {
  exec('top -b -n 1', (err, stdout, stderr) => {
    if (err) {
      res.send('Error: ' + err.message);
      return;
    }
    res.type('text/plain');
    res.send(stdout);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server running at http://localhost:${PORT}');
});