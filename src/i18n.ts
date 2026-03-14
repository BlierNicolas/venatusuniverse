import { getRelativeLocaleUrl } from 'astro:i18n';
import langEn from './locales/en.json';
import langFr from './locales/fr.json';

export function removeLocaleFromPath(path: string): string {
  const locales = ['en', 'fr'];
  const regex = new RegExp(`^/(${locales.join('|')})(/|$)`);
  return path.replace(regex, '/');
}

export function getLocalizedUrl(locale: string, path: string): string {
  const cleanedPath = removeLocaleFromPath(path);
  const localizedUrl = getRelativeLocaleUrl(locale, cleanedPath);
  return localizedUrl;
}

export function t(key: string, locale: string): string {
  const translation = locales[locale]?.[key];
  if (!translation) {
    console.warn(`Missing translation for key "${key}" in locale "${locale}"`);
    return `##${key}##`;
  }
  return translation;
}

export const locales: Record<string, Record<string, string>> = {
  en: langEn,
  fr: langFr,
}