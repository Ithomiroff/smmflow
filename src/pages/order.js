import Head from 'next/head'
import { OrderCart } from "@/views/order/OrderCart/OrderCart";
import { commonDataFetch } from "@/utils/commonDataFetch";
import { useAppRootContext } from "@/context/AppRoot";
import { useEffect } from "react";

export default function Order({ categories, services }) {

  const { setData } = useAppRootContext();

  useEffect(() => {
    setData({
      categories,
      services
    })
  }, [categories, services]);

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

export async function getStaticProps() {
  return await commonDataFetch();
}
