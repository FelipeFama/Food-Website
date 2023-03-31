import Image from "next/image";
import homeImg from "../../../assets/home-img.png";
import styles from "./style.module.scss";
import ButtonComponent from "@/components/buttons/ButtonSections";

const home = {
  homeImage: {
    source: homeImg,
    alt: "burger",
  },
};

export default function HomeSection() {
  return (
    <section className={styles.home} id="home">
      <article className={styles.content}>
        <h3>food made with love</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
          accusamus tempore temporibus rem amet laudantium animi optio
          voluptatum. Natus obcaecati unde porro nostrum ipsam itaque impedit
          incidunt rem quisquam eos!
        </p>
        <ButtonComponent>Order Now</ButtonComponent>
      </article>

      <figure className={styles.image}>
        <Image
          src={home.homeImage.source}
          alt={home.homeImage.alt}
          width={500}
          height={500}
        />
      </figure>
    </section>
  );
}
