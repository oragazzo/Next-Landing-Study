import '../styles/main.scss';
import 'tailwindcss/tailwind.css';
import '../styles/main.css';

import React from 'react'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp