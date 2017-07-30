let express =require('express');
let app     = express();
let ejs     = require('ejs')

//let cookieParser = require('cookie-parser');
let expressValidator = require('express-validator');
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// in latest body-parser use like below.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator()); // Add this after the bodyParser middlewares!

app.set('view engine', 'ejs');



app.get('/', (req,res)=>{
  res.send('hello word');
});


app.get('/form',function(req,res){
   res.render('form')
});

app.post('/form',function(req,res){
   console.log(req.body) //you will get your data in this as object.
   res.send('post');
});


// app.use(express.static(__dirname + '/src'));
console.log(__dirname+'/views/form.ejs');
//app.use('/form',express.static(__dirname+'/views/form'));

app.listen(3000,function(){
  console.log('Server start at port 3000');
});


/*
Validation
req.checkBody('name', 'Invalid name').isAlpha();
req.checkBody('age', 'Invalid age').notEmpty().isInt();


To run the validation we call req.validationErrors(). This returns an array of error objects (or false if there are no errors) and is typically used like this

var errors = req.validationErrors();
if (errors) {
    // Render the form using error information
}
else {
   // There are no errors so perform action with valid data (e.g. save record).
}

example of error {param: 'name', msg: 'Invalid name', value: '<received input>'}






*/
