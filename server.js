let express =require('express');
let app     = express();
let ejs     = require('ejs')
let expressValidator = require('express-validator');
let bodyParser = require('body-parser');
let twitterValues = {};

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
     at      :req.body.at
   }
   //
   // // open html page to add all links and text you need to post to twitter.
   //  // after that open new page to post and montairing all process .
   // let tw = require('twitter-service');
   // tw({
   //     "twitter":[{
   //       "consumer_key"       :twitterValues.ckey,
   //       "consumer_secret"    :twitterValues.cSecret,
   //       "access_token"       :twitterValues.at,
   //       "access_token_secret":twitterValues.atSecret
   //     }],
   //     "links" :['http://tinyurl.com/y9keugnf'],
   //     "hashtags":'#hashTags',
   //     "message" :" "
   // });


   console.log(JSON.stringify(twitterValues));
    res.redirect('/twitterMessge');
});

app.get('/twitterMessge',(req,res)=>{
    res.render('twitterMessge')
});


app.post('/twitterMessge',(req,res)=>{
   console.log(req.body)
})

app.listen(3000,function(){
  console.log('Server start at port 3000');
});
