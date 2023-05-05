import React from "react";
import HomeSection from "./HomeSection";
import SpecialitySection from "./SpecialitySection";
import PopularSection from "./PopularSection";
import StepsSection from "./StepsSection";
import GallerySection from "./GallerySection";
import ReviewSection from "./ReviewSection";
import OrderSection from "./OrderSection";
import Layout from "../Layout";

export default function Sections() {
  return (
    <>
      <Layout>
        <HomeSection />
        <SpecialitySection />
        <PopularSection />
        <StepsSection />
        <GallerySection />
        <ReviewSection />
        <OrderSection />
      </Layout>
    </>
  );
}
