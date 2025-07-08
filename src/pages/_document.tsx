import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
        <link href='/favicon-dark.svg' rel='icon' media='(prefers-color-scheme: light)' />

        <link href='/favicon-light.svg' rel='icon' media='(prefers-color-scheme: dark)' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
