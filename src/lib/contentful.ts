import * as contentful from "contentful";
import type { EntryFieldTypes } from "contentful";

export interface Story {
  contentTypeId: "infosRomans",
  fields: {
    title: EntryFieldTypes.Text,
    slug: EntryFieldTypes.Text,
    equivalentUrl: EntryFieldTypes.Text,
    coverImage: EntryFieldTypes.AssetLink,
    summary: EntryFieldTypes.RichText,
    storyType: EntryFieldTypes.Text,
    currentChapter: EntryFieldTypes.Integer,
    maximumChapter: EntryFieldTypes.Integer,
    featured: EntryFieldTypes.Boolean
  }
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});