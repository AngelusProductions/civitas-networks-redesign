import { KeyTextField } from "@prismicio/client";

export type Services = {
    title: KeyTextField;
    subtitle: KeyTextField;
    description: KeyTextField;
    service_examples_title: KeyTextField;
    service_example_title_1: KeyTextField;
    service_example_description_1: KeyTextField;
    service_example_title_2: KeyTextField;
    service_example_description_2: KeyTextField;
    service_example_title_3: KeyTextField;
    service_example_description_3: KeyTextField;
    service_example_title_4: KeyTextField;
    service_example_description_4: KeyTextField;
    benefits_title: KeyTextField;
    benefits_subtitle_1: KeyTextField;
    benefits_description_1: KeyTextField;
    benefits_subtitle_2: KeyTextField;
    benefits_description_2: KeyTextField;
    benefits_subtitle_3: KeyTextField;
    benefits_description_3: KeyTextField;
    faq_question_1: KeyTextField;
    faq_answer_1: KeyTextField;
    faq_question_2: KeyTextField;
    faq_answer_2_intro: KeyTextField;
    faq_answer_2_bullet_1: KeyTextField;
    faq_answer_2_bullet_2: KeyTextField;
    faq_answer_2_bullet_3: KeyTextField;
    faq_answer_2_bullet_4: KeyTextField;
    faq_question_3: KeyTextField;
    faq_answer_3: KeyTextField;
    faq_question_4: KeyTextField;
    faq_answer_4: KeyTextField;
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