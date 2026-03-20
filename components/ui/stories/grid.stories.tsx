import type { Meta, StoryObj } from '@storybook/nextjs';

import { Grid } from '../grid';

const meta: Meta<typeof Grid> = {
  title: 'UI/Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    cols: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6, 12],
    },
    gap: {
      control: 'select',
      options: [0, 1, 2, 3, 4, 5, 6, 8, 10],
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'baseline', 'stretch'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

const Item = ({ label }: { label: string }) => (
  <div className="p-4 bg-muted rounded flex items-center justify-center font-medium">{label}</div>
);

export const TwoColumns: Story = {
  args: {
    cols: 2,
    gap: 4,
    children: (
      <>
        <Item label="1" />
        <Item label="2" />
        <Item label="3" />
        <Item label="4" />
      </>
    ),
  },
};

export const ThreeColumns: Story = {
  args: {
    cols: 3,
    gap: 4,
    children: (
      <>
        <Item label="1" />
        <Item label="2" />
        <Item label="3" />
        <Item label="4" />
        <Item label="5" />
        <Item label="6" />
      </>
    ),
  },
};

export const Grid12: Story = {
  args: {
    cols: 12,
    gap: 2,
    children: (
      <>
        <div className="col-span-8 p-4 bg-primary text-primary-foreground rounded">Span 8</div>
        <div className="col-span-4 p-4 bg-secondary text-secondary-foreground rounded">Span 4</div>
        <div className="col-span-12 p-4 bg-accent text-accent-foreground rounded">Span 12</div>
      </>
    ),
  },
};
