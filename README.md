<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Twitter Service!</title>

    <!-- Bootstrap -->
    <link href="/src/dist/css/bootstrap.css" rel="stylesheet">
    <link href="/src/dist/css/bootstrap-theme.css" rel="stylesheet">
    <link href="/src/dist/css/sticky.css" rel="stylesheet">
    <link href="/src/dist/css/ie10-viewport-bug-workaround.css" rel="stylesheet">
    <link href="/src/dist/css/blog.css" rel="stylesheet">
    <script src="/src/dist/js/ie-emulation-modes-warning.js"></script>

    <script>
        $.validator.setDefaults({
            submitHandler: function() {
                alert("submitted!");
            }
        });

        $().ready(function() {
            $("#twitterForm").validate({
                rules: {
                    ckey      : "required",
                    cSecret   : "required",
                    atSecret  : "required",
                    at        : "required"
                },
                messages: {
                    ckey    : "Please enter your Consumer Key (API Key)",
                    cSecret : "Please enter your Consumer Secret (API Secret)",
                    atSecret: "Please enter your Access Token",
                    at      : "Please enter your Access Token Secret"
                }
            });

            // propose username by combining first- and lastname
            $("#username").focus(function() {
                var firstname = $("#firstname").val();
                var lastname = $("#lastname").val();
                if (firstname && lastname && !this.value) {
                    this.value = firstname + "." + lastname;
                }
            });
        });
    </script>


    <style media="screen">
      ul{
        margin-left: 20px
      }
    </style>


</head>
  <body>


      <div class="blog-masthead">
        <div class="container">
          <nav class="blog-nav">
            <a class="blog-nav-item active" href="/">Home</a>
            <a class="blog-nav-item " href="/form">Twitter config</a>
            <a class="blog-nav-item" href="/twitterMessge">Twitter message</a>
            <a class="blog-nav-item" href="/twitterMessge">Twitter status messages</a>
            <a class="blog-nav-item " href="/about">About</a>
          </nav>
        </div>
      </div>


      <div class="container">

          <div class="row">
              <h1>Twitter sevice interface</h1>
          </div>

          <div class="row">
            <h4> This is an interface for <code><a href="https://github.com/aliaburas80/twitter_microservice" target="_blank"> twitter_microservice </a></code> using expressjs.  </h4>
          </div>

          <div class="row">
            <h4 class=''>
              <p>How to use:</p>
            </h4>
              <div class="row">
                <ul>
                  <li>You should have Twitter account, and have a <a href="https://apps.twitter.com/" target="_blank">twitter application app</a></li>
                  <li>Access to your app, click on <code>Keys and Access Tokens</code>
                    <a class="" data-toggle="modal" data-target="#myModal">checkout image</a>
                    <div id="myModal" class="modal fade" tabindex="-1" role="dialog">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-body">
                            <img src="img/1.jpg" class="img-responsive">
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>Now you have to cope <code>(Consumer Key(API Key), Consumer Secret(API Secret), Access Token and Access Token Secret.)</code> and fill them into fields in <a href="/form">Twitter config</a> page</li>
                  <li>Click on next button to complete</li>
                  <li>
                    Twitter message
                    <p>Adding your message, links and hashtages</p>
                    <ol>
                      <li><strong>First   Field : </strong> Add message with 30 letters max </li>
                      <li><strong>Secound Field : </strong> Add links that you want to share! separating with comma.  <span class="bg-warning"> We prefer 5 links at max</span> </li>
                      <li><strong>Third Field : </strong> Add hashtags like <code>#code#node#express</code></li>
                      <li>Click on start post</li>
                    </ol>
                  </li>
                  <li>New page will open to monitoring post messages.</li>
                </ul>
              </div>
          </div>

          <h4><p>Dependencies</p></h4>
          <div class="row">
            <ul>
              <li><code>bootstrap</code></li>
              <li><code>ejs</code></li>
              <li><code>express</code></li>
              <li><code>nodemon</code></li>
              <li><code>socket.io</code></li>
              <li><code>twitter-service</code></li>
              <li><code>body-parser</code></li>
            </ul>
          </div>



      </div>

      <footer class="footer">
          <div class="container">
              <div class="row">
                <p class="text-muted">Copyright &copy;2017 by Ali Abu Ras, <a href="https://github.com/aliaburas80/twitter_microservice" target="_blank"> Twitter service</a>, <a href="https://github.com/aliaburas80/express-twitter-interface" target="_blank">Expressjs interface for twitter service</a></p>
              </div>
          </div>
      </footer>

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
      <!-- Include all compiled plugins (below), or include individual files as needed -->
      <script src="/src/dist/js/bootstrap.min.js"></script>

  </body>
</html>
