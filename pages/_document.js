import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wdth,wght,XTRA,YTAS@8..144,112.5,400,485,750;8..144,125,300,468,749;8..144,125,400,468,749;8..144,125,500,477,750;8..144,125,600,477,750;8..144,125,700,477,750&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument