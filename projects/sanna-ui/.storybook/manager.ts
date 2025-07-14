import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: {
    ...themes.light,
    brandTitle: 'SANNA Storybook',
    brandUrl: 'https://sanna.com',
    brandImage: 'dark-logo-story.svg',
  },
}); 