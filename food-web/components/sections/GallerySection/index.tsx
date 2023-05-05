import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import { galleryFoodImages } from "@/data/gallery";
import ButtonComponent from "@/components/buttons/ButtonSections";

export default function GallerySection() {
  return (
    <section className={styles.gallery} id="gallery">
      <h1 className={styles.heading}>
        Our food <span>gallery</span>
      </h1>
      <div className={styles.boxContainer}>
        <article className={styles.box}>
          <Image
            src={galleryFoodImages.galleryBurgerImage.source}
            alt={galleryFoodImages.galleryBurgerImage.alt}
          />
          <div className={styles.content}>
            <h3>tasty food</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <ButtonComponent>Order Now</ButtonComponent>
          </div>
        </article>

        <article className={styles.box}>
          <Image
            src={galleryFoodImages.gallerySandwichImage.source}
            alt={galleryFoodImages.gallerySandwichImage.alt}
          />
          <div className={styles.content}>
            <h3>tasty food</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <ButtonComponent>Order Now</ButtonComponent>
          </div>
        </article>

        <article className={styles.box}>
          <Image
            src={galleryFoodImages.galleryBurritoImage.source}
            alt={galleryFoodImages.galleryBurritoImage.alt}
          />
          <div className={styles.content}>
            <h3>tasty food</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <ButtonComponent>Order Now</ButtonComponent>
          </div>
        </article>

        <article className={styles.box}>
          <Image
            src={galleryFoodImages.galleryCupCakeImage.source}
            alt={galleryFoodImages.galleryCupCakeImage.alt}
          />
          <div className={styles.content}>
            <h3>tasty food</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <ButtonComponent>Order Now</ButtonComponent>
          </div>
        </article>

        <article className={styles.box}>
          <Image
            src={galleryFoodImages.galleryFudgeImage.source}
            alt={galleryFoodImages.galleryFudgeImage.alt}
          />
          <div className={styles.content}>
            <h3>tasty food</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <ButtonComponent>Order Now</ButtonComponent>
          </div>
        </article>

        <article className={styles.box}>
          <Image
            src={galleryFoodImages.galleryFriedChickenImage.source}
            alt={galleryFoodImages.galleryFriedChickenImage.alt}
          />
          <div className={styles.content}>
            <h3>tasty food</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <ButtonComponent>Order Now</ButtonComponent>
          </div>
        </article>

        <article className={styles.box}>
          <Image
            src={galleryFoodImages.galleryBreadWithEggImage.source}
            alt={galleryFoodImages.galleryBreadWithEggImage.alt}
          />
          <div className={styles.content}>
            <h3>tasty food</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <ButtonComponent>Order Now</ButtonComponent>
          </div>
        </article>

        <article className={styles.box}>
          <Image
            src={galleryFoodImages.galleryChocolateCandiesImage.source}
            alt={galleryFoodImages.galleryChocolateCandiesImage.alt}
          />
          <div className={styles.content}>
            <h3>tasty food</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <ButtonComponent>Order Now</ButtonComponent>
          </div>
        </article>

        <article className={styles.box}>
          <Image
            src={galleryFoodImages.galleryBananaBreadImage.source}
            alt={galleryFoodImages.galleryBananaBreadImage.alt}
          />
          <div className={styles.content}>
            <h3>tasty food</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <ButtonComponent>Order Now</ButtonComponent>
          </div>
        </article>
      </div>
    </section>
  );
}
