var config = require('./config');
var csv=require('csvtojson')
var CoffeeShop = require('./model/CoffeeShop')

const csvFilePath= config.file_data_source

module.exports.parse = function(){
  var result = []
  csv({noheader:true, trim:true})
  .fromFile(csvFilePath)
  .on('json',(jsonObj)=>{
    result.push(new CoffeeShop(jsonObj.field1, jsonObj.field2, jsonObj.field3, jsonObj.field4, jsonObj.field5))
  })
  .on('done',(error)=>{
  	console.log('end')
    console.log(result.length)
    // console.log(result)
    // return result
    return result
  })
  // return result
  // console.log(result.length)
}
