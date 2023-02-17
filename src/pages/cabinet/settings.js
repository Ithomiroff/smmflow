import Head from 'next/head'
import Layout from "@/components/Layout";
import { CabinetLayout } from "@/components/CabinetLayout/CabinetLayout";
import { SettingsView } from "@/views/settings/SettingsView/SettingsView";

export default function Settings() {

  return (
    <>
      <Head>
        <title>SMMFLOW - Настройки</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <SettingsView/>
      </section>

    </>
  )
}

Settings.getLayout = function getLayout(page) {
  return (
    <Layout>
      <CabinetLayout>
        {page}
      </CabinetLayout>
    </Layout>
  )
}
