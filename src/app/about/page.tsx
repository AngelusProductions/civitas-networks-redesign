import { createClient } from "@/prismicio";

import { About } from "./types";
import { getMetadata } from "./metadata";

const client = createClient();

export default async function About() {
  const { data }: { data: About } = await client.getSingle("about");

  return (
    <main>
      <h1>{data.title}</h1>
      <p>{data.subtitle}</p>
      <p>{data.description}</p>
    </main>
  );
}

export async function generateMetadata() {
  return await getMetadata(client);
}