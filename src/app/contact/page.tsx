// MyInteractiveComponent.js
/* @client */
"use client";

import React, { useState, useEffect, CSSProperties } from "react";
import { createClient } from "@/prismicio";
import ClockLoader from "react-spinners/ClockLoader";

import i from '@/constants/assets'

import { Contact } from "./types";

import "./styles/index.scss";

const client = createClient();

const spinnerCSS: CSSProperties = {
  display: "block",
  margin: "25vh auto 75vh auto",
};

const emailRegex = /\S+@\S+\.\S+/;
const phoneRegex = /^(?:\+?([0-9]{1,3})[-. ]?)?((\([0-9]{1,4}\))|[0-9]{1,4})(([-. ]?[0-9]{2,4}){2,})$/;

export default function Contact() {
  const [data, setData] = useState(null);

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

  useEffect(() => {
    const fetchData = async () => {
      const response = await client.getSingle("contact");
      setData(response.data);
    };

    fetchData();
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors = getErrors()
    
    if(!errors) {
      
      return;
    }
  };

  if(!data) {
    return <ClockLoader
      color="#EC9006"
      loading
      cssOverride={spinnerCSS}
      size={150}
    />
  }
  return (
    <main id='contact' className='page'>
      <h1 id='contactTitle'>{data?.title}</h1>
      <p id='contactDescription'>{data?.subtitle}</p>
      <img id='cFlakesContactTop1' src={i.cFlakes.contact.top.one} className='cFlakes back' />
      <form id='contactForm' onSubmit={handleSubmit}>
        <div className='contactFormFieldContainer'>
          <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
          {isNameError && <p className='contactFormValidationError'>{nameError}</p>}
        </div>
        <div className='contactFormFieldContainer'>
          <input type="text" placeholder='Email address' value={email} onChange={(e) => setEmail(e.target.value)} />
          {isEmailError && <p className='contactFormValidationError'>{emailError}</p>}
        </div>
        <div className='contactFormFieldContainer'>
          <input type="tel" placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
          {isPhoneError && <p className='contactFormValidationError'>{phoneError}</p>}
        </div>
        <div className='contactFormFieldContainer'>
          <input type="text" placeholder='Location / Address' value={location} onChange={(e) => setLocation(e.target.value)} />
          {isLocationError && <p className='contactFormValidationError'>{locationError}</p>}
        </div>
        <div className='contactFormFieldContainer'>
          <textarea value={message} placeholder="Message" onChange={(e) => setMessage(e.target.value)} />
          {isMessageError && <p className='contactFormValidationError'>{messageError}</p>}
        </div>
        <button type="submit" className='cta clickable'>Submit</button>
      </form>
    </main>
  );
}