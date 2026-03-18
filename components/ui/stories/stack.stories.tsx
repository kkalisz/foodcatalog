import type { Meta, StoryObj } from '@storybook/nextjs';

import { Stack } from '../stack';

const meta: Meta<typeof Stack> = {
  title: 'UI/Layout/Stack',
  component: Stack,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'col'],
    },
    gap: {
      control: 'select',
      options: [0, 1, 2, 3, 4, 5, 6, 8, 10],
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'baseline', 'stretch'],
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stack>;

const Placeholder = ({ color }: { color: string }) => (
  <div className={`w-12 h-12 rounded ${color}`} />
);

export const Column: Story = {
  args: {
    direction: 'col',
    gap: 4,
    children: (
      <>
        <Placeholder color="bg-primary" />
        <Placeholder color="bg-secondary" />
        <Placeholder color="bg-accent" />
      </>
    ),
  },
};

export const Row: Story = {
  args: {
    direction: 'row',
    gap: 4,
    children: (
      <>
        <Placeholder color="bg-primary" />
        <Placeholder color="bg-secondary" />
        <Placeholder color="bg-accent" />
      </>
    ),
  },
};

export const AlignCenter: Story = {
  args: {
    direction: 'col',
    gap: 4,
    align: 'center',
    children: (
      <>
        <div className="w-20 h-10 bg-primary rounded" />
        <div className="w-40 h-10 bg-secondary rounded" />
        <div className="w-30 h-10 bg-accent rounded" />
      </>
    ),
  },
};
