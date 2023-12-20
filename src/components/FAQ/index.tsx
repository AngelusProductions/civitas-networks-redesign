'use client';
import { useState } from "react";
import { KeyTextField } from "@prismicio/client";

import i from '@/constants/assets'

import "./styles/index.scss";

type FAQProps = { id: string, title: KeyTextField, description?: KeyTextField, renderDescription?: JSX.Element };

const FAQ = ({ id, title, description, renderDescription }: FAQProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div id={id} className='faq' onClick={() => setIsOpen(!isOpen)}>
      <div className='faqTitleContainer'>
        <h1 className='faqTitle'>{title}</h1>
        <button className='faqButton' onClick={() => setIsOpen(!isOpen)}>
          <img className={`faqButtonImage ${isOpen ? 'open' : 'closed'}`} src={i.icons.arrowUp} />
        </button>
      </div>
      {isOpen && renderDescription && renderDescription}
      {isOpen && description && <p className='faqDescription'>{description}</p>}
    </div>
  );
};

export default FAQ;
