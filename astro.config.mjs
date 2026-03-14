import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: "https://venatusuniverse.com",
    i18n: {
        locales: ["fr", "en"],
        defaultLocale: "fr",
        routing: {
            prefixDefaultLocale: false
        }
    }
});
