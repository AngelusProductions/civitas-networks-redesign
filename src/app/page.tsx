import { createClient } from "@/prismicio";

import { Home } from "./types";
import { getMetadata } from "./metadata";

import i from '@/constants/assets'

import "./styles/index.scss";
import Link from "next/link";

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
                    <video loop autoPlay muted id='homeHero' src={i.home.hero} />
                    {/* <img id='cFlakesHomeHero2' src={i.cFlakes.home.hero.two} className='cFlakes front' /> */}
                    <div id='homeHeroImageBackground' />
                </div>
                <img id='cFlakesHomeHero1' src={i.cFlakes.home.hero.one} className='cFlakes back' />
            </section>
            <section id='homeAboutSection' className='homeSection'>
                <div id='homeAboutContainer'>
                    <div id='homeAboutImageContainer'>
                        <video loop autoPlay id='homeAboutImage' src={i.home.about} />
                        {/* <img id='cFlakesHomeAbout3' src={i.cFlakes.home.about.three} className='cFlakes front' /> */}
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
            <section id='homeServicesSection' className='homeSection'>
                <div id='homeServicesTopContainer'>
                    <div id='homeServicesTitleContainer'>
                        <h1 id='homeServicesTitle' className='homeTitle'>Services</h1>
                        <h2 id='homeServicesSubtitle'>{data.services}</h2>
                    </div>
                    <div id='homeServicesStatsContainer'>
                        <div className='homeServicesStatContainer'>
                            <h1 className='homeServicesStatNumber'>{data.services_experience}</h1>
                            <h2 className='homeServicesStatTitle'>EXPERIENCE</h2>
                        </div>
                        <div className='homeServicesStatContainer'>
                            <h1 className='homeServicesStatNumber'>{data.services_projects}</h1>
                            <h2 className='homeServicesStatTitle'>PROJECTS</h2>
                        </div>
                    </div>
                </div>
                <div id='homeServicesBottomContainer'>
                    <div id='homeServicesImageContainer'>
                        <img id='homeServicesImage' src={i.home.services} />
                        <div id='homeServicesImageBackground' />
                    </div>
                    <div id='homeServicesTextContainer'>
                        <div id='homeServicesText1' className='homeServicesTextContainer'>
                            <h3 id='homeServicesTextTitle1' className='homeServicesTextTitle'>{data.service_one_name}</h3>
                            <p id='homeServicesTextDescription1' className='homeServicesTextDescription'>{data.service_one_description}</p>
                        </div>
                        <div id='homeServicesText2' className='homeServicesTextContainer'>
                            <h3 id='homeServicesTextTitle2' className='homeServicesTextTitle'>{data.service_two_name}</h3>
                            <p id='homeServicesTextDescription2' className='homeServicesTextDescription'>{data.service_two_description}</p>
                        </div>
                        <div id='homeServicesText3' className='homeServicesTextContainer'>
                            <h3 id='homeServicesTextTitle3' className='homeServicesTextTitle'>{data.service_three_name}</h3>
                            <p id='homeServicesTextDescription3' className='homeServicesTextDescription'>{data.service_three_description}</p>
                        </div>
                        <div id='homeServicesText4' className='homeServicesTextContainer'>
                            <h3 id='homeServicesTextTitle4' className='homeServicesTextTitle'>Want to know more?</h3>
                            <Link href='/services' id='homeServicesTextButton' className='clickable'>Visit Services Page</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export async function generateMetadata() {
    return await getMetadata(client);
}
