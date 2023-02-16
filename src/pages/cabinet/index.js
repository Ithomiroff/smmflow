import Head from 'next/head'
import { commonDataFetch } from "@/utils/commonDataFetch";
import Layout from "@/components/Layout";
import { CabinetLayout } from "@/components/CabinetLayout/CabinetLayout";
import { HistoryList } from "@/views/history/HistoryList/HistoryList";

export default function Cabinet() {

  return (
    <>
      <Head>
        <title>SMMFLOW</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <HistoryList/>
      </section>

    </>
  )
}

Cabinet.getLayout = function getLayout(page) {
  return (
    <Layout>
      <CabinetLayout>
        {page}
      </CabinetLayout>
    </Layout>
  )
}

export async function getStaticProps() {
  return await commonDataFetch();
}
