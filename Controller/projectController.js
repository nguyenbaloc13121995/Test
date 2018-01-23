var { Product } = require('../connectDatabase.js');

//API Create Project
// exports.createProjects=(req,res)=>{
//     var {name,listmember} = req.body;
//     Projects.create({name:name,listmember:listmember})
//         .then(member => res.json(member))
//         .catch(err => console.log(`Error : ${err}`));
// }

//API Show Detail Product
exports.showProduct = (req, res) => {
    Product.findAll()
        .then(project => res.json(project))
        .catch(err => console.log(`Error : ${err}`));
}
//API ADD
exports.addProduct = (req, res) => {
    var { name, price, status } = req.body
    Product.create({
        name: name,
        price: price,
        status: status
    })
        .then(project => res.json(project))
        .catch(err => console.log(`Error : ${err}`));
}
//API UPDATE
exports.updateProduct = (req, res) => {
    var { id } = req.params
    var { name, price, status } = req.body
    Product.update({
        name: name,
        price: price,
        status: status
    }, { where: { id: id } })
        .then(project => res.json(project))
        .catch(err => console.log(`Error : ${err}`));
}

exports.destroyProduct = (req, res) => {
    var { id } = req.params
    Product.destroy({ where: { id: id } })
        .then(_ => res.send("Deleted Success"))
        .catch(err => console.log(err))
}

exports.getProductById =(req,res)=>{
    var {id} = req.params
    Product.findOne({where :{id:id}})
    .then(data=>res.json(data))
    .catch(err=>console.log(err))
}