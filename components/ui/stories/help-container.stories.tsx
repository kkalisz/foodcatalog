import type { Meta, StoryObj } from '@storybook/nextjs';

import HelpContainer from '../containers/HelpContainer';

const meta: Meta<typeof HelpContainer> = {
  title: 'Containers/HelpContainer',
  component: HelpContainer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HelpContainer>;

export const Default: Story = {
  args: {
    title: 'How can we help?',
    description: 'Find answers to common questions about using the platform.',
  },
};
