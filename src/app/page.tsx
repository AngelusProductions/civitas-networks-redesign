import { createClient } from "@/prismicio";

import { Home } from "./types";
import { getMetadata } from "./metadata";

const client = createClient();

export default async function Home() {
  const { data }: { data: Home } = await client.getSingle("home");

  return (
    <main>
      <div className="">
        
      </div>
    </main>
  );
}

export async function generateMetadata() {
  return await getMetadata(client);
}
