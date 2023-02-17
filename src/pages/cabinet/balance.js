import Head from 'next/head'
import Layout from "@/components/Layout";
import { CabinetLayout } from "@/components/CabinetLayout/CabinetLayout";
import { BalanceView } from "@/views/balance/BalanceView";
import { commonDataFetch } from "@/utils/commonDataFetch";
import { useCommonData } from "@/utils/useCommonData";

export default function Balance(CommonData) {

  useCommonData(CommonData);

  return (
    <>
      <Head>
        <title>SMMFLOW - баланс</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <BalanceView/>
      </section>

    </>
  )
}

Balance.getLayout = function getLayout(page) {
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
