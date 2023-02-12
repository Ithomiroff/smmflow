import '@/styles/globals.css'
import { Layout } from "../components/Layout/Layout";
import { AppRoot } from "@/context/AppRoot";
import createStyles from "@/utils/createStyles";
import { Open_Sans } from "@next/font/google";

const font = Open_Sans({ subsets: ['latin', 'cyrillic-ext', 'cyrillic'] });

export default function App({ Component, pageProps }) {
  return (
    <div className={font.className}>
      <AppRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppRoot>
    </div>
  )
}
