import { KeyTextField } from "@prismicio/client";

import "./styles/index.scss";
import Link from "next/link";

type ContactProps = { id: string, title: KeyTextField, description?: KeyTextField, videoUrl?: string, isImage?: boolean };

const Contact = ({ id, title, description, videoUrl, isImage }: ContactProps) => {
  return (
    <div id={id} className='contact'>
      <div className='contactTextContainer'>
        <h1 className='contactTitle'>{title}</h1>
        <p className='contactDescription'>{description}</p>
        <Link className='clickable cta' href='/contact'>Contact Us</Link>
      </div>
      <div className='contactVideoContainer'>
        {isImage ? (
          <img className='contactVideo' src={videoUrl} />
        ) : (
          <video loop autoPlay muted playsInline className='contactVideo' src={videoUrl} />
        )}
        <div className='contactVideoBackground border orange' />
      </div>
    </div>
  );
};

export default Contact;
