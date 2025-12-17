import { Config } from 'style-dictionary';

// If you need to add multiple configutations Config[] is supported
const config: Config | Config[] = {
  source: ['src/tokens/**/*.json', 'src/tokens/**/*.js'],
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: '/',
      files: [
        {
          destination: '_variables.scss',
          format: 'scss/variables',
        },
      ],
      actions: ['copy_assets_files'],
    },
  },
};

export default config;
