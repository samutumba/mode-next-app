import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
   <Html lang='en'>
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.png" />
     
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Site to host lab assignments for my MODE 4201"
      />
      <link rel="apple-touch-icon" href="/favicon.png"  />
      
      <link rel="manifest" href="/favicon.png"  />
      
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand&family=Raleway:wght@600&display=swap" rel="stylesheet"></link>
        
     </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}