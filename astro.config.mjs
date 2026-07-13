import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: "https://venatusuniverse.com",
    integrations: [sitemap({
        i18n: {
            defaultLocale: "fr",
            locales: {
                fr: "fr",
                en: "en"
            }
        }
    })],
    i18n: {
        locales: ["fr", "en"],
        defaultLocale: "fr",
        routing: {
            prefixDefaultLocale: false
        }
    }
});
