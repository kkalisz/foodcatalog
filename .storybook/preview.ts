import type { Preview } from '@storybook/nextjs-vite';
import { Theme } from '@radix-ui/themes';
import React from 'react';
import '@radix-ui/themes/styles.css';
import '../app/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
  decorators: [
    Story =>
      React.createElement(
        Theme,
        { appearance: 'light', accentColor: 'orange', radius: 'large' },
        React.createElement(Story)
      ),
  ],
};

export default preview;
