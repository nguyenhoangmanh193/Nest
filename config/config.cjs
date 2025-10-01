require('dotenv').config();

module.exports = {
  development: {
    url: process.env.DATABASE_URL,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
};



// {
//   "development": {
//     "url": "postgresql://neondb_owner:npg_so7e3iNSUjzL@ep-steep-rice-a11ssk3t-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
//     "dialect": "postgres",
//     "dialectOptions": {
//       "ssl": {
//         "require": true,
//         "rejectUnauthorized": false
//       }
//     }
//   }
// }