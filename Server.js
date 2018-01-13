//Configure express
const express = require('express')
const app = express();
//Configure public
app.use(express.static("public"));
//Configure template engine ejs
app.set("view engine","ejs")
app.set("views","./views")
//Configure body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//import Routes
const productRoutes = require('./Route/productRoute');
//Route API
app.use('/api',productRoutes);
//config appGet
var appGet = function(req,res){
	res.render('index')
}
app.get("/",appGet)
app.get("/product-list",appGet)
app.get("/add/product",appGet)
app.get('/product/:id/edit',appGet)
//Configure port
const port = process.env.PORT || 3000;
app.listen(3000 , ()=>console.log("Started Server"));
//Catch error link
app.get('*',(req,res)=>{
	res.status(404).json('Không tìm thấy đường dẫn Đường dẫn nhập sai');
});
