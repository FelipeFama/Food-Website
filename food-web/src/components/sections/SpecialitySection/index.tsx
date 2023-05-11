import Image from "next/image";
import { iconsFood, specialityFoodImages } from "@/data/speciality";
import styles from "./style.module.scss";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "@/sanity";

export interface SpecialityProps {
  speciality:
    | {
        _id: string;
        title: string;
        description: string;
        image: {
          alt: string;
          source: string;
        };
        icon: {
          alt: string;
          source: string;
        };
      }[]
    | any;
}

export default function SpecialitySection({ speciality }: SpecialityProps) {
  console.log(speciality);
  const imageProps: any = useNextSanityImage(client, speciality.image);
  const iconProps: any = useNextSanityImage(client, speciality.icon);

  return (
    <section className={styles.speciality} id="speciality">
      <h1 className={styles.heading}>
        our <span>speciality</span>
      </h1>
      <div className={styles.boxContainer}>
        {speciality.map((item: any) => (
          <article key={item._id} className={styles.box}>
            {speciality.image && imageProps[speciality.image.asset._ref] && (
              <Image
                className={styles.Image}
                src={imageProps[speciality.image.asset._ref]?.source ?? ""}
                alt={speciality.image.alt}
              />
            )}
            <div className={styles.content}>
              {speciality.image && imageProps[speciality.image.asset._ref] && (
                <Image
                  className={styles.Image}
                  src={iconProps[speciality.icon.asset._ref]?.source ?? ""}
                  alt={speciality.icon.alt}
                />
              )}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
