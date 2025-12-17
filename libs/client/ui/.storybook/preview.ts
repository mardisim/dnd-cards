import { applicationConfig, type Preview } from '@storybook/angular';
import 'zone.js';

// 👇 Add these
import { provideRouter } from '@angular/router';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from './documentation.json';
setCompodocJson(docJson);

const preview: Preview = {
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
      providers: [provideRouter([])],
    }),
  ],
};
export default preview;
