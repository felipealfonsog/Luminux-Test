var express = require('express');

// Create our mini app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static('public/RC01.2.1.js'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
