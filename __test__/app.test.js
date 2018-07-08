'use strict';

let bitReader = require('../src/app.js');
let BufferData = require('../src/lib/bitmap');

describe('Bitmap reader', () => {

  it(' should show an error if file does not exist', (done) => {
    let filePath = 'assets/missing.txt';
    bitReader.readFile(filePath, (err) => {
      expect(err).not.toBeNull();
      done();
    });
  });

  it(' should call on buffer when given a valid file path', (done) => {
    let filePath = 'assets/bitmap.bmp';
    bitReader.readFile(filePath, (err, buffer) => {
      expect(err).toBeNull();
      expect(typeof buffer).toBe('object');
      done();
    });
  });


  it(' should call the first two chars of the buffer and they should be BM', (done) => {
    let filePath = __dirname + '/../assets/bitmap.bmp';
    bitReader.readFile(filePath, (err, buffer) => {
      let actual = buffer.toString('utf-8', 0, 2);
      let expected = 'BM';
      expect(actual).toEqual(expected);
      done();
    });
  });


  it(' should show an object with the correct dimensions', (done) => {
    let filePath = __dirname + '/../assets/bitmap.bmp';
    bitReader.readFile(filePath, (err, buffer) => {
      expect(err).toBeNull();
      let results = new BufferData(buffer);
      expect(results.width).toBe(100);
      expect(results.height).toBe(100);
      done();
    });
  });

  it(' should write a new file', (done) => {
    let filePath = __dirname + '/../assets/bitmap.bmp';
    bitReader.readFile(filePath, (err, buffer) => {
      if (err) console.log(err);
      expect(err).toBeNull();
      bitReader.writeFile(__dirname + '/../assets/changed/newFile.bmp', buffer, (err, buffer) => { // eslint-disable-line
        expect(err).toBeNull();
        done();
      });
    });
  });
});
