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
import { getStaticProps } from "@/utils/fetchData";

export interface Props {
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

export { getStaticProps }