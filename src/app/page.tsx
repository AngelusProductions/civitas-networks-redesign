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
            <section id="homeTitleSection" className='homeSection'>
                <h1 id='homeTitle'>{data.title}</h1>
                <h2 id='homeSubtitle1'>{data.subtitle1}</h2>
                <h2 id='homeSubtitle2'>{data.subtitle2}</h2>
                <div id='homeHeroContainer'>
                    <img id='homeHero' src={i.home.hero} alt="Hero Image" />
                    <img id='cFlakesHomeHero2' src={i.cFlakes.home.hero.two} className='cFlakes front' />
                    <div id='homeHeroImageBackground' />
                </div>
                <img id='cFlakesHomeHero1' src={i.cFlakes.home.hero.one} className='cFlakes back' />
            </section>
            <section id='homeAboutSection' className='homeSection'>
                <div id='homeAboutContainer'>
                    <div id='homeAboutImageContainer'>
                        <img id='homeAboutImage' src={i.home.about} />
                        <img id='cFlakesHomeAbout3' src={i.cFlakes.home.about.three} className='cFlakes front' />
                        <div id='homeAboutImageBackground' />
                    </div>
                    <div id='homeAboutTextContainer'>
                        <h1 id='homeAboutTitle'>About</h1>
                        <p id='homeAboutText'>{data.about}</p>
                    </div>
                </div>
                <img id='cFlakesHomeAbout1' src={i.cFlakes.home.about.one} className='cFlakes back' />
                <img id='cFlakesHomeAbout2' src={i.cFlakes.home.about.two} className='cFlakes back' />
            </section>
        </main>
    );
}

export async function generateMetadata() {
    return await getMetadata(client);
}
