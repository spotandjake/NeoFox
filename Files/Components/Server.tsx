import React from 'react';
import styles from './../Style/Components/Server.module.scss';
type MyProps = { 
  Name: string | null, 
  id: string,
  Active: string, 
  customClickEvent: Function, 
  Self?: string | null
};
const Server = (props: MyProps) => {
  let Class = [ styles.Container ], 
      Picture = (props.Self || `${process.env.Storage_Url}/Servers/${props.id}/Icon`);
  if (props.Self) Class.push(styles.Self);
  return (
    <div 
      role="button"
      className={Class.join(' ')}
      onClick={
        (() => props.customClickEvent(props.id))
      }
      title={props.Name || 'Unknown'}
    >
      {
        props.Active == props.id && <div className={styles.Active}></div>
      }
      <picture className={styles.Icon}>
        <img className={styles.Icon_IMG} alt={props.Name || 'Unknown'} src={Picture} />
      </picture>
    </div>
  );
}
export default Server;