// const exec = require('child_process').exec;
// exec('CMD.exe /C "TASKKILL /F /IM node.exe"')
let express = require('express');
let app =require('express')();
let http = require('http');
let ejs     = require('ejs');
let bodyParser = require('body-parser');
let twitterValues = {};
let events    = require('twitter-service/src/events/Event');
let PORT = process.env.PORT || 8080;
//let server = require('http').Server(app);

let server = http.createServer(app);

let io = require('socket.io')(server);
io.set('transports', ['xhr-polling']);
io.set('polling duration', 10);

server.listen(PORT,function(){
    console.log(`Server work at localhot: ${PORT} `);
});

app.use(express.static((__dirname, 'views/')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
  process.emit('stopPost')
  res.send('hello word');
});

app.get('/form',(req,res)=>{
  process.emit('stopPost')
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
                    links      :'',
                    hashtags   :''
                 }
   }
    res.redirect('/twitterMessge');
});

app.get('/twitterMessge',(req,res)=>{
    process.emit('stopPost')
    res.render('twitterMessge',{name:'Ali'})
});

app.post('/twitterMessge',(req,res)=>{
    process.emit('allowPost')
    console.log(req.body);
    twitterValues.message.postMessage = req.body.message;
    twitterValues.message.links = req.body.links;
    twitterValues.message.hashtags = req.body.hashtages;

    console.log(JSON.stringify(twitterValues));
    let twiter = require('./routes/createTwitterServer');
    twiter(twitterValues);
    //res.redirect('/twitterPostStatus');
    res.sendFile(__dirname + '/views/twitterPostStatus.html');
});

app.get('/about',(req,res)=>{
    res.sendFile(__dirname + '/views/about.html');
})

io.on('connection', function (socket) {
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
