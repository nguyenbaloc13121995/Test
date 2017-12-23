var {Members} = require('../connectDatabase.js');

exports.createMembers=(req,res)=>{
    var {name,numberphone,project} = req.body;
    Members.create({name:name,numberphone:numberphone,project:project})
        .then(member => res.json(member))
        .catch(err => console.log(`Error : ${err}`));
}