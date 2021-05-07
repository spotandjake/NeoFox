import React, { ChangeEvent } from 'react';
import styles from '../../Style/Components/Upload.module.scss';

import { storage } from '../../Scripts/Firebase';
import { ref, uploadBytes, StorageReference, UploadResult } from 'firebase/storage';
import Chatter_User from '../../Scripts/Chatter';
import { Compress, Picture } from '../../libs/Compress/Compress';

let compress = new Compress();

type MyProps = { 
  User: Chatter_User,
  Send: Function
};
class Upload extends React.Component<MyProps, { }> {
  // @ts-ignore
  private input: HTMLInputElement;
  constructor(props: MyProps) {
    super(props);
  }
  async Upload (evt: ChangeEvent) {
    let Files: FileList | null = (evt.target as HTMLInputElement).files;
    let files: File[] = [];
    if (!Files) return;
    for (let i = 0; i < Files.length; i++) {
      let Item: File | null = Files.item(i);
      if (Item) files.push(Item);
    }
    compress.compress(files).then(async (Imgs: Picture[]) => {
      if (!Imgs[0]) return console.log(Imgs);
      const { photo } = Imgs[0];
      const Image: Blob = photo.data;
      // Store it 
      let R: number = window.crypto.getRandomValues(new Uint32Array(1))[0];
      let Path: string = `Servers/${this.props.User.Server.Id}/Channels/${this.props.User.Channel.Id}/${R}_${photo.name}`;
      let storageRef: StorageReference = ref(storage, Path);
      let snapshot: UploadResult = await uploadBytes(storageRef, Image);
      if (snapshot) this.props.Send(`![Upload](<${process.env.Storage_Url}/${Path}>)`);
    }).catch(() => console.log('image upload error'));
  }
  render() {
    return (
      <div className={styles.Icon} onClick={() => (this.input.click())}>
        <picture>
          <img alt="Upload" src={'/Images/Upload.svg'} width="18" height="18" />
        </picture>
        <input 
          type="file" 
          name="Upload" 
          accept="image/png,image/jpeg,image/jpg,image/gif,image/bmp,image/tiff,image/x-icon,image/svg+xml,image/webp,image/xxx"
          ref={(el: HTMLInputElement) => (this.input = el)}
          onChange={this.Upload.bind(this)}
        />
      </div>
    );
  }
}
export default Upload;