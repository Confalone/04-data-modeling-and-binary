'use strict';


module.exports = (buffer, transformation, callback) => {
  transform[transformation] && transform[transformation](buffer);

  return callback(null, buffer);

};


let transform = {};


transform.invert = (buffer) => {

  let numColors = buffer.numColors;

  let pixelArray = buffer.pixelArray;

  if(!numColors) {

    for(let i = 0; i < pixelArray.length; i++) {

      pixelArray[i] = 255 - pixelArray[i];
    }
  }

  if(numColors > 0) {
    let colorTable = buffer.colorTable;
    for(let j = 0; j < colorTable.length; j++) {
      colorTable[j] = 255 - colorTable[j];
    }
  }
  return(buffer);

};



transform.lighten = (buffer) => {

  let numColors = buffer.numColors;

  let pixelArray = buffer.pixelArray;

  let colorTable = buffer.colorTable;

  if(!numColors) {

    for(let i = 0; i < pixelArray.length; i++) {

      pixelArray[i] = Math.min(255, pixelArray[i] + 80);

    }
  }

  if(numColors > 0) {
    for(let j = 0; j < colorTable.length; j++) {

      colorTable[j] = Math.min(255, colorTable[j] + 80);

    }
  }

  return(buffer);

};


transform.darken = (buffer) => {

  let numColors = buffer.numColors;

  let pixelArray = buffer.pixelArray;

  let colorTable = buffer.colorTable;

  if(!numColors) {

    for(let i = 0; i < pixelArray.length; i++) {

      pixelArray[i] = Math.max(0, pixelArray[i] - 80);

    }
  }

  if(numColors > 0) {
    for(let j = 0; j < colorTable.length; j++) {

      colorTable[j] = Math.max(0, colorTable[j] - 80);

    }
  }

  return(buffer);

};



transform.random = (buffer) => {

  let numColors = buffer.numColors;

  let pixelArray = buffer.pixelArray;

  let colorTable = buffer.colorTable;

  let randomPixel = (min, max) => Math.random() * (max - min) + min;


  if(!numColors) {

    for(let i = 0; i < pixelArray.length; i++) {

      pixelArray[i] = randomPixel(0, 255);
      pixelArray[i + 1] = randomPixel(0, 255);
      pixelArray[i + 2] = randomPixel(0, 255);

    }
  }

  if(numColors > 0) {
    for(let j = 0; j < colorTable.length; j++) {

      colorTable[j] = randomPixel(0, 255);
      colorTable[j + 1] = randomPixel(0, 255);
      colorTable[j + 2] = randomPixel(0, 255);

    }
  }

  return(buffer);

};



