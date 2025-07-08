import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css'
import '@smastrom/react-rating/style.css'
import './../fonts_face_declarations_cleaned.css'
import Intercom from '@intercom/messenger-js-sdk'
import { ConsentManagerDialog, ConsentManagerProvider, CookieBanner } from '@c15t/nextjs'

const INTERCOM_APP_ID = 'lqu8o1eq'
Intercom({ app_id: INTERCOM_APP_ID })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConsentManagerProvider
      options={{
        mode: 'offline',
        consentCategories: ['necessary', 'marketing'], // Optional: Specify which consent categories to show in the banner.
        ignoreGeoLocation: true, // Useful for development to always view the banner.
      }}
    >
      <CookieBanner />
      <ConsentManagerDialog />
      <Component {...pageProps} />
    </ConsentManagerProvider>
  )
}
