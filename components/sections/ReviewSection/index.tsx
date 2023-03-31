import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import { FaStar, FaRegStar } from "react-icons/fa";
import firstPicImg from "../../../assets/review/pic1.png";
import secondPicImg from "../../../assets/review/pic2.png";
import thirdPicImg from "../../../assets/review/pic3.png";

const reviewImages = {
  firstPicImage: {
    source: firstPicImg,
    alt: "joana",
  },
  secondPicImage: {
    source: secondPicImg,
    alt: "jonh",
  },
  thirdPicImage: {
    source: thirdPicImg,
    alt: "julia",
  },
};

export default function ReviewSection() {
  return (
    <section className={styles.review} id="review">
      <h1 className={styles.heading}>
        our customers <span>reviews</span>
      </h1>
      <div className={styles.boxContainer}>
        <div className={styles.box}>
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
        </div>

        <div className={styles.box}>
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
        </div>

        <div className={styles.box}>
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
        </div>
      </div>
    </section>
  );
}
