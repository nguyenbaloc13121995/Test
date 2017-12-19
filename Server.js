//Configure express
const express = require('express')
const app = express();
//Configure public
app.use(express.static('public'));
//Configure template engine ejs
app.set('view engine' , 'ejs');
app.set('views','./views');
//Configure body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//import Models
var {Members,Projects} = require('./connectDatabase.js');
//API Create Members
app.post('/createMember',(req,res)=>{
    var {name,numberphone,project} = req.body;
    Members.create({name:name,numberphone:numberphone,project:project})
        .then(member => res.json(member))
        .catch(err => console.log(`Error : ${err}`));
})
//API Create Project
app.post('/createProject',(req,res)=>{
    var {name,listmember} = req.body;
    Projects.create({name:name,listmember:listmember})
        .then(member => res.json(member))
        .catch(err => console.log(`Error : ${err}`));
})
//API Show Detail Project
app.get('/showProject',(req,res)=>{
    Projects.findAll()
        .then(member => res.json(member))
        .catch(err => console.log(`Error : ${err}`));
})
//Configure port
const port = process.env.PORT || 3000;
app.listen(3000 , ()=>console.log("Started Server"));