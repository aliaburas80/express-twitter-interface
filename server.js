// const exec = require('child_process').exec;
// exec('CMD.exe /C "TASKKILL /F /IM node.exe"')
let express = require('express');
let app =require('express')();
let ejs     = require('ejs');
let expressValidator = require('express-validator');
let bodyParser = require('body-parser');
let twitterValues = {};
let events    = require('twitter-service/src/events/Event');
let PORT = process.env.PORT || 8080;

let server = require('http').Server(app);
let io = require('socket.io')(server);

server.listen(PORT,function(){
    console.log(`Server work at localhot: ${PORT} `);
});


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
    res.render('twitterMessge',{name:'Ali'})
});

app.post('/twitterMessge',(req,res)=>{
   console.log(req.body);
    twitterValues.message.postMessage = req.body.message;
    twitterValues.message.links = req.body.links;
    console.log(JSON.stringify(twitterValues));
    let twiter = require('./routes/createTwitterServer');
    twiter(twitterValues);
    //res.redirect('/twitterPostStatus');
    res.sendFile(__dirname + '/views/twitterPostStatus.html');
});



io.on('connection', function (socket) {
  console.log('done');
  socket.on('private message', function (from, msg) {
    console.log('I received a private message by ', from, ' saying ', msg);
  });

  socket.on('disconnect', function () {
    io.emit('user disconnected');
  });
});

process.on('post', (message) => {
  io.emit('this', 'post',message);
});

process.on('errors', (message) => {
  io.emit('this', 'errors',message);
});

// TODO
/*

Change the routs to be only one rout and then make ajax to keep print twitter service.
*/
