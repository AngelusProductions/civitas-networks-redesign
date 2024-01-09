'use client';

import { useState, useEffect } from "react";
import { createClient } from "@/prismicio";
import Link from "next/link";

import { Home } from "./types";

import i from '@/constants/assets'

import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

import "./styles/index.scss";

const client = createClient();

export default function Home() {
    const [data, setData] = useState<any>(null);
    
    useEffect(() => {
        client.getSingle("home")
            .then(({ data }) => setData(data))
    }, []);

    if(!data) {
        return <div style={{ height: '100vh' }}/>
    }
    return (
        <main id="home" className='page'>
            <section id="homeTitleSection" className='section'>
                <h1 id='homeTitle'>{data.title}</h1>
                <h2 id='homeSubtitle1'>{data.subtitle1}</h2>
                <h2 id='homeSubtitle2'>{data.subtitle2}</h2>
                <div id='homeHeroContainer'>
                    <video loop autoPlay muted playsInline id='homeHero' src={i.home.hero} />
                    {/* <img id='cFlakesHomeHero2' src={i.cFlakes.home.hero.two} className='cFlakes front' /> */}
                    <div id='homeHeroImageBackground' className='border blue' />
                </div>
                <img id='cFlakesHomeHero1' src={i.cFlakes.home.hero.one} className='cFlakes back' />
            </section>
            <section id='homeAboutSection' className='section'>
                <div id='homeAboutContainer'>
                    <div id='homeAboutImageContainer'>
                        <video loop autoPlay muted id='homeAboutImage' src={i.home.about} />
                        {/* <img id='cFlakesHomeAbout3' src={i.cFlakes.home.about.three} className='cFlakes front' /> */}
                        <div id='homeAboutImageBackground' className='border orange' />
                    </div>
                    <div id='homeAboutTextContainer'>
                        <h1 id='homeAboutTitle'>About</h1>
                        <p id='homeAboutText'>{data.about}</p>
                    </div>
                </div>
                <img id='cFlakesHomeAbout1' src={i.cFlakes.home.about.one} className='cFlakes back' />
                <img id='cFlakesHomeAbout2' src={i.cFlakes.home.about.two} className='cFlakes back' />
            </section>
            <section id='homeServicesSection' className='section'>
                <div id='homeServicesTopContainer'>
                    <div id='homeServicesTitleContainer'>
                        <h1 id='homeServicesTitle' className='homeTitle'>Services</h1>
                        <h2 id='homeServicesSubtitle'>{data.services}</h2>
                    </div>
                    <hr id='homeServicesDivider' />
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
                        <div id='homeServicesImageBackground' className='border blue' />
                        <img id='cFlakesHomeServices1' src={i.cFlakes.home.services.one} className='cFlakes front' />
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
                            <Link href='/services' id='homeServicesTextButton' className='cta clickable'>Visit Services Page</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section id='homeWhyCivitasSection' className='section'>
                <div id='homeWhyCivitasLeftContainer'>
                    <h1 id='homeWhyCivitasTitle' className='homeTitle'>{data.why_civitas_title}</h1>
                    <p className='homeWhyCivitasText'>{data.why_civitas_paragraph_one}</p>
                    <p className='homeWhyCivitasText'>{data.why_civitas_paragraph_two}</p>
                    <p className='homeWhyCivitasText'>{data.why_civitas_paragraph_three}</p>
                    <b className='homeWhyCivitasText'>{data.why_civitas_paragraph_four}</b>
                    <Link href='/about' id='homeWhyCivitasButton' className='cta clickable'>Visit About Page</Link>
                </div>
                <div id='homeWhyCivitasRightContainer'>
                    <img id='homeWhyCivitasImage' src={i.home.whyCivitas} />
                    <img id='cFlakesHomeWhyCivitas1' src={i.cFlakes.home.whyCivitas.one} className='cFlakes back' />
                </div>
            </section>
            <section id='homeFaqSection' className='section'>
                <h1 id='homeFaqTitle' className='homeTitle'>FAQ</h1>
                <img id='cFlakesHomeFaq1' src={i.cFlakes.home.faq.one} className='cFlakes back' />
                <FAQ id='faqHome1' title={data.faq_one_title} description={data.faq_one_description} />
                <FAQ id='faqHome2' title={data.faq_two_title} renderDescription={
                    <div id='faqHome2TextContainer'>
                        <b>{data.faq_two_description_intro}</b>
                        <ul>
                            <li>- {data.faq_two_description_bullet_one}</li>
                            <li>- {data.faq_two_description_bullet_two}</li>
                            <li>- {data.faq_two_description_bullet_three}</li>
                            <li>- {data.faq_two_description_bullet_four}</li>
                        </ul>
                    </div>
                }/>
                <FAQ id='faqHome3' title={data.faq_three_title} description={data.faq_three_description} />
                <FAQ id='faqHome4' title={data.faq_four_title} description={data.faq_four_description} />
            </section>
            <section id='homeContactSection' className='section'>
                <img id='cFlakesHomeContact1' src={i.cFlakes.home.contact.one} className='cFlakes back' />
                <img id='cFlakesHomeContact2' src={i.cFlakes.home.contact.two} className='cFlakes back' />
                <Contact 
                    id='contactHome' 
                    title={data.contact_title} 
                    description={data.contact_description} 
                    videoUrl={i.home.contact}
                />
            </section>
        </main>
    );
}
