import { createClient } from "@/prismicio";

import { Home } from "./types";
import { getMetadata } from "./metadata";

const client = createClient();

export default async function Home() {
  const { data }: { data: Home } = await client.getSingle("home");
  console.log(data)
  return (
    <main>
      <h1 className="font-display">{data.title}</h1>
      <h2>{data.subtitle}</h2>
    </main>
  );
}

export async function generateMetadata() {
  return await getMetadata(client);
}
