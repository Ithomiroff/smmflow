import '@/styles/globals.css'
import { AppRoot } from "@/context/AppRoot";
import { Open_Sans } from "@next/font/google";

const font = Open_Sans({ subsets: ['latin', 'cyrillic-ext', 'cyrillic'] });

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <div className={font.className}>
      <AppRoot>
        {getLayout(<Component {...pageProps} />)}
      </AppRoot>
    </div>
  )
}
