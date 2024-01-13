import Image from "next/image";
import styles from "./style.module.scss";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "@/lib/sanity";
import { Speciality as SpecialityComponent } from "@/types/sections/speciality";

interface SpecialityProps {
  speciality: SpecialityComponent[];
}

export default function SpecialitySection({ speciality }: SpecialityProps) {
  return (
    <section className={styles.speciality} id="speciality">
      <h1 className={styles.heading}>
        our <span>speciality</span>
      </h1>
      <div className={styles.boxContainer}>
        {speciality.map((item: SpecialityComponent) => (
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
              {item.icon && (
                <Image
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  {...useNextSanityImage(client, item.icon.asset._ref)}
                  alt={item.icon.alt}
                  priority={false}
                />
              )}
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
