'use strict';


const FILE_SIZE_OFFSET = 2;//?
const WIDTH_OFFSET = 18;
const HEIGHT_OFFSET = 22;
const BYTES_PER_PIXEL_OFFSET = 28;
const NUM_COLORS_OFFSET = 46;
const COLOR_TABLE_OFFSET = 54;
const COLOR_TABLE_LENGTH = 1078;
const PIXEL_ARRAY_OFFSET = COLOR_TABLE_LENGTH;


class BufferData {

  constructor(bufferData) {

    this.type = bufferData.toString('utf-8', 0, 2);
    this.fileSize = bufferData.readInt32LE(FILE_SIZE_OFFSET);
    this.bytesPerPixel = bufferData.readInt16LE(BYTES_PER_PIXEL_OFFSET);
    this.height = bufferData.readInt32LE(HEIGHT_OFFSET);
    this.width = bufferData.readInt32LE(WIDTH_OFFSET);
    this.numColors = bufferData.readInt32LE(NUM_COLORS_OFFSET);
    this.colorTable = bufferData.slice(COLOR_TABLE_OFFSET, this.numColors * 4);
    this.raster = bufferData.slice(COLOR_TABLE_OFFSET + this.colorTable.length);
    this.pixelArray = bufferData.slice(PIXEL_ARRAY_OFFSET);
  }

}


module.exports = BufferData;