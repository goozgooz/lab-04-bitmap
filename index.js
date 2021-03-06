// file-worker module works on reading and then writing a file
// transofrmer file just works on using each of my transformers/
//index is the controller.  it'd file-worker . go to transform. then back to file-worker to write clear

'use strict';

const file = require('./lib/file-worker.js');
const transform = require('./lib/transformer.js');

let transformBitmap = function (inputFile, outputFile, transformType) {
  let dataBuffer = file.read(inputFile);
  let newBuffer = transformType(dataBuffer);
  file.write(newBuffer, outputFile);
};

transformBitmap('./_test_/asset/bitmap.bmp', './_test_/asset/bitmapTest.bmp', transform.black);
transformBitmap('./_test_/asset/house.bmp', './_test_/asset/houseTest.bmp', transform.black);