import { createClient } from "@/prismicio";

import i from '@/constants/assets'

import Contact from "@/components/Contact";

import { Team } from "./types";
import { getMetadata } from "./metadata";

import "./styles/index.scss";

const client = createClient();

export default async function Team() {
  const { data }: { data: Team } = await client.getSingle("team");
  return (
    <main id='team' className='page'>
      <section id='teamTitleSection' className='section'>
        <h1 id='teamTitle'>{data.title}</h1>
        <p id='teamSubtitle'>{data.subtitle}</p>
        <img id='cFlakesTeamTop1' src={i.cFlakes.team.top.one} className='cFlakes back' />
        <img id='cFlakesTeamTop2' src={i.cFlakes.services.examples.one} className='cFlakes back' />
      </section>
      <section id='teamPartnersSection' className='section'>
        <h2 id='teamPartnersTitle'>{data.partners_title}</h2>
        <p id='teamPartnersDescription'>{data.partners_description}</p>
        <div id='teamPartnersContainer'>
          <img className='teamPartnersImage' src={i.logos.squan} />
          <img className='teamPartnersImage' src={i.logos.meridian} />
          <img className='teamPartnersImage' src={i.logos.apex} />
          <img className='teamPartnersImage' src={i.logos.greenIsland} />
          <img className='teamPartnersImage' src={i.logos.dsg} />
        </div>
      </section>
      <section id='teamMembersSection' className='section'>
        <h2 id='teamMembersTitle'>{data.family_title}</h2>
        <p id='teamMembersDescription'>{data.family_description}</p>
        <div id='teamMembersTopContainer'>
          <div className='teamMember'>
            <img className='teamMemberImage' src={i.portraits.jerry} />
            <div className='teamMemberTextContainer'>
              <h3 className='teamMemberName'>Jerry Kirshman</h3>
              <p className='teamMemberTitle'>Founder and CEO</p>
            </div>
          </div>
          <div className='teamMember'>
            <img className='teamMemberImage' src={i.portraits.luke} />
            <div className='teamMemberTextContainer'>
              <h3 className='teamMemberName'>Luke Angelus</h3>
              <p className='teamMemberTitle'>Chief Revenue Officer</p>
            </div>
          </div>
          <div className='teamMember'>
            <img className='teamMemberImage' src={i.portraits.john} />
            <div className='teamMemberTextContainer'>
              <h3 className='teamMemberName'>John Collins</h3>
              <p className='teamMemberTitle'>Founder and COO</p>
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