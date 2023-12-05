import { KeyTextField } from "@prismicio/client";

export type Home = {
    title: KeyTextField;
    subtitle1: KeyTextField;
    subtitle2: KeyTextField;
    about: KeyTextField;
    services: KeyTextField;
    service_one_name: KeyTextField;
    service_one_description: KeyTextField;
    service_two_name: KeyTextField;
    service_two_description: KeyTextField;
    service_three_name: KeyTextField;
    service_three_description: KeyTextField;
    why_civitas_title: KeyTextField;
    why_civitas_paragraph_one: KeyTextField;
    why_civitas_paragraph_two: KeyTextField;
    why_civitas_paragraph_three: KeyTextField;
    why_civitas_paragraph_four: KeyTextField;
    faq_one_title: KeyTextField;
    faq_one_description: KeyTextField;
    faq_two_title: KeyTextField;
    faq_two_description_intro: KeyTextField;
    faq_two_description_bullet_one: KeyTextField;
    faq_two_description_bullet_two: KeyTextField;
    faq_two_description_bullet_three: KeyTextField;
    faq_two_description_bullet_four: KeyTextField;
    faq_three_title: KeyTextField;
    faq_three_description: KeyTextField;
    faq_four_title: KeyTextField;
    faq_four_description: KeyTextField;
    contact_title: KeyTextField;
    contact_description: KeyTextField;

    meta_title: KeyTextField;
    meta_description: KeyTextField;
    meta_image: { 
        url: string; 
        dimensions: { 
            width: number; 
            height: number; 
        };
    };
}