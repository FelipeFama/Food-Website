import Head from "next/head";
import Layout from "@/components/sections";

export default function Home() {
  return (
    <>
      <Head>
        <title>Food Restaurant Website</title>
        <meta name="description" content="Food Restaurant Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
    </>
  );
}
