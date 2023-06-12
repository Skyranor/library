import type { Meta, StoryObj } from '@storybook/react';

import Button from './index';

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SecondaryButton: Story = {
  args: {
    variant: 'secondary',
    children: 'test',
    size: 'max',
  },
};
