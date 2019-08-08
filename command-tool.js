#! /usr/bin/env node

var request = require('request');
var parseArgs = require('minimist');
var fs = require('fs');

var url = 'http://www.filltext.com';

var argv = parseArgs((process.argv.slice(2)));
var input = argv["i"]; //rows=10&fname={firstName}&lname={lastName}&pretty=true
var output = argv["o"];

console.log(`${url}?${input}`);
if(input){
  request.get(`${url}?${input}`, function(err, resp){
    if(err) throw err;
    if(output){
      fs.writeFile(output, resp.body, function(err, d) {
        if(err) throw err;
        console.log("Saved the data to " + output)
      })
    }
    else{
      console.log(resp.body);
    }
  });
}
console.log(argv)