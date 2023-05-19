import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import ButtonComponent from "@/components/buttons/ButtonSections";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "@/sanity";
import { Gallery as GalleryComponent } from "@/types/sections/gallery";

interface GalleryProps {
  gallery: GalleryComponent[];
}

export default function GallerySection({ gallery }: GalleryProps) {
  return (
    <section className={styles.gallery} id="gallery">
      <h1 className={styles.heading}>
        Our food <span>gallery</span>
      </h1>
      <div className={styles.boxContainer}>
        {gallery.map((item: GalleryComponent) => (
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
            <div className={styles.content}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ButtonComponent>Order Now</ButtonComponent>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
