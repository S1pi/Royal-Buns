import {defineConfig} from 'vite';

// Vite-konfiguraatio
export default defineConfig({
  // Peruspolku projektin buildille (esim. jos deployaat alihakemistoon)
  base: './', // Voit muuttaa tämän tarvittaessa

  // Palvelimen asetukset kehitystä varten
  server: {
    open: true, // Avataan selain automaattisesti, kun kehityspalvelin käynnistyy
  },

  // CSS-asetukset
  css: {
    // Moduulien hallinta (tarvitaan, jos käytät CSS-moduuleita)
    modules: {
      localsConvention: 'camelCase', // CSS-luokat muuttuvat camelCase-muotoon
    },
  },

  // Build-asetukset (valinnainen)
  build: {
    outDir: 'dist', // Mihin kansioon buildataan
    sourcemap: true, // Salli lähdekartat debuggausta varten
  },
});
