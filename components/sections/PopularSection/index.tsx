import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import { FaStar, FaRegStar } from "react-icons/fa";
import popularBurgerImg from "../../../assets/popular/p-1.jpg";
import popularCakeImg from "../../../assets/popular/p-2.jpg";
import popularSweetsImg from "../../../assets/popular/p-3.jpg";
import popularCupcakesImg from "../../../assets/popular/p-4.jpg";
import popularDrinksImg from "../../../assets/popular/p-5.jpg";
import popularIceCreamImg from "../../../assets/popular/p-6.jpg";
import ButtonComponent from "@/components/ButtonComponent";

const popularFoodImages = {
  popularBurgerImage: {
    source: popularBurgerImg,
    alt: "burger",
  },
  popularCakeImage: {
    source: popularCakeImg,
    alt: "orange cake",
  },
  popularSweetImage: {
    source: popularSweetsImg,
    alt: "sweets",
  },
  popularCupcakesImage: {
    source: popularCupcakesImg,
    alt: "cupcake",
  },
  popularDrinksImage: {
    source: popularDrinksImg,
    alt: "drinks",
  },
  popularIceCreamImage: {
    source: popularIceCreamImg,
    alt: "ice-cream",
  },
};

export default function PopularSection() {
  return (
    <section className={styles.popular} id="popular">
      <h1 className={styles.heading}>
        most<span>popular</span>foods
      </h1>
      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <span className={styles.price}>$5 - $20</span>
          <Image
            src={popularFoodImages.popularBurgerImage.source}
            alt={popularFoodImages.popularBurgerImage.alt}
          />
          <h3>tasty burger</h3>
          <div className={styles.stars}>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaRegStar></FaRegStar>
          </div>
          <ButtonComponent />
        </div>

        <div className={styles.box}>
          <span className={styles.price}>$5 - $20</span>
          <Image
            src={popularFoodImages.popularCakeImage.source}
            alt={popularFoodImages.popularCakeImage.alt}
          />
          <h3>tasty cakes</h3>
          <div className={styles.stars}>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaRegStar></FaRegStar>
          </div>
          <ButtonComponent />
        </div>

        <div className={styles.box}>
          <span className={styles.price}>$5 - $20</span>
          <Image
            src={popularFoodImages.popularSweetImage.source}
            alt={popularFoodImages.popularSweetImage.alt}
          />
          <h3>tasty sweets</h3>
          <div className={styles.stars}>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaRegStar></FaRegStar>
          </div>
          <ButtonComponent />
        </div>

        <div className={styles.box}>
          <span className={styles.price}>$5 - $20</span>
          <Image
            src={popularFoodImages.popularCupcakesImage.source}
            alt={popularFoodImages.popularCupcakesImage.alt}
          />
          <h3>tasty cupcakes</h3>
          <div className={styles.stars}>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaRegStar></FaRegStar>
          </div>
          <ButtonComponent />
        </div>

        <div className={styles.box}>
          <span className={styles.price}>$5 - $20</span>
          <Image
            src={popularFoodImages.popularDrinksImage.source}
            alt={popularFoodImages.popularDrinksImage.alt}
          />
          <h3>cold drinks</h3>
          <div className={styles.stars}>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaRegStar></FaRegStar>
          </div>
          <ButtonComponent />
        </div>

        <div className={styles.box}>
          <span className={styles.price}>$5 - $20</span>
          <Image
            src={popularFoodImages.popularIceCreamImage.source}
            alt={popularFoodImages.popularIceCreamImage.alt}
          />
          <h3>cold ice-cream</h3>
          <div className={styles.stars}>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaRegStar></FaRegStar>
          </div>
          <ButtonComponent />
        </div>
      </div>
    </section>
  );
}
