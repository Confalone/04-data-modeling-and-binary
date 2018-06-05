'use strict';

const parsedBitmap = module.exports = {};

parsedBitmap.parse = (buffer) = > {
    
    const parsedBitmap = {};
    const FILE_SIZE_OFFSET = 2;
    const HEIGHT_OFFSET = 22;
    const COLOR_TABLE_OFFSET = 54;
    const COLOR_TABLE_LENGTH = 1000;

    parsedBitmap.type = buffer.toString('utf-8', 0,2);
    parsedBitmap.fileSize = 
}
