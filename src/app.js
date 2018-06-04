'use strict';

const fs = require('fs');


module.exports = exports = {};

exports.readFile = (path, callback) => {

  fs.readFile(path, (err, data) => {
    if(err) {
      callback(err);
    }
    else {
      callback(null, data);
    }
  });
};


exports.writeFile = (file, buffer, callback) => {

  fs.writeFile(file, buffer, (err,data) => {
    if(err) {
      callback(err);
    }
    else{
      callback(null, data);
      console.log('new file created');
    }
  });
};






