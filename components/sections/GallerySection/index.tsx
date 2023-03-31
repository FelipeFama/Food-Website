import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import ButtonComponent from "@/components/ButtonComponent";
import galleryBurgerImg from "../../../assets/gallery/g-1.jpg";
import gallerySandwichImg from "../../../assets/gallery/g-2.jpg";
import galleryBurritoImg from "../../../assets/gallery/g-3.jpg";
import galleryCupCakeImg from "../../../assets/gallery/g-4.jpg";
import galleryFudgeImg from "../../../assets/gallery/g-5.jpg";
import galleryFriedChickenImg from "../../../assets/gallery/g-6.jpg";
import galleryBreadWithEggImg from "../../../assets/gallery/g-7.jpg";
import galleryChocolateCandiesImg from "../../../assets/gallery/g-8.jpg";
import galleryBananaBreadImg from "../../../assets/gallery/g-9.jpg";

const galleryFoodImages = {
  galleryBurgerImage: {
    source: galleryBurgerImg,
    alt: "burger",
  },
  gallerySandwichImage: {
    source: gallerySandwichImg,
    alt: "sandwich",
  },
  galleryBurritoImage: {
    source: galleryBurritoImg,
    alt: "burrito",
  },
  galleryCupCakeImage: {
    source: galleryCupCakeImg,
    alt: "cupcake",
  },
  galleryFudgeImage: {
    source: galleryFudgeImg,
    alt: "fudge",
  },
  galleryFriedChickenImage: {
    source: galleryFriedChickenImg,
    alt: "fried chicken",
  },
  galleryBreadWithEggImage: {
    source: galleryBreadWithEggImg,
    alt: "bread with egg",
  },
  galleryChocolateCandiesImage: {
    source: galleryChocolateCandiesImg,
    alt: "chocolate candies",
  },
  galleryBananaBreadImage: {
    source: galleryBananaBreadImg,
    alt: "banana bread",
  },
};

export default function GallerySection() {
  return (
    <section className={styles.gallery} id="gallery">
      <h1 className={styles.heading}>
        Our food <span>gallery</span>
      </h1>
      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <Image
            src={galleryFoodImages.galleryBurgerImage.source}
            alt={galleryFoodImages.galleryBurgerImage.alt}
          />
          <div className={styles.content}>
            <h3>tasty food</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <ButtonComponent />
          </div>
        </div>

        <div className={styles.box}>
          <Image
            src={galleryFoodImages.gallerySandwichImage.source}
            alt={galleryFoodImages.gallerySandwichImage.alt}
          />
          <div className={styles.content}>
            <h3>tasty food</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <ButtonComponent />
          </div>
        </div>

        <div className={styles.box}>
          <Image
            src={galleryFoodImages.galleryBurritoImage.source}
            alt={galleryFoodImages.galleryBurritoImage.alt}
          />
          <div className={styles.content}>
            <h3>tasty food</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <ButtonComponent />
          </div>
        </div>

        <div className={styles.box}>
          <Image
            src={galleryFoodImages.galleryCupCakeImage.source}
            alt={galleryFoodImages.galleryCupCakeImage.alt}
          />
          <div className={styles.content}>
            <h3>tasty food</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <ButtonComponent />
          </div>
        </div>

        <div className={styles.box}>
          <Image
            src={galleryFoodImages.galleryFudgeImage.source}
            alt={galleryFoodImages.galleryFudgeImage.alt}
          />
          <div className={styles.content}>
            <h3>tasty food</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <ButtonComponent />
          </div>
        </div>

        <div className={styles.box}>
          <Image
            src={galleryFoodImages.galleryFriedChickenImage.source}
            alt={galleryFoodImages.galleryFriedChickenImage.alt}
          />
          <div className={styles.content}>
            <h3>tasty food</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <ButtonComponent />
          </div>
        </div>

        <div className={styles.box}>
          <Image
            src={galleryFoodImages.galleryBreadWithEggImage.source}
            alt={galleryFoodImages.galleryBreadWithEggImage.alt}
          />
          <div className={styles.content}>
            <h3>tasty food</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <ButtonComponent />
          </div>
        </div>

        <div className={styles.box}>
          <Image
            src={galleryFoodImages.galleryChocolateCandiesImage.source}
            alt={galleryFoodImages.galleryChocolateCandiesImage.alt}
          />
          <div className={styles.content}>
            <h3>tasty food</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <ButtonComponent />
          </div>
        </div>

        <div className={styles.box}>
          <Image
            src={galleryFoodImages.galleryBananaBreadImage.source}
            alt={galleryFoodImages.galleryBananaBreadImage.alt}
          />
          <div className={styles.content}>
            <h3>tasty food</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <ButtonComponent />
          </div>
        </div>
      </div>
    </section>
  );
}
