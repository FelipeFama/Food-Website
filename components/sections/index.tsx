import React from "react";
import HomeSection from "./HomeSection";
import SpecialitySection from "./SpecialitySection";
import PopularSection from "./PopularSection";
import StepsSection from "./StepsSection";
import GallerySection from "./GallerySection";
import ReviewSection from "./ReviewSection";

export default function Layout() {
  return (
    <>
      <HomeSection />
      <SpecialitySection />
      <PopularSection />
      <StepsSection />
      <GallerySection />
      <ReviewSection />
    </>
  );
}
