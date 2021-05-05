import React from 'react';
import styles from './../Style/Components/Servers.module.scss';

//Modules 
import Server from './Server';

import Chatter_User from '../Scripts/Chatter';

type MyProps = { User: Chatter_User };
type MyState = { Active: string, Servers: Map<string, string> };
class Servers extends React.Component<MyProps, MyState> {
  public state: MyState = { Active: '', Servers: new Map() };
  constructor(props: MyProps) {
    super(props);
    props.User.addEventListener('UserUpdate', this.Server_Listener.bind(this));
  }
  Server_Listener() {
    let Servers = this.props.User.Servers;
    let Active = this.props.User.Server.Id;
    this.setState({ Servers });
    if (Active != '')
      this.Change_Server(Active);
  }
  componentDidMount() {
    this.Server_Listener();
  }
  componentWillUnmount() { 
    this.props.User.removeEventListener('UserUpdate', this.Server_Listener.bind(this));
  }
  Change_Server(child: string) {
    this.setState({Active: child});
    this.props.User.ActiveServer(child);
  }
  render() {
    return (
      <section className={styles.Container}>
        {
          (() => {
            let Comps = [];
            for (let [key, value] of this.state.Servers) {
              Comps.push(
                <Server 
                  key={key}
                  id={key}
                  Name={value}
                  Active={this.state.Active}
                  customClickEvent={this.Change_Server.bind(this)}
                />
              );
            }
            return Comps;
          })()
        }
        <Server id={'Settings'} Name={this.props.User.Name} Active={this.state.Active} customClickEvent={this.Change_Server.bind(this)} Self={this.props.User.Picture}/>
      </section>
    );
  }
}

export default Servers;