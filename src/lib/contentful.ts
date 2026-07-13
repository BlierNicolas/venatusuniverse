import * as contentful from "contentful";
import type { EntryFieldTypes } from "contentful";

export interface Story {
  contentTypeId: "infosRomans",
  fields: {
    title: EntryFieldTypes.Text,
    slug: EntryFieldTypes.Text,
    equivalentUrl: EntryFieldTypes.Text,
    coverImage: EntryFieldTypes.AssetLink,
    summary: EntryFieldTypes.Text,
    storyType: EntryFieldTypes.Text,
    currentChapter: EntryFieldTypes.Integer,
    maximumChapter: EntryFieldTypes.Integer,
    featured: EntryFieldTypes.Boolean
  }
}

export interface Chapter {
  contentTypeId: "chapitre",
  fields: {
    title: EntryFieldTypes.Text,
    slug: EntryFieldTypes.Text,
    equivalentUrl: EntryFieldTypes.Text,
    chapterCode: EntryFieldTypes.Text,
    order: EntryFieldTypes.Integer,
    text: EntryFieldTypes.Text,
    readTime: EntryFieldTypes.Integer,
    previousChapter: EntryFieldTypes.Text,
    nextChapter: EntryFieldTypes.Text,
    storyName: EntryFieldTypes.Text
  }
}

export interface Character {
  contentTypeId: "personnage",
  fields: {
    fullName: EntryFieldTypes.Text,
    slug: EntryFieldTypes.Text,
    equivalentUrl: EntryFieldTypes.Text,
    age: EntryFieldTypes.Integer,
    image: EntryFieldTypes.AssetLink,
    powerName: EntryFieldTypes.Text,
    powerUrl: EntryFieldTypes.Text,
    powerGroup: EntryFieldTypes.Text,
    alignment: EntryFieldTypes.Text,
    birthDate: EntryFieldTypes.Text,
    summary: EntryFieldTypes.Text,
    physic: EntryFieldTypes.Text,
    powerDescription: EntryFieldTypes.Text,
    relation: EntryFieldTypes.Text,
    appearance: EntryFieldTypes.Text,
    geneType: EntryFieldTypes.Text
  }
}

export interface Power {
  contentTypeId: "pouvoir",
  fields: {
    name: EntryFieldTypes.Text,
    slug: EntryFieldTypes.Text,
    equivalentUrl: EntryFieldTypes.Text,
    description: EntryFieldTypes.Text
  }
}

export interface Group {
  contentTypeId: "groupe",
  fields: {
    groupName: EntryFieldTypes.Text,
    slug: EntryFieldTypes.Text,
    equivalentUrl: EntryFieldTypes.Text,
    description: EntryFieldTypes.Text
  }
}

export interface GroupMember {
  contentTypeId: "membreGroupe",
  fields: {
    groupMemberName: EntryFieldTypes.Text,
    memberName: EntryFieldTypes.Text,
    memberSlug: EntryFieldTypes.Text,
    groupName: EntryFieldTypes.Text,
    memberRole: EntryFieldTypes.Text,
    status: EntryFieldTypes.Text,
    order: EntryFieldTypes.Integer
  }
}

export interface Country {
  contentTypeId: "pays",
  fields: {
    name: EntryFieldTypes.Text,
    slug: EntryFieldTypes.Text,
    equivalentUrl: EntryFieldTypes.Text,
    content: EntryFieldTypes.Text,
    map: EntryFieldTypes.AssetLink,
    description: EntryFieldTypes.Text,
    story: EntryFieldTypes.Text,
    area: EntryFieldTypes.Number,
    population: EntryFieldTypes.Number,
    amountNH: EntryFieldTypes.Number,
    climate: EntryFieldTypes.Text,
    resources: EntryFieldTypes.Text,
    terrainType: EntryFieldTypes.Text,
    leaders: EntryFieldTypes.Text,
    reputation: EntryFieldTypes.Text,
    conflict: EntryFieldTypes.Text,
    flag: EntryFieldTypes.AssetLink,
    language: EntryFieldTypes.Text,
    religion: EntryFieldTypes.Text
  }
}

export interface World {
  contentTypeId: "monde",
  fields: {
    planetName: EntryFieldTypes.Text,
    slug: EntryFieldTypes.Text,
    equivalentUrl: EntryFieldTypes.Text,
    map: EntryFieldTypes.AssetLink
  }
}

export interface News {
  contentTypeId: "nouvelle",
  fields: {
    newsTitle: EntryFieldTypes.Text,
    slug: EntryFieldTypes.Text,
    equivalentUrl: EntryFieldTypes.Text,
    description: EntryFieldTypes.Text,
    date: EntryFieldTypes.Date,
    dateSpe: EntryFieldTypes.Text,
    referalLink: EntryFieldTypes.Text
  }
}

export interface Event {
  contentTypeId: "evenements",
  fields: {
    title: EntryFieldTypes.Text,
    date: EntryFieldTypes.Date,
    dateSpe: EntryFieldTypes.Text,
    description: EntryFieldTypes.Text,
    storyName: EntryFieldTypes.Text,
    storySlug: EntryFieldTypes.Text,
    chapters: EntryFieldTypes.Text
  }
}

export interface Theory {
  contentTypeId: "theorie",
  fields: {
    title: EntryFieldTypes.Text,
    slug: EntryFieldTypes.Text,
    equivalentUrl: EntryFieldTypes.Text,
    description: EntryFieldTypes.Text,
    text: EntryFieldTypes.Text
  }
}

export interface Project {
  contentTypeId: "project",
  fields: {
    title: EntryFieldTypes.Text,
    slug: EntryFieldTypes.Text,
    summary: EntryFieldTypes.Text,
    description: EntryFieldTypes.Text,
    link: EntryFieldTypes.Text,
    displayed: EntryFieldTypes.Boolean,
    finished: EntryFieldTypes.Boolean,
    order: EntryFieldTypes.Integer,
    equivalentUrl: EntryFieldTypes.Text,
    projectType: EntryFieldTypes.Text
  }
}

export interface CalendarEntry {
  contentTypeId: "calendrier",
  fields: {
    title: EntryFieldTypes.Text,
    description: EntryFieldTypes.Text,
    date: EntryFieldTypes.Date,
    dateSpe: EntryFieldTypes.Text,
    romanSlug: EntryFieldTypes.Text,
    rendered: EntryFieldTypes.Boolean
  }
}

export interface Place {
  contentTypeId: "lieu",
  fields: {
    name: EntryFieldTypes.Text,
    slug: EntryFieldTypes.Text,
    equivalentUrl: EntryFieldTypes.Text,
    description: EntryFieldTypes.Text
  }
}

export interface City {
  contentTypeId: "ville",
  fields: {
    name: EntryFieldTypes.Text,
    slug: EntryFieldTypes.Text,
    equivalentUrl: EntryFieldTypes.Text,
    description: EntryFieldTypes.Text,
    history: EntryFieldTypes.Text,
    demonym: EntryFieldTypes.Text,
    area: EntryFieldTypes.Number,
    population: EntryFieldTypes.Number,
    amountNH: EntryFieldTypes.Number,
    country: EntryFieldTypes.Text,
    slugCountry: EntryFieldTypes.Text,
    continentName: EntryFieldTypes.Text
  }
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});

const localeMap: Record<string, string> = {
  fr: "fr-CA",
  en: "en-US",
};

export function mapLocale(locale: string): string {
  return localeMap[locale] ?? "en-US";
}
