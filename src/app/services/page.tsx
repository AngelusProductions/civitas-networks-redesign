import { createClient } from "@/prismicio";

import i from '@/constants/assets'

import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";

import { Services } from "./types";
import { getMetadata } from "./metadata";

import "./styles/index.scss";

const client = createClient();

export default async function Services() {
  const { data }: { data: Services } = await client.getSingle("services");
  return (
    <main id='services' className='page'>
      <section id='servicesTitleSection' className='section'>
        <h1 id='servicesTitle'>{data.title}</h1>
        <img id='cFlakesServicesTop1' src={i.cFlakes.services.top.one} className='cFlakes back' />
        <div id='servicesTopContainer'>
          <div id='servicesTopLeftContainer'>
            <img id='servicesTopLeftImage' src={i.services.top1} />
            <p id='servicesTopLeftText'>{data.subtitle}</p>
          </div>
          <img id='cFlakesServicesTop2' src={i.cFlakes.services.top.two} className='cFlakes back' />
          <img id='servicesTopRightImage' src={i.services.top2} />
        </div>
        <hr id='servicesTitleDivider1' />
        <p id='servicesTitleDescription'>{data.description}</p>
        <hr id='servicesTitleDivider2' />
      </section>
      <section id='servicesExamplesSection' className='section'>
        <h2 id='servicesExamplesTitle'>{data.service_examples_title}</h2>
        <img id='cFlakesServicesExamples1' src={i.cFlakes.services.examples.one} className='cFlakes back' />
        <div id='servicesExamplesContainer'>
          <div className='servicesExample'>
            <video loop autoPlay muted className='servicesExampleImage' src={i.services.example1} />
            <div className='servicesExampleTextContainer'>
              <h3 className='servicesExampleTitle'>{data.service_example_title_1}</h3>
              <p className='servicesExampleDescription'>{data.service_example_description_1}</p>
            </div>
          </div>
          <hr className='servicesExampleDivider' />
          <div className='servicesExample'>
            <img className='servicesExampleImage' src={i.services.example2} />
            <div className='servicesExampleTextContainer'>
              <h3 className='servicesExampleTitle'>{data.service_example_title_2}</h3>
              <p className='servicesExampleDescription'>{data.service_example_description_2}</p>
            </div>
          </div>
          <hr className='servicesExampleDivider' />
          <div className='servicesExample'>
            <img className='servicesExampleImage' src={i.services.example3} />
            <div className='servicesExampleTextContainer'>
              <h3 className='servicesExampleTitle'>{data.service_example_title_3}</h3>
              <p className='servicesExampleDescription'>{data.service_example_description_3}</p>
            </div>
          </div>
          <hr className='servicesExampleDivider' />
          <div className='servicesExample'>
            <video loop autoPlay muted className='servicesExampleImage' src={i.services.example4} />
            <div className='servicesExampleTextContainer'>
              <h3 className='servicesExampleTitle'>{data.service_example_title_4}</h3>
              <p className='servicesExampleDescription'>{data.service_example_description_4}</p>
            </div>
          </div>
          <hr className='servicesExampleDivider' />
        </div>
      </section>
      <section id='servicesBenefitsSection' className='section'>
        <h2 id='servicesBenefitsTitle'>{data.benefits_title}</h2>
        <img id='cFlakesServicesBenefits1' src={i.cFlakes.services.benefits.one} className='cFlakes front' />
        <div id='servicesBenefitsContainer'>
          <div className='servicesBenefit'>
            <h3 className='servicesBenefitTitle'>{data.benefits_subtitle_1}</h3>
            <p className='servicesBenefitDescription'>{data.benefits_description_1}</p>
          </div>
          <hr className='servicesBenefitDivider' />
          <div className='servicesBenefit'>
            <h3 className='servicesBenefitTitle'>{data.benefits_subtitle_2}</h3>
            <p className='servicesBenefitDescription'>{data.benefits_description_2}</p>
          </div>
          <hr className='servicesBenefitDivider' />
          <div className='servicesBenefit'>
            <h3 className='servicesBenefitTitle'>{data.benefits_subtitle_3}</h3>
            <p className='servicesBenefitDescription'>{data.benefits_description_3}</p>
          </div>
          <hr className='servicesBenefitDivider' />
        </div>
      </section>
      <section id='servicesFaqSection' className='section'>
        <h1 id='servicesFaqTitle'>FAQ</h1>
        <img id='cFlakesServicesFaq1' src={i.cFlakes.home.faq.one} className='cFlakes back' />
        <FAQ id='faqServices1' title={data.faq_question_1} description={data.faq_answer_1} />
        <FAQ id='faqServices2' title={data.faq_question_2} renderDescription={
            <div id='faqServices2TextContainer'>
                <b>{data.faq_answer_2_intro}</b>
                <ul>
                    <li>- {data.faq_answer_2_bullet_1}</li>
                    <li>- {data.faq_answer_2_bullet_2}</li>
                    <li>- {data.faq_answer_2_bullet_3}</li>
                    <li>- {data.faq_answer_2_bullet_4}</li>
                </ul>
            </div>
        }/>
        <FAQ id='faqServices3' title={data.faq_question_3} description={data.faq_answer_3} />
        <FAQ id='faqServices4' title={data.faq_question_4} description={data.faq_answer_4} />
      </section>
      <section id='servicesContactSection' className='section'>
          <img id='cFlakesServicesContact1' src={i.cFlakes.services.contact.one} className='cFlakes back' />
          <img id='cFlakesServicesContact2' src={i.cFlakes.services.contact.two} className='cFlakes back' />
          <Contact 
              id='contactServices' 
              title={data.contact_title} 
              description={data.contact_description} 
              videoUrl={i.services.contact}
          />
      </section>
    </main>
  );
}

export async function generateMetadata() {
  return await getMetadata(client);
}