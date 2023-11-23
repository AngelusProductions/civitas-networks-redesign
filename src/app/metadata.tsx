import type { Metadata } from "next";

import { Home } from "./types";

export async function getMetadata(client: any): Promise<Metadata> {
  const { data } : { data: Home } = await client.getSingle("home");

  return {
    title: data.meta_title,
    description: data.meta_description,
    openGraph: {
      title: data.meta_title?.toString(),
      description: data.meta_description?.toString(),
      type: "website",
      url: "https://civitasnetworks.com",
      images: [
        {
          url: data.meta_image?.url,
          width: data.meta_image?.dimensions?.width,
          height: data.meta_image?.dimensions?.height,
          alt: data.meta_title?.toString(),
        },
      ],
    }
  };
}