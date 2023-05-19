import React from "react";
import Image from "next/image";
import ButtonComponent from "@/components/buttons/ButtonSections";
import styles from "./style.module.scss";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "@/lib/sanity";
import { Order as OrderComponent } from "@/types/sections/order";

interface OrderProps {
  order: OrderComponent[];
}

export default function OrderSection({ order }: OrderProps) {
  const item = order[0];

  return (
    <section className={styles.order} id="order">
      <h1 className={styles.heading}>
        <span>order</span> now
      </h1>

      <div className={styles.row}>
        <figure className={styles.image}>
          <Image // eslint-disable-next-line react-hooks/rules-of-hooks
            {...useNextSanityImage(client, item.image.asset._ref)}
            alt={item.image.alt}
            priority={false} />
        </figure>

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
