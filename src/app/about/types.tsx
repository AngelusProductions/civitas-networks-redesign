import { KeyTextField } from "@prismicio/client";

export type About = {
    title: KeyTextField;
    subtitle: KeyTextField;
    description: KeyTextField;

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