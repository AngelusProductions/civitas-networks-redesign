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
      <section id='aboutSellingPointsSection' className='section'>
        <img id='cFlakesAboutSellingPoints1' src={i.cFlakes.about.sellingPoints.one} className='cFlakes back' />
        <img id='cFlakesAboutSellingPoints2' src={i.cFlakes.about.sellingPoints.two} className='cFlakes back' />
        <div id='aboutSellingPointsContainer'>
          <div id='aboutSellingPointsImageContainer'>
            <img id='aboutSellingPointsImage' src={i.about.sellingPoints} />
            <div id='aboutSellingPointsImageBorder' className='border orange' />
          </div>
          <div id='aboutSellingPointsTextContainer'>
            <h1 id='aboutSellingPointsTitle'>{data.selling_points_title}</h1>
            <div id='aboutSellingPointsText'>
              <div className='sellingPoint'>
                <span className='sellingPointNumber'>1</span>
                <span className='sellingPointDescription'>{data.selling_point_1}</span>
              </div>
              <div className='sellingPoint'>
                <span className='sellingPointNumber'>2</span>
                <span className='sellingPointDescription'>{data.selling_point_2}</span>
              </div>
              <div className='sellingPoint'>
                <span className='sellingPointNumber'>3</span>
                <span className='sellingPointDescription'>{data.selling_point_3}</span>
              </div>
              <div className='sellingPoint'>
                <span className='sellingPointNumber'>4</span>
                <span className='sellingPointDescription'>{data.selling_point_4}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='aboutMissionStatementSection' className='section'>
        <h1 id='aboutMissionStatementTitle'>{data.mission_statement_title}</h1>
        <div id='aboutMissionStatement'>
          <div id='aboutMissionStatementImageContainer'>
            <img id='cFlakesAboutMissionStatement1' src={i.cFlakes.about.missionStatement.one} className='cFlakes front' />
            <img id='aboutMissionStatementImage' src={i.about.missionStatement} />
            <div id='aboutMissionStatementImageBorder' className='border blue' />
          </div>
          <div id='aboutMissionStatementContainer'>
            <div id='aboutMissionStatementTextContainer'>
              <p id='aboutMissionStatementText1'>{data.mission_statement_1}</p>
              <p id='aboutMissionStatementText2'>{data.mission_statement_2}</p>
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