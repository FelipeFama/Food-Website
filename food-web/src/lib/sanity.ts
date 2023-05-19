import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "ja152qjd",
  dataset: "production",
  apiVersion: "2023-05-10",
  useCdn: false,
});
