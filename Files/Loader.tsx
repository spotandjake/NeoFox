import React from 'react';

import styles from './Style/Loader.module.scss';

let Loader = () => {
  return (
    <div className={styles.Container}>
      {Array.from({length:10},(_, i)=><div key={i}></div>)}
    </div>
  )
}

export default Loader;