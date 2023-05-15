import { client } from "@/sanity";
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
  speciality: any;
  popular: any;
  steps: any;
  gallery: any;
}

export default function Home({ speciality, popular, steps, gallery }: Props) {
  return (
    <>
      <Head>
        <title>Food Restaurant Website</title>
        <meta name="description" content="Food Restaurant Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/foodicon.ico" />
      </Head>
      <Header />
      <main>
        <HomeSection />
        <SpecialitySection speciality={speciality} />
        <PopularSection popular={popular} />
        <StepsSection steps={steps} />
        <GallerySection gallery={gallery} />
        <ReviewSection />
        <OrderSection />
      </main>
      <Footer />
      <BackToTopButton />
      <Loader />
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
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
  return {
    props: {
      speciality,
      popular,
      steps,
      gallery,
    },
  };
};
