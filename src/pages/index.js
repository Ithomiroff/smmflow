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

export default function Home({ categories, services, user }) {

  const { setData } = useAppRootContext();

  useEffect(() => {
    setData({
      categories,
      services
    })
  }, [categories, services]);

  console.log(user);

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

export async function getStaticProps() {
  const { data: user } = await requests.userInfo();
  const { catalog, payments } = await requests.allData();

  const { categories, services, types } = catalog;

  categories.forEach((item) => {
    item.children = types[item.id];
  });

  return {
    props: {
      categories,
      services,
      user,
    },
  }
}
