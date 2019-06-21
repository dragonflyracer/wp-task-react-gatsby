const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/pascal', function (req, res) {
    res.send("Le grand nabot excité qui joue et gérant d'estrade")
})

app.get('/david', function (req, res) {
  res.send('Le meilleur designer et animateur de la classe')
})

app.get('/jeanmarie', function (req, res) {
  console.log('work');
  res.send("La boussole morale, grand pédagogue que l'on élirait tous comme premier ministre")
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

/*
Le code ci-dessous marche du moins avec la page express car c'est la seule qui existe. Pour partir le
serveur faites allez dans le dossier express dans la ligne de commande, faites enter puis écriver littéralement
node app.js puis faites enter. Express pourra générer notre page. Ps. Il faut avoir node pour utiliser Express, mais 
c'est la même chose pour Gatsby. On devra ensuite intégrer la page et tenter de faire marcher notre JS.   

const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});

router.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/sitemap.html'));
});

//add the router
app.use(express.static(__dirname + '/View'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/Script'));
//Store all JS and CSS in Scripts folder.

app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');*/




