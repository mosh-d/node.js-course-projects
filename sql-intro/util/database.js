const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'cabon321MYSQL!', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
