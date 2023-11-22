import { createClient } from "@/prismicio";

export default async function About() {
  const client = createClient();
  const { data } = await client.getSingle("about");

  return (
    <main>
      <h1>{data.title}</h1>
      <p>{data.subtitle}</p>
    </main>
  );
}
