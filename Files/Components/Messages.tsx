import React, { createRef } from 'react';

import styles from './../Style/Components/Messages.module.scss';

import Chatter_User from '../Scripts/Chatter';

type MyProps = { User: Chatter_User };
type MyState = { Messages: any[] };
class Messages extends React.Component<MyProps, MyState> {
  public state: MyState = { Messages: [] };
  private Messge_Container: any = createRef();
  constructor(props: MyProps) {
    super(props);
  }
  Message_Listener() {
    let Scroll: boolean = false;
    if (
      this.Messge_Container && this.Messge_Container.current && (
        ([...this.props.User.Messages.values()][0] && 
        [...this.props.User.Messages.values()][0].Message.UID == this.props.User.Id) ||
        this.Messge_Container.current.scrollTop > -20
      )
    ) Scroll = true;
    let messages = new Map([...this.props.User.Messages.entries()].sort((a, b) => b[1].Time-a[1].Time));
    this.setState({
      Messages: [...messages.values()].map((msg: any) => msg.Message.Render())
    });
    if (Scroll) {
      if (this.Messge_Container && this.Messge_Container.current)
        this.Messge_Container.current.scrollTop = 0;
    }
  }
  componentDidMount() {
    this.props.User.addEventListener('MessageUpdate', this.Message_Listener.bind(this));
    this.Message_Listener();
  }
  componentWillUnmount() {
    this.props.User.removeEventListener('MessageUpdate', this.Message_Listener.bind(this));
  }
  render() {
    return (
      <section 
        ref={this.Messge_Container}
        className={styles.Container}
      >
        {this.state.Messages}
      </section>
    );
  }
}
export default Messages;