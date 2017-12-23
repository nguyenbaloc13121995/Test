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
const memberRoutes = require('./Route/memberRoute');
const projectRoutes = require('./Route/projectRoute');
//Route API
app.use('/api',memberRoutes)
app.use('/api',projectRoutes);
app.get('/',(req,res)=>{
	res.render('index');
});
//Configure port
const port = process.env.PORT || 3000;
app.listen(3000 , ()=>console.log("Started Server"));
//Catch error link
app.get('*',(req,res)=>{
	res.status(404).json('Không tìm thấy đường dẫn Đường dẫn nhập sai');
});
