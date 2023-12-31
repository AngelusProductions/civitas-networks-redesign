import { KeyTextField } from "@prismicio/client";

export type About = {
    title: KeyTextField;
    subtitle: KeyTextField;
    description: KeyTextField;
    selling_points_title: KeyTextField;
    selling_point_1: KeyTextField;
    selling_point_2: KeyTextField;
    selling_point_3: KeyTextField;
    selling_point_4: KeyTextField;
    mission_statement_title: KeyTextField;
    mission_statement_1: KeyTextField;
    mission_statement_2: KeyTextField;
    security_title: KeyTextField;
    security_description: KeyTextField;
    environment_title: KeyTextField;
    environment_description_1: KeyTextField;
    environment_description_2: KeyTextField;
    environment_description_3: KeyTextField;
    conclusion_title: KeyTextField;
    conclusion_1: KeyTextField;
    conclusion_2: KeyTextField;
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