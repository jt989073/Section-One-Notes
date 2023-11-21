const express = require('express');
const router = express.Router();

const { Player } = require('../db/models');

router.get('/', async (req, res) => {
  let { firstName, number, page, size } = req.query;
  
  page = +page
  size = +size
  console.log(firstName)

  if(Number.isNaN(page) || page <= 0) page = 1
  if(Number.isNaN(size) || size <= 0) size = 2

  if(size > 10) size = 10
 
  const where = {};
  if (firstName && firstName !== '') {
    where.firstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
  } else if (firstName === '') {
    res.status(400);
    return res.json({
      errors: [
        { message: 'firstName filter should not be empty' }
      ]
    });
  }

  if (number) {
    if (!isNaN(number) && number >= 0) {
      where.number = parseInt(number);
    } else {
      res.status(400);
      return res.json({
        errors: [
          { message: 'number filter should be a number greater or equal to 0' }
        ]
      });
    }
  }

  const players = await Player.findAll({
    where,
    limit: size,
    offset: (page - 1) * size
  });
  return res.json({
    players,
    page,
    size
  });
});

module.exports = router;
