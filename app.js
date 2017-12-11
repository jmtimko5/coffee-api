var express    = require('express')
var app        = express()
var bodyParser = require('body-parser')
var parser = require('./csvparser')
var config = require('./config')
var CoffeeShop = require('./model/CoffeeShop')


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

// var shops = parser.parse();

// console.log("SHOPS!!")
// console.log(shops)

console.log(parser.parse())

//API ROUTES ////////////////////////////////////////////////////
router.route('/coffeeshops')

    .post(function(req, res) {
      try {
        var shop = new CoffeeShop(req.body.id, req.body.name, req.body.address, req.body.latitude, req.body.longitude);
        var shopId = req.body.id
        res.json({ message: 'Coffeshop id:${shopId} created!' });
      }
      catch(err) {
          res.send(err);
      }
    })

    // get all the bears (accessed at GET http://localhost:8080/api/bears)
    .get(function(req, res) {
        try {
          console.log(shops)
          res.json({coffeeshops: shops})
        }
        catch(err) {
            res.send(err);
        }
    });

//END API ROUTES ////////////////////////////////////////////////

app.use(config.api_base, router);

app.listen(port);
console.log('Magic happens on port ' + port);

console.log("Parsing");

console.log(parser.parse());
