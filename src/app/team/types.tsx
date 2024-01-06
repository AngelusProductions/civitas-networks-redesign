import { KeyTextField } from "@prismicio/client";

export type Team = {
    title: KeyTextField;
    subtitle: KeyTextField;
    partners_title: KeyTextField;
    partners_description: KeyTextField;
    family_title: KeyTextField;
    family_description: KeyTextField;
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