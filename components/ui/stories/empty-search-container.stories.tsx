import type { Meta, StoryObj } from '@storybook/nextjs';

import EmptySearchContainer from '../containers/EmptySearchContainer';

const meta: Meta<typeof EmptySearchContainer> = {
  title: 'Containers/EmptySearchContainer',
  component: EmptySearchContainer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EmptySearchContainer>;

export const Default: Story = {
  args: {
    title: 'No results found',
    description: 'Try adjusting your search filters to find what you are looking for.',
  },
};
