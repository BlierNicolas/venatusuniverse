export const languages = {
  en: 'English',
  fr: 'Français',
};

export const defaultLang = 'fr';

export const ui = {
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
  },
} as const;

export const routes = {
  fr: {
    'home': 'accueil',
    'about': 'a-propos',
  },
  en: {
    'home': 'home',
    'about': 'about',
  },
} as any;

export const showDefaultLang = false;