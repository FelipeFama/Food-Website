import { client } from "@/lib/sanity";
import { GetStaticProps } from "next";
import Header from "@/components/Layout/Header";
import Head from "next/head";
import HomeSection from "@/components/sections/HomeSection";
import SpecialitySection from "@/components/sections/SpecialitySection";
import PopularSection from "@/components/sections/PopularSection";
import StepsSection from "@/components/sections/StepsSection";
import GallerySection from "@/components/sections/GallerySection";
import ReviewSection from "@/components/sections/ReviewSection";
import OrderSection from "@/components/sections/OrderSection";
import Footer from "@/components/Layout/Footer";
import BackToTopButton from "@/components/buttons/BackToTopButton";
import Loader from "@/components/Layout/Loader";

interface Props {
  header: any;
  home: any;
  speciality: any;
  popular: any;
  steps: any;
  gallery: any;
  review: any;
  order: any;
  footer: any;
  loader: any;
}

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
  loader
}: Props) {

  return (
    <>
      <Head>
        <title>Food Restaurant Website</title>
        <meta name="description" content="Food Restaurant Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/foodicon.ico" />
      </Head>
      <Header header={header} />
      <main>
        <HomeSection home={home} />
        <SpecialitySection speciality={speciality} />
        <PopularSection popular={popular} />
        <StepsSection steps={steps} />
        <GallerySection gallery={gallery} />
        <ReviewSection review={review} />
        <OrderSection order={order} />
      </main>
      <Footer footer={footer} />
      <BackToTopButton />
      <Loader loader={loader} />
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const header = await client.fetch(
    `*[_type == "header"] | order(_createdAt asc)`
  );
  const home = await client.fetch(
    `*[_type == "home"]`
  );
  const speciality = await client.fetch(
    `*[_type == "speciality"] | order(_createdAt desc)`
  );
  const popular = await client.fetch(
    `*[_type == "popular"] | order(_createdAt desc)`
  );
  const steps = await client.fetch(
    `*[_type == "steps"] | order(_createdAt desc)`
  );
  const gallery = await client.fetch(
    `*[_type == "gallery"] | order(_createdAt desc)`
  );
  const review = await client.fetch(
    `*[_type == "review"] | order(_createdAt desc)`
  );
  const order = await client.fetch(
    `*[_type == "order"]`
  );
  const footer = await client.fetch(
    `*[_type == "footer"] | order(_createdAt asc)`
  );
  const loader = await client.fetch(
    `*[_type == "loader"]`
  );

  return {
    props: {
      header,
      home,
      speciality,
      popular,
      steps,
      gallery,
      review,
      order,
      footer,
      loader
    },
  };
};
