var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var CHARACTERS_JSON = path.join(__dirname, 'data/characters.json');

app.get('/', function(req,res) {
  res.sendfile('public/index.html');
});

app.get('/api/region_hidrografica', function(req, res){
  fs.readFile(CHARACTERS_JSON, function(err, data){
    if(err) process.exit(1);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(JSON.parse(data));
  })
})

// app.get('/api/characters/students', function(req, res){
//   fs.readFile(CHARACTERS_JSON, function(err, data){
//     if(err) process.exit(1);
//     json = JSON.parse(data);
//     students_array = [];
//     for(character of json){
//       if(character.hogwartsStudent == true){
//       students_array.push(character);
//       }
//     }
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.json(students_array);
//   })
// })





app.use(express.static('public'));

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
