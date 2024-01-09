'use client';

import React, { useState, useEffect, useRef } from "react";
import { createClient } from "@/prismicio";
import emailjs from "emailjs-com";

import i from '@/constants/assets'

import { Contact } from "./types";

import "./styles/index.scss";

const emailRegex = /\S+@\S+\.\S+/;
const phoneRegex = /^(?:\+?([0-9]{1,3})[-. ]?)?((\([0-9]{1,4}\))|[0-9]{1,4})(([-. ]?[0-9]{2,4}){2,})$/;

const client = createClient();

export default function Contact() {
  const [data, setData] = useState<any>(null);

  const [name, setName] = useState("");
  const [isNameError, setIsNameError] = useState(false);
  const [nameError, setNameError] = useState("");

  const [email, setEmail] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);
  const [emailError, setEmailError] = useState("");
  
  const [phone, setPhone] = useState("");
  const [isPhoneError, setIsPhoneError] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const [location, setLocation] = useState("");
  const [isLocationError, setIsLocationError] = useState(false);
  const [locationError, setLocationError] = useState("");

  const [message, setMessage] = useState("");
  const [isMessageError, setIsMessageError] = useState(false);
  const [messageError, setMessageError] = useState("");

  const [showThankYou, setShowThankYou] = useState(false);

  const contactFormRef: any = useRef();

  useEffect(() => {
    client.getSingle("contact")
      .then(({ data }) => setData(data))
  }, []);

  const getErrors = () => {
    if(!name) {
      setIsNameError(true);
      setNameError("Name is required");
    } else {
      setIsNameError(false);
      setNameError("");
    }

    if(!email) {
      setIsEmailError(true);
      setEmailError("Email is required");
    } else if (!emailRegex.test(email)) {
      setIsEmailError(true);
      setEmailError("Email address is invalid");
    } else {
      setIsEmailError(false);
      setEmailError("");
    }

    if(!phone) {
      setIsPhoneError(true);
      setPhoneError("Phone is required");
    } else if (!phoneRegex.test(phone)) {
      setIsPhoneError(true);
      setPhoneError("Phone number is invalid");
    } else {
      setIsPhoneError(false);
      setPhoneError("");
    }

    if(!location) {
      setIsLocationError(true);
      setLocationError("Location is required");
    } else {
      setIsLocationError(false);
      setLocationError("");
    }

    if(!message) {
      setIsMessageError(true);
      setMessageError("Message is required");
    } else {
      setIsMessageError(false);
      setMessageError("");
    }

    return !message || !location || !phone || !email || !name 
    || !emailRegex.test(email) || !phoneRegex.test(phone);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors = getErrors()
    
    if(!errors) {
      try {
        setName("");
        setEmail("");
        setPhone("");
        setLocation("");
        setMessage("");
        setShowThankYou(true);
        setTimeout(() => {
          setShowThankYou(false);
        }, 5000);
        
        emailjs.sendForm(
          "service_0vf8mgn",
          "template_asu2bdm",
          contactFormRef.current,
          'zKuwyAD1BHYCSHPoz'
        )
      } catch (err) {
        console.log(err);
      }
    }
  }

  if(!data) {
      return <div style={{ height: '100vh' }}/>
  }
  return (
    <main id='contact' className='page'>
      <h1 id='contactTitle'>{data?.title}</h1>
      <p id='contactDescription'>{data?.subtitle}</p>
      <img id='cFlakesContactTop1' src={i.cFlakes.contact.top.one} className='cFlakes back' />
      <form id='contactForm' onSubmit={handleSubmit} ref={contactFormRef}>
        <div className='contactFormFieldContainer'>
          <input type="text" name='name' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
          {isNameError && <p className='contactFormValidationError'>{nameError}</p>}
        </div>
        <div className='contactFormFieldContainer'>
          <input type="text" name='email' placeholder='Email address' value={email} onChange={(e) => setEmail(e.target.value)} />
          {isEmailError && <p className='contactFormValidationError'>{emailError}</p>}
        </div>
        <div className='contactFormFieldContainer'>
          <input type="tel" name='phone' placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
          {isPhoneError && <p className='contactFormValidationError'>{phoneError}</p>}
        </div>
        <div className='contactFormFieldContainer'>
          <input type="text" name='location' placeholder='Location / Address' value={location} onChange={(e) => setLocation(e.target.value)} />
          {isLocationError && <p className='contactFormValidationError'>{locationError}</p>}
        </div>
        <div className='contactFormFieldContainer'>
          <textarea value={message} placeholder="Message" name='message' onChange={(e) => setMessage(e.target.value)} />
          {isMessageError && <p className='contactFormValidationError'>{messageError}</p>}
        </div>
        {showThankYou && <p id='contactFormThankYou'>Thank you for your message</p>} 
        <button type="submit" className='cta clickable'>Submit</button>
      </form>
    </main>
  );
}