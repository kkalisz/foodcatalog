import { Meta, StoryObj } from '@storybook/nextjs';
import { expect, fn, within } from '@storybook/test';
import { userEvent } from 'vitest/browser';

import { SearchButton } from './ui/buttons/buttons';

const meta: Meta<typeof SearchButton> = {
  title: 'Atom/SearchButton',
  component: SearchButton,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DynamicLabel: Story = {
  args: {
    label: 'szukaj',
    onClick: fn(),
  },

  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /szukaj/i });
    await expect(button).toBeInTheDocument();

    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  },
};
export const DisabledButton: Story = {
  args: {
    label: 'zablokowany',
    disabled: true,
    onClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toBeDisabled();
    await userEvent.click(button);
    await expect(args.onClick).not.toHaveBeenCalled();
  },
};

export const TestZmianyLabel: Story = {
  args: {
    initialLabel: 'szukaj',
    loadingLabel: 'szukam',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toHaveTextContent('szukaj');
    await userEvent.click(button);
    await expect(button).toHaveTextContent('szukam');
  },
};
