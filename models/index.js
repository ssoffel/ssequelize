const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false
});

const User = db.define('user', {
 name: {
   type: Sequelize.STRING,
   allowNUll: false
 },
 email: {
   type: Sequelize.STRING,
   allowNull: false,
   validate: {
     isEmail: true
   }
 }
});

const Page = db.define('page', {
 title: {
   type: Sequelize.STRING,
   allowNull: false
 },
 slug: {
   type: Sequelize.STRING,
   allowNull: false
 },
 content: {
   type: Sequelize.TEXT,
   allowNull: false
 },
 status: {
   type: Sequelize.ENUM('open', 'closed')
 }
});





module.exports = {
  User: User, Page: Page, db: db
}
