import { createClient } from "@/prismicio";

export default async function Home(props: any) {
  const client = createClient();
  const { data } = await client.getSingle("home");
  
  return <main>
    <h1 className='font-display'>{data.title}</h1>
    <h2>{data.subtitle}</h2>
  </main>
}