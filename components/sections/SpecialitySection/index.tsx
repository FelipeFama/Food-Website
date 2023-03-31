import Image from "next/image";
import burgerIconImg from "../../../assets/speciality/s-1.png";
import pizzaIconImg from "../../../assets/speciality/s-2.png";
import iceCreamIconImg from "../../../assets/speciality/s-3.png";
import drinksIconImg from "../../../assets/speciality/s-4.png";
import sweetIconImg from "../../../assets/speciality/s-5.png";
import breakfastIconImg from "../../../assets/speciality/s-6.png";
import burgerImg from "../../../assets/speciality/s-img-1.jpg";
import pizzaImg from "../../../assets/speciality/s-img-2.jpg";
import iceCreamImg from "../../../assets/speciality/s-img-3.jpg";
import drinksImg from "../../../assets/speciality/s-img-4.jpg";
import sweetImg from "../../../assets/speciality/s-img-5.jpg";
import breakfastImg from "../../../assets/speciality/s-img-6.jpg";
import styles from "./style.module.scss";

const iconsFood = {
  burgerIconImage: {
    source: burgerIconImg,
    alt: "burger icon",
  },
  pizzaIconImage: {
    source: pizzaIconImg,
    alt: "pizza icon",
  },
  iceCreamIconImage: {
    source: iceCreamIconImg,
    alt: "ice-cream icon",
  },
  drinksIconImage: {
    source: drinksIconImg,
    alt: "drinks icon",
  },
  sweetIconImage: {
    source: sweetIconImg,
    alt: "sweet icon",
  },
  breakfastIconImage: {
    source: breakfastIconImg,
    alt: "coffee icon",
  },
};

const specialityFoodImages = {
  burgerImage: {
    source: burgerImg,
    alt: "burger",
  },
  pizzaImage: {
    source: pizzaImg,
    alt: "pizza",
  },
  iceCreamImage: {
    source: iceCreamImg,
    alt: "ice-cream",
  },
  drinksImage: {
    source: drinksImg,
    alt: "drinks",
  },
  sweetImage: {
    source: sweetImg,
    alt: "sweet",
  },
  breakfastImage: {
    source: breakfastImg,
    alt: "coffee",
  },
};

export default function SpecialitySection() {
  return (
    <section className={styles.speciality} id="speciality">
      <h1 className={styles.heading}>
        our<span>speciality</span>
      </h1>
      <div className={styles.boxContainer}>
        <article className={styles.box}>
          <Image
            className={styles.image}
            src={specialityFoodImages.burgerImage.source}
            alt={specialityFoodImages.burgerImage.alt}
          />
          <div className={styles.content}>
            <Image
              src={iconsFood.burgerIconImage.source}
              alt={iconsFood.burgerIconImage.alt}
            />
            <h3>tasty burger</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, atque consequatur veritatis debitis cumque voluptatum
              doloribus deleniti.
            </p>
          </div>
        </article>

        <article className={styles.box}>
          <Image
            className={styles.image}
            src={specialityFoodImages.pizzaImage.source}
            alt={specialityFoodImages.pizzaImage.alt}
          />
          <div className={styles.content}>
            <Image
              src={iconsFood.pizzaIconImage.source}
              alt={iconsFood.pizzaIconImage.alt}
            />
            <h3>tasty pizza</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, atque consequatur veritatis debitis cumque voluptatum
              doloribus deleniti.
            </p>
          </div>
        </article>

        <article className={styles.box}>
          <Image
            className={styles.image}
            src={specialityFoodImages.iceCreamImage.source}
            alt={specialityFoodImages.iceCreamImage.alt}
          />
          <div className={styles.content}>
            <Image
              src={iconsFood.iceCreamIconImage.source}
              alt={iconsFood.iceCreamIconImage.alt}
            />
            <h3>cold ice-cream</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, atque consequatur veritatis debitis cumque voluptatum
              doloribus deleniti.
            </p>
          </div>
        </article>

        <article className={styles.box}>
          <Image
            className={styles.image}
            src={specialityFoodImages.drinksImage.source}
            alt={specialityFoodImages.drinksImage.alt}
          />
          <div className={styles.content}>
            <Image
              src={iconsFood.drinksIconImage.source}
              alt={iconsFood.drinksIconImage.alt}
            />
            <h3>cold drinks</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, atque consequatur veritatis debitis cumque voluptatum
              doloribus deleniti.
            </p>
          </div>
        </article>

        <article className={styles.box}>
          <Image
            className={styles.image}
            src={specialityFoodImages.sweetImage.source}
            alt={specialityFoodImages.sweetImage.alt}
          />
          <div className={styles.content}>
            <Image
              src={iconsFood.sweetIconImage.source}
              alt={iconsFood.sweetIconImage.alt}
            />
            <h3>tasty sweet</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, atque consequatur veritatis debitis cumque voluptatum
              doloribus deleniti.
            </p>
          </div>
        </article>

        <article className={styles.box}>
          <Image
            className={styles.image}
            src={specialityFoodImages.breakfastImage.source}
            alt={specialityFoodImages.breakfastImage.alt}
          />
          <div className={styles.content}>
            <Image
              src={iconsFood.breakfastIconImage.source}
              alt={iconsFood.breakfastIconImage.alt}
            />
            <h3>healty breakfast</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, atque consequatur veritatis debitis cumque voluptatum
              doloribus deleniti.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
