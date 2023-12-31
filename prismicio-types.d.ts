// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type AboutDocumentDataSlicesSlice = AboutSlice;

/**
 * Content for About documents
 */
interface AboutDocumentData {
  /**
   * Title field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Subtitle field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.subtitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitle: prismic.KeyTextField;

  /**
   * Description field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Selling Points Title field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.selling_points_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  selling_points_title: prismic.KeyTextField;

  /**
   * Selling Point 1 field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.selling_point_1
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  selling_point_1: prismic.KeyTextField;

  /**
   * Selling Point 2 field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.selling_point_2
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  selling_point_2: prismic.KeyTextField;

  /**
   * Selling Point 3 field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.selling_point_3
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  selling_point_3: prismic.KeyTextField;

  /**
   * Selling Point 4 field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.selling_point_4
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  selling_point_4: prismic.KeyTextField;

  /**
   * Mission Statement Title field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.mission_statement_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  mission_statement_title: prismic.KeyTextField;

  /**
   * Mission Statement 1 field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.mission_statement_1
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  mission_statement_1: prismic.KeyTextField;

  /**
   * Mission Statement 2 field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.mission_statement_2
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  mission_statement_2: prismic.KeyTextField;

  /**
   * Security Title field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.security_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  security_title: prismic.KeyTextField;

  /**
   * Security Description field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.security_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  security_description: prismic.KeyTextField;

  /**
   * Environment Title field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.environment_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  environment_title: prismic.KeyTextField;

  /**
   * Environment Description 1 field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.environment_description_1
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  environment_description_1: prismic.KeyTextField;

  /**
   * Environment Description 2 field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.environment_description_2
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  environment_description_2: prismic.KeyTextField;

  /**
   * Environment Description 3 field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.environment_description_3
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  environment_description_3: prismic.KeyTextField;

  /**
   * Conclusion Title field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.conclusion_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  conclusion_title: prismic.KeyTextField;

  /**
   * Conclusion 1 field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.conclusion_1
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  conclusion_1: prismic.KeyTextField;

  /**
   * Conclusion 2 field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.conclusion_2
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  conclusion_2: prismic.KeyTextField;

  /**
   * Contact Title field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.contact_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  contact_title: prismic.KeyTextField;

  /**
   * Contact Description field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.contact_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  contact_description: prismic.KeyTextField;

  /**
   * Slice Zone field in *About*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: about.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<AboutDocumentDataSlicesSlice> /**
   * Meta Description field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: about.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *About*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: about.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * About document from Prismic
 *
 * - **API ID**: `about`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<AboutDocumentData>, "about", Lang>;

type HomeDocumentDataSlicesSlice = never;

/**
 * Content for Home documents
 */
interface HomeDocumentData {
  /**
   * Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: The page title
   * - **API ID Path**: home.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Subtitle1 field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.subtitle1
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitle1: prismic.KeyTextField;

  /**
   * Subtitle2 field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.subtitle2
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitle2: prismic.KeyTextField;

  /**
   * About field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.about
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  about: prismic.KeyTextField;

  /**
   * Services field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.services
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  services: prismic.KeyTextField;

  /**
   * Services Experience field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.services_experience
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  services_experience: prismic.KeyTextField;

  /**
   * Services Projects field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.services_projects
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  services_projects: prismic.KeyTextField;

  /**
   * Service One Name field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.service_one_name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  service_one_name: prismic.KeyTextField;

  /**
   * Service One Description field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.service_one_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  service_one_description: prismic.KeyTextField;

  /**
   * Service Two Name field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.service_two_name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  service_two_name: prismic.KeyTextField;

  /**
   * Service Two Description field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.service_two_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  service_two_description: prismic.KeyTextField;

  /**
   * Service Three Name field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.service_three_name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  service_three_name: prismic.KeyTextField;

  /**
   * Service Three Description field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.service_three_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  service_three_description: prismic.KeyTextField;

  /**
   * Why Civitas Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.why_civitas_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  why_civitas_title: prismic.KeyTextField;

  /**
   * Why Civitas Paragraph One field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.why_civitas_paragraph_one
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  why_civitas_paragraph_one: prismic.KeyTextField;

  /**
   * Why Civitas Paragraph Two field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.why_civitas_paragraph_two
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  why_civitas_paragraph_two: prismic.KeyTextField;

  /**
   * Why Civitas Paragraph Three field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.why_civitas_paragraph_three
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  why_civitas_paragraph_three: prismic.KeyTextField;

  /**
   * Why Civitas Paragraph Four field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.why_civitas_paragraph_four
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  why_civitas_paragraph_four: prismic.KeyTextField;

  /**
   * FAQ One Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.faq_one_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  faq_one_title: prismic.KeyTextField;

  /**
   * FAQ One Description field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.faq_one_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  faq_one_description: prismic.KeyTextField;

  /**
   * FAQ Two Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.faq_two_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  faq_two_title: prismic.KeyTextField;

  /**
   * FAQ Two Description Intro field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.faq_two_description_intro
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  faq_two_description_intro: prismic.KeyTextField;

  /**
   * FAQ Two Description Bullet One field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.faq_two_description_bullet_one
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  faq_two_description_bullet_one: prismic.KeyTextField;

  /**
   * FAQ Two Description Bullet Two field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.faq_two_description_bullet_two
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  faq_two_description_bullet_two: prismic.KeyTextField;

  /**
   * FAQ Two Description Bullet Three field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.faq_two_description_bullet_three
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  faq_two_description_bullet_three: prismic.KeyTextField;

  /**
   * FAQ Two Description Bullet Four field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.faq_two_description_bullet_four
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  faq_two_description_bullet_four: prismic.KeyTextField;

  /**
   * FAQ Three Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.faq_three_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  faq_three_title: prismic.KeyTextField;

  /**
   * FAQ Three Description field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.faq_three_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  faq_three_description: prismic.KeyTextField;

  /**
   * FAQ Four Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.faq_four_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  faq_four_title: prismic.KeyTextField;

  /**
   * FAQ Four Description field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.faq_four_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  faq_four_description: prismic.KeyTextField;

  /**
   * Contact Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.contact_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  contact_title: prismic.KeyTextField;

  /**
   * Contact Description field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.contact_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  contact_description: prismic.KeyTextField;

  /**
   * Slice Zone field in *Home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice> /**
   * Meta Description field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<HomeDocumentData>, "home", Lang>;

/**
 * Item in *Settings → Navigation*
 */
export interface SettingsDocumentDataNavigationItem {
  /**
   * Link field in *Settings → Navigation*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *Settings → Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Site Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.site_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  site_title: prismic.KeyTextField;

  /**
   * Metadata Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.metadata_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  metadata_description: prismic.KeyTextField;

  /**
   * OG Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.og_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  og_image: prismic.ImageField<never>;

  /**
   * Navigation field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navigation: prismic.GroupField<Simplify<SettingsDocumentDataNavigationItem>>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes = AboutDocument | HomeDocument | SettingsDocument;

/**
 * Default variation for About Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *About*
 */
type AboutSliceVariation = AboutSliceDefault;

/**
 * About Shared Slice
 *
 * - **API ID**: `about`
 * - **Description**: About
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSlice = prismic.SharedSlice<"about", AboutSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      AboutDocument,
      AboutDocumentData,
      AboutDocumentDataSlicesSlice,
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      SettingsDocumentDataNavigationItem,
      AllDocumentTypes,
      AboutSlice,
      AboutSliceVariation,
      AboutSliceDefault,
    };
  }
}
