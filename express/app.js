const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/pascal', function (req, res) {
    console.log('work');
    res.send('Comme il est cool')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


