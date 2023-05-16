import Image from "next/image";
import ButtonComponent from "@/components/buttons/ButtonSections";
import styles from "./style.module.scss";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "@/sanity";


interface HomeProps {
  home: Home[];
}

interface Home {
  title: string;
  description: string;
  image: {
    alt: string;
    asset: {
      _ref: string;
    };
  };
}

export default function HomeSection({ home }: HomeProps) {
  const item = home[0];

  return (
    <section className={styles.home} id="home">
      <article className={styles.content}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <ButtonComponent>Order Now</ButtonComponent>
      </article>
      <figure className={styles.image}>
        <Image
          className={styles.image}
          // eslint-disable-next-line react-hooks/rules-of-hooks
          {...useNextSanityImage(client, item.image.asset._ref)}
          alt={item.image.alt}
          width={500}
          height={500}
          priority={false}
        />
      </figure>
    </section>
  );
}
