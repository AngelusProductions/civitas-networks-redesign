import { KeyTextField } from "@prismicio/client";

export type Contact = {
    title: KeyTextField;
    subtitle: KeyTextField;

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