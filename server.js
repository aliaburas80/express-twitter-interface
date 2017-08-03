// const exec = require('child_process').exec;
// exec('CMD.exe /C "TASKKILL /F /IM node.exe"')


let express =require('express');
let app     = express();
let ejs     = require('ejs');
let expressValidator = require('express-validator');
let bodyParser = require('body-parser');
let twitterValues = {};
let events    = require('twitter-service/src/events/Event');
let PORT = process.env.PORT || 3000;

app.use(express.static((__dirname, 'views/')));
app.use(bodyParser.json());
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
   twitterValues = {
     ckey    :req.body.ckey,
     cSecret :req.body.cSecret,
     atSecret:req.body.atSecret,
     at      :req.body.at,
     message    :{
                    postMessage:'',
                    links      :''
                 }
   }
    res.redirect('/twitterMessge');
});

app.get('/twitterMessge',(req,res)=>{
    res.render('twitterMessge')
});

app.post('/twitterMessge',(req,res)=>{
   console.log(req.body);
    twitterValues.message.postMessage = req.body.message;
    twitterValues.message.links = req.body.links;
    console.log(JSON.stringify(twitterValues));
    let twiter = require('./routes/createTwitterServer');
    twiter(twitterValues);
    res.redirect('/twitterPostStatus')
});

app.get('/twitterPostStatus',(req,res,next)=>{
        // res.writeHead(200, {'Content-Type': 'text/plain'});
        // try{
        //     res.send('twitterPostStatus');
        // }catch(e){
        //     console.log('Error in set header');
        // }

//     //if(!res.headersSent)
//         //res.writeHead(200, {'Content-Type': 'text/plain'});
//
    process.on('post', (message) => {
        res.render('twitterPostStatus',{name:message});
    });
    process.on('errors', (message) => {
        res.render('twitterPostStatus',{name:message});
    });
//
//
 });

app.listen(PORT,function(){
    console.log(`Server work at localhot: ${PORT} `);
});


// TODO
/*

Change the routs to be only one rout and then make ajax to keep print twitter service.
*/