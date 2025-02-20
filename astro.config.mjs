// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server',

  vite: {
    plugins: [tailwindcss()]
  },

  env: {
    schema: {
      SHOW_BUY_BUTTON: envField.boolean({ default: true, context: 'server', access: 'public' }),
      SCORE_API_ENDPOINT: envField.string({ default: '3', context: 'server', access: 'public' }),
    }
  },

  adapter: vercel()
});
// Output: define el tipo de salida que va a tener el proyecto
// server: se va a ejecutar en un servidor y necesita un servidor
// el env: lee las variables de entorno y las pone en el objeto global .env
// el schema: define las variables de entorno que se pueden usar en el proyecto
// el envField: define el tipo de variable de entorno que se va a usar
// default: valor por defecto
// context: donde se va a usar la variable de entorno
// access: si es publica o privada