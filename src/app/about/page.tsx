import { createClient } from "@/prismicio";

import i from '@/constants/assets'

import { About } from "./types";
import { getMetadata } from "./metadata";

import "./styles/index.scss";

const client = createClient();

export default async function About() {
  const { data }: { data: About } = await client.getSingle("about");
  
  return (
    <main id='about' className='page'>
      <section id='aboutTitleSection' className='section'>
        <img id='cFlakesAboutHero1' src={i.cFlakes.about.hero.one} className='cFlakes back' />
        <h1 id='aboutTitle'>{data.title}</h1>
        <h2 id='aboutSubtitle'>{data.subtitle}</h2>
        <img id='aboutTopImage' src={i.about.top} />
        <p id='aboutTitleDescription'>{data.description}</p>
        <div id='aboutHeroContainer'>
          <img id='cFlakesAboutHero2' src={i.cFlakes.about.hero.two} className='cFlakes back' />
          <video loop autoPlay muted id='aboutHero' src={i.about.hero} />
          <div id='aboutHeroImageBorder' className='border blue' />
        </div>
      </section>
    </main>
  );
}

export async function generateMetadata() {
  return await getMetadata(client);
}