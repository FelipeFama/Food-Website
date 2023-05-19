import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import { FaStar, FaRegStar } from "react-icons/fa";
import ButtonComponent from "@/components/buttons/ButtonSections";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "@/lib/sanity";
import { Popular as PopularComponent } from "@/types/sections/popular";

interface PopularProps {
  popular: PopularComponent[];
}

export default function PopularSection({ popular }: PopularProps) {
  return (
    <section className={styles.popular} id="popular">
      <h1 className={styles.heading}>
        most <span>popular</span> foods
      </h1>
      <div className={styles.boxContainer}>
        {popular.map((item: PopularComponent) => (
          <article key={item._id} className={styles.box}>
            <span className={styles.price}>{item.span}</span>
            {item.image && (
              <Image
                className={styles.image}
                // eslint-disable-next-line react-hooks/rules-of-hooks
                {...useNextSanityImage(client, item.image.asset._ref)}
                alt={item.image.alt}
                priority={false}
              />
            )}
            <h3>{item.title}</h3>
            <div className={styles.stars}>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaRegStar></FaRegStar>
            </div>
            <ButtonComponent>Order Now</ButtonComponent>
          </article>
        ))}
      </div>
    </section>
  );
}
