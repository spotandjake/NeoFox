import { extractOrientation } from './rotate';
import { loadImageElement } from './image';
import { imageToCanvas } from './converter';

// The photo model
export default class Photo {
  public data: File | Blob;
  public name: string;
  public type: string;
  public size: number;
  public orientation: number = 1;
  public _img: any;
  public width: number = 0;
  public height: number = 0;
  constructor(file: File) {
    this.data = file; // Store the File or Blob
    this.name = file.name;
    this.type = file.type;
    this.size = file.size;
  }
  setData(data: File | Blob) {
    this.data = data;
    this.size = data.size;
    this.type = data.type;
  }
  async _calculateOrientation() {
    const orientation: number = await extractOrientation(this.data);
    this.orientation = orientation;
  }
  async load() {
    await this._calculateOrientation();
    // Create an object URL which points to the File/Blob image data
    const objectUrl: string = URL.createObjectURL(this.data);
    const img: any = new window.Image();
    await loadImageElement(img, objectUrl);
    // Image element has now loaded the object so we can safely revoke the
    // object URL
    URL.revokeObjectURL(objectUrl);
    this._img = img;
    this.width = img.naturalWidth;
    this.height = img.naturalHeight;
  }
  getCanvas(width: number = 0, height: number = 0) {
    return imageToCanvas(this._img, width, height, this.orientation);
  }
}
