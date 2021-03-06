'use strict';

const fs = require('fs');

const file = module.exports = {};

// check to see if filepath exists -> then return that bitmap
file.read = function(input) {
  if(fs.existsSync(input)){
    console.log('file exists');
    return getBuffer(input);
  } else {
    console.log('file doesn\'t exist');
    return null;
  }
};

file.write = function(data, newFileName) {
  fs.writeFile(newFileName, data, (err) => {
    if(err){
      console.log(err);
      return;
    } console.log('transformation successful!');
  });
};

// private helper function 
let getBuffer = function(input) {
  let bitmap = fs.readFileSync(input);
  return bitmap;
};