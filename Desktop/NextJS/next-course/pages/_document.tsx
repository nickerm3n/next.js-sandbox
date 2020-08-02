import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head crossOrigin={"anonymous"}>
          <link href="https://fonts.googleapis.com/css2?family=Roboto&family=ZCOOL+KuaiLe&display=swap" rel="stylesheet" />
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