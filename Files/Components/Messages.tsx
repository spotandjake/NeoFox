import React, { createRef } from 'react';

import styles from './../Style/Components/Messages.module.scss';

import Chatter_User from '../Scripts/Chatter';

type MyProps = { User: Chatter_User };
type MyState = { Messages: any[] };
class Messages extends React.Component<MyProps, MyState> {
  public state: MyState = { Messages: [] };
  private Message_Container: any = createRef();
  private Loading_Message:  any = createRef();
  private observer: any;
  private Listener: { type: string, Key: number } | null = null;
  constructor(props: MyProps) {
    super(props);
  }
  Message_Listener() {
    let Scroll: boolean = false;
    if (
      this.Message_Container && this.Message_Container.current && (
        ([...this.props.User.Messages.values()][0] && 
        [...this.props.User.Messages.values()][0].Message.UID == this.props.User.Id) ||
        this.Message_Container.current.scrollTop > -20
      )
    ) Scroll = true;
    let messages = new Map([...this.props.User.Messages.entries()].sort((a, b) => b[1].Time-a[1].Time));
    this.setState({
      Messages: [...messages.values()].map((msg: any) => msg.Message.Render())
    });
    // if (Scroll) {
    //   if (this.Message_Container && this.Message_Container.current)
    //     this.Message_Container.current.scrollTop = 0;
    // }
  }
  componentDidMount() {
    this.Listener = this.props.User.on('MessageUpdate', this.Message_Listener.bind(this));
    // Deal with scroll Loader Coming into view
    this.observer = new IntersectionObserver(([ target ]: any) => {
      if (target.isIntersecting) this.props.User.ScrollUp();
    }, {
      root: this.Message_Container.current,
      rootMargin: '20px',
      threshold: 1.0
    });
    if (this.Loading_Message.current) this.observer.observe(this.Loading_Message.current)
  }
  componentWillUnmount() {
    if (this.Listener) this.props.User.off(this.Listener);
    this.observer.unobserve(this.Loading_Message.current);
  }
  render() {
    return (
      <section className={styles.Container} ref={this.Message_Container}>
        {this.state.Messages}
        <span className={styles.Loading} ref={this.Loading_Message} >Loading</span>
      </section>
    );
  }
}
export default Messages;