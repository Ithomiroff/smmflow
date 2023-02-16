import { PaymentForm } from "@/views/payment/PaymentForm";
import Head from "next/head";
import { commonDataFetch } from "@/utils/commonDataFetch";
import { useCommonData } from "@/utils/useCommonData";
import Layout from "@/components/Layout";

export default function Payment(CommonData) {

  useCommonData(CommonData)

  return (
    <>
      <Head>
        <title>SMMFLOW - оплата</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PaymentForm />
    </>
  );
}

Payment.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

// export async function getServerSideProps(context) {
//   const orderId = context?.query?.order;
//
//   if (!orderId) {
//     return {
//       notFound: true,
//     }
//   }
//
//   try {
//     const order = await requests.getOrder(orderId);
//     if (!order?.success) {
//       return {
//         notFound: true,
//       }
//     }
//     return {
//       props: {
//         order,
//       },
//     }
//
//   } catch (err) {
//     return {
//       notFound: true,
//     }
//   }
// }

export async function getStaticProps() {
  return await commonDataFetch();
}
