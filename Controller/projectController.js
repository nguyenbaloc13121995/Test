var {Projects} = require('../connectDatabase.js');
//API Create Project
exports.createProjects=(req,res)=>{
    var {name,listmember} = req.body;
    Projects.create({name:name,listmember:listmember})
        .then(member => res.json(member))
        .catch(err => console.log(`Error : ${err}`));
}

//API Show Detail Project
exports.showProjects=(req,res)=>{
    Projects.findAll()
        .then(member => res.json(member))
        .catch(err => console.log(`Error : ${err}`));
}