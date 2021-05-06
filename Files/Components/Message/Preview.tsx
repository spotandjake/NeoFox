import React, { createRef } from 'react';
import { createPortal } from 'react-dom';

import styles from './../../Style/Components/Markdown.module.scss';

const Modal = (props: { children?: JSX.Element }) => {
  let Container = document?.getElementById('modal-root') ?? null;
  return Container ? createPortal(props.children, Container) : null;
}
export default Modal;
// Image Peview
type ImgProps = { Url: string, alt?: string };
type ImageState = { Content: JSX.Element }
export class Image extends React.Component<ImgProps, ImageState> {
  public state: ImageState = { Content: <></> };
  constructor(props: ImgProps) {
    super(props);
  }
  Preview() {
    this.setState({
      Content: (
        <Modal>
          <div 
            className={styles.Preview}
            onClick={(e) => {
              //@ts-ignore
              if (e.target.classList.contains(styles.Preview))
                this.setState({ Content: <></> });
            }}
          >
            <picture>
              <img src={this.props.Url} alt={this.props.alt || 'Image_Preview'} height="500" ></img>
            </picture>
          </div>
        </Modal>
      )
    });
  }
  render() {
    return (
      <>
      <picture onClick={this.Preview.bind(this)}>
        <img className={styles.img} src={this.props.Url} alt={this.props.alt} height="500" ></img>
      </picture>
      {this.state.Content}
      </>
    );
  }
}