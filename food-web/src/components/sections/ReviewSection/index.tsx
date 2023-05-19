import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "@/sanity";
import { Review as ReviewComponent } from "@/types/sections/review";

interface ReviewProps {
  review: ReviewComponent[];
}

export default function ReviewSection({ review }: ReviewProps) {
  return (
    <section className={styles.review} id="review">
      <h1 className={styles.heading}>
        our customers <span>reviews</span>
      </h1>
      <div className={styles.boxContainer}>
        {review.map((item: ReviewComponent) => (
          <article key={item._id} className={styles.box}>
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
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
