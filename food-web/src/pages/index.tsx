import Head from "next/head";
import HomeSection from "@/components/sections/HomeSection";
import SpecialitySection from "@/components/sections/SpecialitySection";
import PopularSection from "@/components/sections/PopularSection";
import StepsSection from "@/components/sections/StepsSection";
import GallerySection from "@/components/sections/GallerySection";
import ReviewSection from "@/components/sections/ReviewSection";
import OrderSection from "@/components/sections/OrderSection";
import { getStaticProps } from "@/lib/fetchData";
import { Props } from "@/types";
import Layout from "@/layout";

export default function Home({
  header,
  home,
  speciality,
  popular,
  steps,
  gallery,
  review,
  order,
  footer,
  loader,
}: Props) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Food Restaurant Website" />
        <meta name="keywords" content="Food Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000" />
        <title>Food Restaurant Website</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="icons/foodicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="icons/apple-touch-icon.png"
        />
      </Head>
      <Layout header={header} footer={footer} loader={loader}>
        <HomeSection home={home} />
        <SpecialitySection speciality={speciality} />
        <PopularSection popular={popular} />
        <StepsSection steps={steps} />
        <GallerySection gallery={gallery} />
        <ReviewSection review={review} />
        <OrderSection order={order} />
      </Layout>
    </>
  );
}

export { getStaticProps };
