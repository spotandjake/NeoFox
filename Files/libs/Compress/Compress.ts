import * as converter from './core/converter';
import { resize } from './core/image';
import Photo from './core/Photo';

interface Compressor_Options {
  targetSize?:      number;
  quality?:         number;
  minQuality?:      number;
  qualityStepSize?: number;
  maxWidth?:        number;
  maxHeight?:       number;
  resize?:          boolean;
  throwIfSizeNotReached?: boolean;
}
interface Conversion {
  start:                number;
  quality:              number;
  startType:            string;
  startWidth:           number;
  startHeight:          number;
  endWidth?:             number;
  endHeight?:            number;
  iterations:           number;
  startSizeMB?:          number;
  endSizeMB?:            number;
  sizeReducedInPercent?: number;
  end?:                  number;
  elapsedTimeInSeconds?: number;
  endType?:              string;
}
export interface Picture {
  photo: Photo;
  info:  Conversion;
}
class Compress {
  private options: any;
  constructor(options: Compressor_Options = {}) {
    this.setOptions(options);
  }
  setOptions(
    options: Compressor_Options = { 
      targetSize: .2, // the max size in MB
      quality: 0.75, // the quality of the image, max is 1
      minQuality: 0.5,
      qualityStepSize: 0.1,
      maxWidth: 1920,
      maxHeight: 500,
      resize: true,
      throwIfSizeNotReached: false
    }
  ) {
    this.options = options;
  }
  async _compressFile(file: File): Promise<Picture> {
    // Create a new photo object
    const photo: Photo = new Photo(file);
    // Create the conversion info object
    const conversion: Conversion = {
      start: window.performance.now(),
      quality: this.options.quality,
      startType: photo.type,
      startWidth: photo.width,
      startHeight: photo.height,

      iterations: 0
    };
    // Load the file into the photo object
    await photo.load();
    return await this._compressImage(photo, conversion);
  }

  async _compressImage(photo: Photo, conversion: Conversion): Promise<Picture> {
    // Resize the image
    let newWidth, newHeight
    if (this.options.resize) {
      const resizedDims = resize(
        photo.width,
        photo.height,
        this.options.maxWidth,
        this.options.maxHeight
      );
      newWidth = resizedDims.width;
      newHeight = resizedDims.height;
    } else {
      newWidth = photo.width;
      newHeight = photo.height;
    }
    conversion.endWidth = newWidth;
    conversion.endHeight = newHeight;
    // Create a canvas element and resize the image onto the canvas
    const canvas = photo.getCanvas(newWidth, newHeight);
    // Initialise some variables for recursive call
    conversion.startSizeMB = converter.size(photo.size).MB;

    await this._loopCompression(canvas, photo, conversion);

    conversion.endSizeMB = converter.size(photo.size).MB;
    conversion.sizeReducedInPercent =
      (conversion.startSizeMB - conversion.endSizeMB) /
      conversion.startSizeMB *
      100;

    conversion.end = window.performance.now();
    conversion.elapsedTimeInSeconds = (conversion.end - conversion.start) / 1000;
    conversion.endType = photo.type;
    return { photo, info: conversion }
  }

  async _loopCompression(canvas: any, photo: Photo, conversion: Conversion): Promise<void> {
    conversion.iterations++;
    photo.setData(await converter.canvasToBlob(canvas, conversion.quality));
    if (conversion.iterations == 1) {
      // Update the photo width and height properties now that the photo data
      // represents an image with these dimensions.
      photo.width = conversion.endWidth || 0;
      photo.height = conversion.endHeight || 0;
    }

    if (converter.size(photo.size).MB > this.options.targetSize) {
      // toFixed avoids floating point errors messing with inequality
      if (parseFloat(conversion.quality.toPrecision(10)) - 0.1 < this.options.minQuality) {
        const errorText = `Couldn't compress image to target size while maintaining quality.
        Target size: ${this.options.targetSize}
        Actual size: ${converter.size(photo.size).MB}`;
        return;
      } else {
        conversion.quality -= this.options.qualityStepSize;
        return await this._loopCompression(canvas, photo, conversion);
      }
    } else return;
  }
  async compress(files: File[]): Promise<Picture[]> {
    return Promise.all(files.map((file: File) => this._compressFile(file)))
  }
}
export { Compress };