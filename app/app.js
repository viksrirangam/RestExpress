var express = require('express')
,store = require('./data.json')
,bodyParser = require('body-parser')
,StoreHelper = require("./storehelper");

/**
* Create express app.
*/
var app = express();

/**
* Serve your code
*/
app.use(express.static('public'));

/**
* Handles posted data
*/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
* Configuration
*/
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('view options', { layout: false });

/**
* Routes
*/
app.get('/', function (req, res) {
	res.render('index');
});

/**
* Api Routes
*/
var apirouter = express.Router();
var helper = new StoreHelper();

apirouter.get('/employees', function (req, res){
	//return all employees
	res.json(store.employees);
})
.post('/employees', function (req, res){
	//create a new employees
	var item = {"name": req.body.name, "id": helper.getid(store.employees)};
	store.employees.push(item);
	res.json(201, { id: item.id, url:'/api/employees/:'+item.id });
});

apirouter.get('/employees/:id', function (req, res) {
	//return employee by name
	var item = helper.find(store.employees, "id", req.params.id);
	if(item)
		res.json(item);
	else
		res.json(404, { error: 'not found!!' });
})
.put('/employees/:id', function (req, res){
	//update employee by id
	var item = helper.find(store.employees, "id", req.params.id);
	if(item){
		//update entity
		item.name=req.body.name;
		res.json(200, { url:'/api/employees/:'+item.id });
	}
	else
		res.json(404, { error: 'not found!!' }); //create??
})
.delete('/employees/:id', function (req, res){
	//delete employee by id
	var item = helper.find(store.employees, "id", req.params.id);
	if(item){
		helper.remove(store.employees, item);
		res.send(200);
	}else
		res.json(404, { error: 'not found!!' });
})
.patch('/employees/:id', function (req, res){
	//partial update employee by id
	var item = helper.find(store.employees, "id", req.params.id);
	if(item){
		//update entity
		if(req.body.name)
			item.name=req.body.name;
		res.json(200, { url:'/api/employees/:'+item.id });
	}
	else
		res.json(404, { error: 'not found!!' });
});

app.use('/api', apirouter);

/**
* Listen
*/
app.listen(3000);