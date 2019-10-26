
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.disable('x-powered-by');
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.get('/save-data', (req, res) => {
  const SAVE_DATA_MODE = {
    ON: 'on',
    OFF: 'off'
  };

  const requestSaveData = req.headers['save-data'];
  const saveData = requestSaveData === SAVE_DATA_MODE.ON;

  console.log('[server save-data route] requestSaveData => ', requestSaveData);
  console.log('[server save-data route] saveData => ', saveData);

  res.status(200).json({saveData});
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(
  process.env.PORT || 5000,
  () => {
    console.log(`serving on http://localhost:5000`);
  }
);