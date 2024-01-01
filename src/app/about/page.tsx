import { createClient } from "@/prismicio";

import i from '@/constants/assets'

import Contact from "@/components/Contact";

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
        <div id='aboutMissionStatementContainer'>
          <div id='aboutMissionStatementImageContainer'>
            <img id='cFlakesAboutMissionStatement1' src={i.cFlakes.about.missionStatement.one} className='cFlakes front' />
            <img id='aboutMissionStatementImage' src={i.about.missionStatement} />
            <div id='aboutMissionStatementImageBorder' className='border blue' />
          </div>
          <div id='aboutMissionStatementTextContainer'>
            <p id='aboutMissionStatementText1'>{data.mission_statement_1}</p>
            <p id='aboutMissionStatementText2'>{data.mission_statement_2}</p>
          </div>
        </div>
      </section>
      <section id='aboutSecuritySection' className='section'>
        <div id='aboutSecurityImageContainer'>
          <img id='cFlakesAboutSecurity1' src={i.cFlakes.about.security.one} className='cFlakes back' />
          <video loop autoPlay muted id="aboutSecurityImage" src={i.about.security} />
          <div id='aboutSecurityImageBorder' className='border orange' />
        </div>
        <div id='aboutSecurityContainer'>
          <h1 id='aboutSecurityTitle'>{data.security_title}</h1>
          <div id='aboutSecurityTextContainer'>
            <p id='aboutSecurityText'>{data.security_description}</p>
            <hr id='aboutSecurityDivider' />
          </div>
        </div>      
      </section>
      <section id='aboutEnvironmentSection' className='section'>
        <div id='aboutEnvironmentTitleContainer'>
          <img id='cFlakesAboutEnvironment1' src={i.cFlakes.about.environment.one} className='cFlakes back' />
          <img id='aboutEnvironmentTitleImage' src={i.about.environment1} />
          <h1 id='aboutEnvironmentTitle'>{data.environment_title}</h1>
        </div>
        <div className='aboutEnvironmentContainer'>
          <div className='aboutEnvironmentContentContainer'>
            <img id='cFlakesAboutEnvironment2' src={i.cFlakes.about.environment.two} className='cFlakes back' />
            <p className='aboutEnvironmentText'>{data.environment_description_1}</p>
            <video loop autoPlay muted className='aboutEnvironmentImage' src={i.about.environment2} />
          </div>
          <hr className='aboutEnvironmentDivider' />
        </div>
        <div className='aboutEnvironmentContainer'>
          <div className='aboutEnvironmentContentContainer'>
            <img id='cFlakesAboutEnvironment3' src={i.cFlakes.about.environment.three} className='cFlakes back' />
            <p className='aboutEnvironmentText'>{data.environment_description_2}</p>
            <img className='aboutEnvironmentImage' src={i.about.environment3} />
          </div>
          <hr className='aboutEnvironmentDivider' />
        </div>
        <div className='aboutEnvironmentContainer'>
          <div className='aboutEnvironmentContentContainer'>
            <img id='cFlakesAboutEnvironment4' src={i.cFlakes.about.environment.four} className='cFlakes back' />
            <p className='aboutEnvironmentText'>{data.environment_description_3}</p>
            <video loop autoPlay muted className='aboutEnvironmentImage' src={i.about.environment4} />
          </div>
          <hr className='aboutEnvironmentDivider' />
        </div>
      </section>
      <section id='aboutConclusionSection' className='section'>
        <h1 id='aboutConclusionTitle'>{data.conclusion_title}</h1>
        <div id="aboutConclusionTextContainer">
          <p id='aboutConclusionText1' className='aboutConclusionText'>{data.conclusion_1}</p>
          <p id='aboutConclusionText2' className='aboutConclusionText'>{data.conclusion_2}</p>
        </div>
      </section>
      <section id='aboutContactSection'>
          <img id='cFlakesAboutContact1' src={i.cFlakes.about.contact.one} className='cFlakes back' />
          <img id='cFlakesAboutContact2' src={i.cFlakes.about.contact.two} className='cFlakes back' />
          <Contact 
              id='contactAbout' 
              title={data.contact_title} 
              description={data.contact_description} 
              videoUrl={i.about.contact}
          />
      </section>
    </main>
  );
}

export async function generateMetadata() {
  return await getMetadata(client);
}