import Image from "next/image";
import { iconsFood, specialityFoodImages } from "@/data/speciality";
import styles from "./style.module.scss";

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
