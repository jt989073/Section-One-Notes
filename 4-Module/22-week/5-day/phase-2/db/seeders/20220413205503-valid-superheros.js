'use strict';

const { Superhero } = require('../models');

// DON'T SPEND ALL YOUR TIME MAKING REAL SEED DATA!!!
// Try to just spend only 5 minutes to create the seed data for testing
// You do not need to put in real superhero data as values! The data values
  // just need to make sense based from the migration and model files.

const validSuperheros = [
  // Your code here 
  {
    name: 'CAPTAIN AMERICA',
    alias: 'Steve Rogers',
    affiliation: 'Avengers',
    heightCm: 180,
    isMutant: false,
    race: 'human',
    universe: 'Marvel',
    releaseYear: 1985
  },
  {
    name: 'CAPTAIN AMESFDFSDRICA',
    alias: 'Steve Rofdfjfjgers',
    affiliation: 'X-Men',
    heightCm: 180,
    isMutant: true,
    race: 'human',
    universe: 'Marvel',
    releaseYear: 1990
  },
  {
    name: 'CAPTAIN AMERALDKFJMLOICA',
    alias: 'Steve RoASDFASDFgers',
    affiliation: 'Avengers',
    heightCm: 180,
    isMutant: false,
    race: 'human',
    universe: 'Marvel',
    releaseYear: 1941
  },
  {
    name: 'CAPTAIN AMERICA THREE',
    alias: 'Steve Rogers as well',
    affiliation: 'Avengers',
    heightCm: 180,
    isMutant: false,
    race: 'human',
    universe: 'Marvel',
    releaseYear: 2021
  },
  {
    name: 'CAPTAIN AMERICA SOMETHING',
    alias: 'Steve Rogers Is a great alias',
    affiliation: 'Avengers',
    heightCm: 180,
    isMutant: false,
    race: 'human',
    universe: 'Marvel',
    releaseYear: 2018
  },
];

module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await Superhero.bulkCreate(validSuperheros, {
        validate: true,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  },

  async down (queryInterface, Sequelize) {
    for (let superheroInfo of validSuperheros) {
      try {
        await Superhero.destroy({
          where: superheroInfo
        });
      } catch (err) {
        console.log(err);
        throw err;
      }
    }
  },
  // DO NOT MODIFY BELOW (for testing purposes):
  validSuperheros,
};
