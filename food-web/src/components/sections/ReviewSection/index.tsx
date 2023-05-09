import React from "react";
import Image from "next/image";
import { reviewImages } from "@/data/review";
import styles from "./style.module.scss";
import { FaStar, FaRegStar } from "react-icons/fa";

export default function ReviewSection() {
  return (
    <section className={styles.review} id="review">
      <h1 className={styles.heading}>
        our customers <span>reviews</span>
      </h1>
      <div className={styles.boxContainer}>
        <article className={styles.box}>
          <Image
            src={reviewImages.firstPicImage.source}
            alt={reviewImages.firstPicImage.alt}
          />
          <h3>joana deo</h3>
          <div className={styles.stars}>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaRegStar></FaRegStar>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </article>

        <article className={styles.box}>
          <Image
            src={reviewImages.secondPicImage.source}
            alt={reviewImages.secondPicImage.alt}
          />
          <h3>jonh deo</h3>
          <div className={styles.stars}>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaRegStar></FaRegStar>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </article>

        <article className={styles.box}>
          <Image
            src={reviewImages.thirdPicImage.source}
            alt={reviewImages.thirdPicImage.alt}
          />
          <h3>julia deo</h3>
          <div className={styles.stars}>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaRegStar></FaRegStar>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </article>
      </div>
    </section>
  );
}
