import { client } from "@/lib/sanity";
import { Props } from "@/pages";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps<Props> = async () => {
  const header = await client.fetch(
    `*[_type == "header"] | order(_createdAt asc)`
  );
  const home = await client.fetch(`*[_type == "home"]`);
  const speciality = await client.fetch(
    `*[_type == "speciality"] | order(_createdAt desc)`
  );
  const popular = await client.fetch(
    `*[_type == "popular"] | order(_createdAt desc)`
  );
  const steps = await client.fetch(
    `*[_type == "steps"] | order(_createdAt desc)`
  );
  const gallery = await client.fetch(
    `*[_type == "gallery"] | order(_createdAt desc)`
  );
  const review = await client.fetch(
    `*[_type == "review"] | order(_createdAt desc)`
  );
  const order = await client.fetch(`*[_type == "order"]`);
  const footer = await client.fetch(
    `*[_type == "footer"] | order(_createdAt asc)`
  );
  const loader = await client.fetch(`*[_type == "loader"]`);

  return {
    props: {
      header,
      home,
      speciality,
      popular,
      steps,
      gallery,
      review,
      order,
      footer,
      loader,
    },
  };
};
