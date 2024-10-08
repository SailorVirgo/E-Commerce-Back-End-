require('dotenv').config();
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';


const sequelize = new Sequelize(
 process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PW,
  {
    host: 'localhost',
    dialect: "postgres"
  }
);

module.exports = sequelize;


// require('dotenv').config();

// const Sequelize = require('sequelize');

// const sequelize = process.env.DB_URL
//   ? new Sequelize(process.env.DB_URL)
//   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//       host: 'localhost',
//       dialect: 'postgres',
//       dialectOptions: {
//         decimalNumbers: true,
//       },
//     });

// module.exports = sequelize;
