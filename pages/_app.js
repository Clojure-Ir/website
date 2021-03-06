// pages/_app.js

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}