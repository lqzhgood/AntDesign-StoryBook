import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import path from 'path';

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
        {
            name: '@storybook/addon-docs',
            options: {
                sourceLoaderOptions: {
                    injectStoryParameters: false,
                },
            },
        },
        '@storybook/addon-storysource',
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    async viteFinal(config, { configType }) {
        if (configType === 'DEVELOPMENT') {
            // Your development configuration goes here
        }
        if (configType === 'PRODUCTION') {
            // Your production configuration goes here.
        }
        return mergeConfig(config, {
            resolve: {
                alias: {
                    '@': path.join(__dirname, '../src'),
                },
            },
        });
    },
};
export default config;
