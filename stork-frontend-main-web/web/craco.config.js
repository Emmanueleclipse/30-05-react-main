const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');
const path = require('path');
const getAliases = require('./src/app/config/aliases');

const aliases = getAliases();

const resolvedAliases = Object.fromEntries(
  Object.entries(aliases).map(([key, value]) => [
    key,
    path.resolve(__dirname, value),
  ]),
);

module.exports = {
  style: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  webpack: {
    alias: resolvedAliases,
  },
};
