import React from 'react';
import type { Preview } from '@storybook/react';

const MyDecorator = (Story) => {
  return (
    <div>
      <span>Hello Decorator!</span>
      <Story />
    </div>
  );
};

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light',
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  // remove the next line, then `Show Code` displays the button as expected.
  decorators: [MyDecorator],
};

export default preview;
