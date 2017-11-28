
const express = require('express');
const app = express();

app.use('/views', express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.get('/', function (req, res) {
  res.redirect('views/index.html');
});
app.use('/',require('./controllers'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});