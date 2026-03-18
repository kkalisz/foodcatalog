import type { Meta, StoryObj } from '@storybook/nextjs';
import { MapPin, Phone, Globe } from 'lucide-react';

import { InfoItem } from '../info-item';

const meta: Meta<typeof InfoItem> = {
  title: 'UI/InfoItem',
  component: InfoItem,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InfoItem>;

export const Address: Story = {
  args: {
    icon: <MapPin className="w-5 h-5" />,
    label: 'Address',
    value: 'Wrocław, Rynek 1',
  },
};

export const PhoneItem: Story = {
  args: {
    icon: <Phone className="w-5 h-5" />,
    label: 'Phone',
    value: '+48 123 456 789',
  },
};

export const Website: Story = {
  args: {
    icon: <Globe className="w-5 h-5" />,
    label: 'Website',
    value: 'www.lokalgastro.pl',
  },
};
