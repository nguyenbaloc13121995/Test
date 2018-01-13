var {Product} = require('../connectDatabase.js');
//API Create Project
// exports.createProjects=(req,res)=>{
//     var {name,listmember} = req.body;
//     Projects.create({name:name,listmember:listmember})
//         .then(member => res.json(member))
//         .catch(err => console.log(`Error : ${err}`));
// }

//API Show Detail Project
exports.showProduct=(req,res)=>{
    Product.findAll()
        .then(project => res.json(project))
        .catch(err => console.log(`Error : ${err}`));
}