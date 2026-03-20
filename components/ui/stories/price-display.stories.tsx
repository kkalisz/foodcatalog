import type { Meta, StoryObj } from '@storybook/nextjs';

import { PriceDisplay } from '../price-display';

const meta: Meta<typeof PriceDisplay> = {
  title: 'UI/PriceDisplay',
  component: PriceDisplay,
  tags: ['autodocs'],
  argTypes: {
    price: {
      control: 'number',
    },
    currency: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    bold: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof PriceDisplay>;

export const Default: Story = {
  args: {
    price: 25.5,
  },
};

export const Large: Story = {
  args: {
    price: 129,
    size: 'lg',
  },
};

export const Small: Story = {
  args: {
    price: 9.99,
    size: 'sm',
    bold: false,
  },
};

export const CustomCurrency: Story = {
  args: {
    price: 15.5,
    currency: 'USD',
  },
};
