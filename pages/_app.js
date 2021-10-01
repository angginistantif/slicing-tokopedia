import '../styles/globals.css'
import React from 'react'
import Link from 'next/link';
import App, { Container } from 'next/app'
import { Provider } from 'react-redux';

import withRedux from 'next-redux-wrapper';
import store from '../store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>)
}

export default MyApp
