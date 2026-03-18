import type { Meta, StoryObj } from '@storybook/nextjs';

import { RatingStars } from '../rating-stars';

const meta: Meta<typeof RatingStars> = {
  title: 'UI/RatingStars',
  component: RatingStars,
  tags: ['autodocs'],
  argTypes: {
    rating: {
      control: { type: 'number', min: 0, max: 5 },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    interactive: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof RatingStars>;

export const Default: Story = {
  args: {
    rating: 4,
  },
};

export const Small: Story = {
  args: {
    rating: 3,
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    rating: 5,
    size: 'lg',
  },
};

export const Interactive: Story = {
  args: {
    rating: 0,
    interactive: true,
    size: 'lg',
  },
};
