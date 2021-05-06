import React from 'react';

import styles from './Style/Main.module.scss';

// Components
import Servers from './Components/Servers';
import Channels from './Components/Channels';
import Content from './Components/Content';
import Settings from './Components/Settings';

import Chatter_User from '../Files/Scripts/Chatter';

type MyProps = { User: Chatter_User };
type MyState = { Server: string };
class Main extends React.Component<MyProps, MyState> {
  public state: MyState = { Server: this.props.User.Server.Id }
  constructor(props: MyProps) {
    super(props);
    props.User.addEventListener('ActiveUpdate',this.ServerSet.bind(this));
  }
  ServerSet() {
    this.setState({ Server: this.props.User.Server.Id });
  }
  componentDidMount() {
    this.ServerSet();
  }
  componentWillUnmount() {
    this.props.User.removeEventListener('ActiveUpdate',this.ServerSet.bind(this));
  }
  render() {
    return (
      <div className={styles.Container}>
        <Servers User={this.props.User}/>
        {
          (() => {
            return this.state.Server == 'Settings'?
              (<Settings User={this.props.User} />) :
              (<>
                <Channels User={this.props.User} />
                <Content User={this.props.User} />
              </>);
          })()
        }
      </div>
    );
  }
}

export default Main;