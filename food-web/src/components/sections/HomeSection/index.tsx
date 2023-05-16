import Image from "next/image";
import { home } from "@/data/illustrations";
import ButtonComponent from "@/components/buttons/ButtonSections";
import styles from "./style.module.scss";

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
        <Image src={home.source} alt={home.alt} width={500} height={500} priority={false} />
      </figure>
    </section>
  );
}
