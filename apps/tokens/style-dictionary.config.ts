import { Config } from 'style-dictionary';

// If you need to add multiple configutations Config[] is supported
const config: Config | Config[] = {
  source: ['src/tokens/**/*.json', 'src/tokens/**/*.js'],
  platforms: {
    assets: {
      buildPath: 'assets/',
      actions: ['copy_assets_files'],
    },
    css: {
      transformGroup: 'css',
      buildPath: 'css/',
      transforms: ['attribute/cti', 'name/cti/kebab', 'size/rem', 'color/hex', 'time/seconds', 'font/weight'],
      files: [
        {
          destination: '_variables.css',
          format: 'css/variables',
        },
      ],
    },
    scss: {
      transformGroup: 'scss',
      buildPath: 'scss/',
      transforms: ['attribute/cti', 'name/cti/kebab', 'size/rem', 'color/hex', 'time/seconds', 'font/weight'],
      files: [
        {
          destination: '_variables.scss',
          format: 'scss/variables',
        },
      ],
    },
  },
};

export default config;
