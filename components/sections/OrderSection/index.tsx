import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import orderImg from "../../../assets/order-img.jpg";
import ButtonComponent from "@/components/ButtonSections";

const orderImage = {
  source: orderImg,
  alt: "waitress",
};

export default function OrderSection() {
  return (
    <section className={styles.order} id="order">
      <h1 className={styles.heading}>
        <span>order</span> now
      </h1>

      <div className={styles.row}>
        <div className={styles.image}>
          <Image src={orderImage.source} alt={orderImage.alt} />
        </div>

        <form action="">
          <div className={styles.inputBox}>
            <input type="text" placeholder="name" />
            <input type="email" placeholder="email" />
          </div>

          <div className={styles.inputBox}>
            <input type="number" placeholder="number" />
            <input type="text" placeholder="food name" />
          </div>

          <textarea
            className={styles.textarea}
            placeholder="address"
            name="address"
            id="address"
            cols={30}
            rows={10}
          />
          <ButtonComponent>Order Now</ButtonComponent>
        </form>
      </div>
    </section>
  );
}
