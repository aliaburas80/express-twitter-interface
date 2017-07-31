let express =require('express');
let app     = express();
let ejs     = require('ejs')

//let cookieParser = require('cookie-parser');
let expressValidator = require('express-validator');
let bodyParser = require('body-parser');

app.use(express.static((__dirname, 'views/')));

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded());
// in latest body-parser use like below.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator()); // Add this after the bodyParser middlewares!

app.set('view engine', 'ejs');



app.get('/', (req,res)=>{
  res.send('hello word');
});

app.get('/form',(req,res)=>{
   res.render('form');
});

app.post('/form',(req,res)=>{
    // req.checkBody('ckey'     , 'Invalid name').notEmpty().isAlpha();
    // req.checkBody('cSecret'  , 'Invalid age').notEmpty().isAlpha();
    // req.checkBody('atSecret' , 'Invalid age').notEmpty().isAlpha();
    // req.checkBody('at'       , 'Invalid age').notEmpty().isAlpha();
  //  res.setHeader('Content-Type', 'application/json');
   // console.log('<-ALI->');
  console.log(JSON.stringify(req.body));
   res.render('twitterMessge')


//{"ckey":"ergfddsaf","cSecret":"adfadsf","atSecret":"asdadsff","at":"asadff","submit":""} // send these to init for twitter server to start

});

//app.use('/form',express.static(__dirname+'/views/form'));
app.listen(3000,function(){
  console.log('Server start at port 3000');
});


/*
Validation


To run the validation we call req.validationErrors(). This returns an array of error objects (or false if there are no errors) and is typically used like this



example of error {param: 'name', msg: 'Invalid name', value: '<received input>'}






*/
