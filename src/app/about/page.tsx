import { createClient } from "@/prismicio";
import { About } from "./types";

export default async function About() {
  const client = createClient();
  const page = await client.getSingle("about");
  const data: About = page.data;

  return (
    <main>
      <h1>{data.title}</h1>
      <p>{data.subtitle}</p>
      <p>{data.description}</p>
    </main>
  );
}
