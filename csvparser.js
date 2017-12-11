const config = require('./config');
const csv=require('csvtojson')
var CoffeeShop = require('./model/CoffeeShop')

const csvFilePath='./locations.csv'

var result = []
csv({noheader:true, trim:true})
.fromFile(csvFilePath)
.on('json',(jsonObj)=>{
	// combine csv header row and csv line to a json object
	// jsonObj.a ==> 1 or 4
  // console.log(jsonObj);

  result.push(new CoffeeShop(jsonObj.field1, jsonObj.field2, jsonObj.field3, jsonObj.field4, jsonObj.field5))
})
.on('done',(error)=>{
	console.log('end')
  console.log(result.length)
  console.log(result)
})
