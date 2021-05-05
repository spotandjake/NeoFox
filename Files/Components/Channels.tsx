import React from 'react';

import styles from '../Style/Components/Channels.module.scss';

import Chatter_User from '../Scripts/Chatter';

type MyProps = { User: Chatter_User };
type MyState = { Channels: JSX.Element[] };
class  Channels extends React.Component<MyProps, MyState> {
  public state: MyState = { Channels: [] };
  constructor(props: MyProps) {
    super(props);
    props.User.addEventListener('ServerUpdate', this.Channel_Listener.bind(this));
  }
  Channel_Listener() {
    let Channels = this.props.User.Server.Channels;
    if (!Channels) return;
    let Active = this.props.User.Channel;
    this.setState({ 
      Channels: [...Channels.entries()].map(([ Value, Name ], i: number) => 
        <div className={styles.Button} key={i} onClick={(() => {
          this.props.User.ActiveChannel(Value);
        })}>{Name}</div>
      )
    });
  }
  componentDidMount() {
    this.Channel_Listener();
  }
  componentWillUnmount() {
    this.props.User.removeEventListener('ServerUpdate', this.Channel_Listener.bind(this));
  }
  render() {
    return (
      <section className={styles.Container}>
        {this.state.Channels}
      </section>
    );
  }
}
export default Channels;