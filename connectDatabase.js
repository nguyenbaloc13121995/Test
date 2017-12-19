//require sequelize , ConfigDatabase
const sequelize = require('sequelize');
const dbConfig = require('./ConfigDatabase/configDatabase.js');
//Config Model
const modelConfig=({
    define:{
        freezeTableName: true,
        paranoid: true
    }
})
//Combine dbConfig and modelConfig 
const db = new sequelize(Object.assign(dbConfig,modelConfig));
//Import Models
const Members = db.import('./Models/Members.js');
const Projects = db.import('./Models/Projects.js');
//Association Models
Members.belongsToMany(Projects, {through: 'UserProject'});
Projects.belongsToMany(Members, {through: 'UserProject'});
//Authenticate
db.authenticate()
    .then(_=>console.log('Connection Successed'))
    .catch(err=>console.log(`Connection Error : ${err.message}`))
//Excute Data
db.sync()
    .catch(err => console.log(err.message))
//Export Models
module.exports = db.models;
