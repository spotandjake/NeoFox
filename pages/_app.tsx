import React from 'react';
import { AppProps } from 'next/app';

import './../Files/Style/index.scss';
import './../Files/Style/Themes/Dark.scss';
import './../Files/Style/Themes/Light.scss';

let App = ({ Component, pageProps }: AppProps) => (<Component {...pageProps} />);
export default App;