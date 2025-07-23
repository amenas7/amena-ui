import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    '../src/lib/**/*.stories.@(ts|js)',
    '../src/lib/**/*.stories.@(mdx)',
    '../src/lib/**/*.mdx'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-docs'
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  staticDirs: ['../assets/'],
  docs: {
    autodocs: true,
    defaultName: 'Docs'
  }
};
export default config;
