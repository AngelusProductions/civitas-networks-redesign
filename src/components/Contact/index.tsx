import { KeyTextField } from "@prismicio/client";

import "./styles/index.scss";
import Link from "next/link";

type ContactProps = { id: string, title: KeyTextField, description?: KeyTextField, videoUrl?: string };

const Contact = ({ id, title, description, videoUrl }: ContactProps) => {
  return (
    <div id={id} className='contact'>
      <div className='contactTextContainer'>
        <h1 className='contactTitle'>{title}</h1>
        <p className='contactDescription'>{description}</p>
        <Link className='clickable cta' href='/contact'>Contact Us</Link>
      </div>
      <div className='contactVideoContainer'>
        <video loop autoPlay muted className='contactVideo' src={videoUrl} />
        <div className='contactVideoBackground border orange' />
      </div>
    </div>
  );
};

export default Contact;
