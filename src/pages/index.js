import Head from 'next/head'
import requests from "@/api/urls";
import { useEffect } from "react";
import { useAppRootContext } from "@/context/AppRoot";
import Banner from "@/views/index/Banner";
import FastOrder from "../views/index/FastOrder";
import Reviews from "@/views/index/Reviews";
import Advantages from "@/views/index/Advantages";
import DiscountBanner from "@/views/index/DiscountBanner";
import { Faq } from "../views/index/Faq/Faq";
import { ReadyForOrder } from "../views/index/ReadyForOrder/ReadyForOrder";
import { commonDataFetch } from "@/utils/commonDataFetch";
import { useCommonData } from "@/utils/useCommonData";
import Layout from "@/components/Layout";

export default function Home(commonData) {

  useCommonData(commonData);

  return (
    <>
      <Head>
        <title>SMMFLOW</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <Banner/>
      </section>
      <section>
        <FastOrder/>
      </section>
      <section id="reviews">
        <Reviews/>
      </section>
      <section id="advantages">
        <Advantages/>
      </section>
      <section>
        <DiscountBanner/>
      </section>
      <section>
        <Faq/>
      </section>
      <section>
        <ReadyForOrder/>
      </section>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export async function getStaticProps() {
  return await commonDataFetch();
}
