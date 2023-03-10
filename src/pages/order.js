import Head from 'next/head'
import { OrderCart } from "@/views/order/OrderCart/OrderCart";
import { commonDataFetch } from "@/utils/commonDataFetch";
import { useCommonData } from "@/utils/useCommonData";
import Layout from "@/components/Layout";

export default function Order(CommonData) {

  useCommonData(CommonData)

  return (
    <>
      <Head>
        <title>SMMFLOW - быстрый заказ</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <OrderCart/>
    </>
  )
};

Order.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export async function getStaticProps() {
  return await commonDataFetch();
}
