'use client';
import { useState } from "react";
import { KeyTextField } from "@prismicio/client";

import i from '@/constants/assets'

import "./styles/index.scss";

type ContactProps = { id: string, title: KeyTextField, description?: KeyTextField, imageUrl?: string };

const Contact = ({ id, title, description, imageUrl }: ContactProps) => {
  return (
    <div id={id} className='contact'>
      Contact
    </div>
  );
};

export default Contact;
