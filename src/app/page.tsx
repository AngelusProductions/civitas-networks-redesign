import { createClient } from "@/prismicio";
import Image from "next/image";

import { Home } from "./types";
import { getMetadata } from "./metadata";

import "./styles/index.scss";

const client = createClient();

export default async function Home() {
    const { data }: { data: Home } = await client.getSingle("home");

    return (
        <main id="home">
            <section id="homeTitleSection">
                <h1>{data.title}</h1>
                <h2>{data.subtitle}</h2>
            </section>
            <section id='homeAboutSection'>
                {/* <Image
                  id='homeAboutSectionImage'
                  src='/images/about.png'
                  alt='About Image'
                  width={500}
                  height={500}
                /> */}
                {/* <div id='homeAboutSectionContent'>
                  <h2>About</h2>
                  <hr />
                  <p>{data.about}</p>
                </div> */}
            </section>
        </main>
    );
}

export async function generateMetadata() {
    return await getMetadata(client);
}
