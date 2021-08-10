const express = require('express');
const router = express.Router();
const path = require('path');
const moment = require('moment');

router.get('/', (req, res, next) => res.sendFile(path.join(__dirname, '/index.html')));

router.get('/:date', (req, res, next) => {

  const formats = [
    'X',
    'MMMM D, YYYY',
    'MMMM D YYYY',
    'MMM D, YYYY',
    'MMM D YYYY',
    'D MMMM YYYY',
    'D MMM YYYY',
    'MMMM Do YYYY, h:mm:ss a',
    'llll'
  ];
  
  const date = moment(req.params.date, formats, true);
 
  let dateObj;

  if(date.isValid()){
    dateObj = {
      unix: Number(date.format('X')),
      utc: date.format('llll')
    };
  } else {
    dateObj = {
      unix: null,
      utc: null
    };
  }
  res.json(dateObj)
});

module.exports = router;
