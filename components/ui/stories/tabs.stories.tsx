import type { Meta, StoryObj } from '@storybook/nextjs';
import { AxeIcon, BugIcon } from 'lucide-react';

import CustomTag from '../tag/tag';
import { Colors } from '../tag/tag-colors';

const meta: Meta<typeof CustomTag> = {
  title: 'Components/Tabs',
  component: CustomTag,
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: ['red', 'green', 'blue', 'white', 'orange'],
      mapping: Colors,
      control: { type: 'select' },
    },
  },
};
export const colors = [
  Colors.white,
  Colors.green,
  Colors.blue,
  Colors.red,
  Colors.orange,
  Colors.pink,
];
export default meta;

type Story = StoryObj<typeof CustomTag>;

export const Default: Story = {
  args: {
    title: 'Tabs',
    color: Colors.white,
    leftIcon: <BugIcon></BugIcon>,
    rightIcon: <AxeIcon></AxeIcon>,
  },
};

export const Primary: Story = {
  args: {
    title: 'Tabs',
    color: Colors.orange,
    leftIcon: <BugIcon></BugIcon>,
  },
};

export const Neutral: Story = {
  args: {
    title: 'Tabs',
    color: Colors.blue,
  },
};

export const Variants: Story = {
  args: { title: 'Tabs' },
  render: props => {
    return (
      <div className="flex gap-2 flex-wrap">
        {colors.map(color => (
          <>
            <div className="w-32">
              <CustomTag {...props} key={color} color={color} />
            </div>
          </>
        ))}
      </div>
    );
  },
};
