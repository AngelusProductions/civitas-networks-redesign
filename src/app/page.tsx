import { createClient } from "@/prismicio";

import { Home } from "./types";
import { getMetadata } from "./metadata";

import i from '@/constants/assets'

import "./styles/index.scss";

const client = createClient();

export default async function Home() {
    const { data }: { data: Home } = await client.getSingle("home");
    
    return (
        <main id="home">
            <section id="homeTitleSection">
                <h1 id='homeTitle'>{data.title}</h1>
                <h2 id='homeSubtitle1'>{data.subtitle1}</h2>
                <h2 id='homeSubtitle2'>{data.subtitle2}</h2>
                <div id='homeHeroContainer'>
                    <img id='homeHero' src={i.home.hero} alt="Hero Image" />
                    <img id='cFlakesHomeHero2' src={i.cFlakes.two} className='cFlakes front' />
                    <div id='homeHeroBackground' />
                </div>
                <img id='cFlakesHomeHero1' src={i.cFlakes.one} className='cFlakes back' />
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
