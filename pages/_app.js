import 'tailwindcss/tailwind.css';
import '../styles/globals.scss';
import React, {useState, useEffect} from 'react';
import {Layout} from "../components/index.js";

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  )
}

export default MyApp
