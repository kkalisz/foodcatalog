import type { Meta, StoryObj } from '@storybook/nextjs';

import { Section } from '../section';

const meta: Meta<typeof Section> = {
  title: 'UI/Section',
  component: Section,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Section>;

export const Default: Story = {
  args: {
    title: 'Section Title',
    children: <p>This is the section content. It has consistent spacing from the title.</p>,
  },
};

export const LargeTitle: Story = {
  args: {
    title: 'Large Section Title',
    titleSize: '7',
    children: <p>Section with a larger title size.</p>,
  },
};

export const WithoutTitle: Story = {
  args: {
    children: <p>Section without a title, still maintains its own spacing and structure.</p>,
  },
};
