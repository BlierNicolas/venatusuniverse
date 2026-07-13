import { getRelativeLocaleUrl } from 'astro:i18n';
import langEn from './locales/en.json';
import langFr from './locales/fr.json';

export function removeLocaleFromPath(path: string): string {
  const locales = ['en', 'fr'];
  const regex = new RegExp(`^/(${locales.join('|')})(/|$)`);
  return path.replace(regex, '/');
}

const enToFr: Record<string, string> = {
  stories: 'histoires',
  characters: 'personnages',
  powers: 'pouvoirs',
  groups: 'groupes',
  news: 'nouvelles',
  events: 'evenements',
  projects: 'projets',
  calendar: 'calendrier',
  encyclopedia: 'encyclopedie',
  giervia: 'giervia',
  progression: 'progression',
  contributors: 'contributeurs',
  numbers: 'statistiques',
  about: 'a-propos',
  tags: 'etiquettes',
  chapter: 'chapitre',
  blog: 'blog',
  posts: 'articles',
};

const frToEn: Record<string, string> = {};
for (const [en, fr] of Object.entries(enToFr)) {
  frToEn[fr] = en;
}

function translatePath(locale: string, path: string): string {
  const cleaned = removeLocaleFromPath(path);
  const segments = cleaned.split('/').filter(Boolean);
  const map = locale === 'fr' ? enToFr : frToEn;
  const translated = segments.map((seg) => map[seg] || seg).join('/');
  return '/' + translated;
}

export function getLocalizedUrl(locale: string, path: string): string {
  const translated = translatePath(locale, path);
  const cleanedPath = removeLocaleFromPath(translated);
  return getRelativeLocaleUrl(locale, cleanedPath);
}

export function t(key: string, locale: string, vars?: Record<string, string | number>): string {
  const translation = locales[locale]?.[key];
  if (!translation) {
    console.warn(`Missing translation for key "${key}" in locale "${locale}"`);
    return `##${key}##`;
  }
  if (!vars) return translation;
  return Object.entries(vars).reduce((str, [k, v]) => str.replace(`{${k}}`, String(v)), translation);
}

export const locales: Record<string, Record<string, string>> = {
  en: langEn,
  fr: langFr,
}