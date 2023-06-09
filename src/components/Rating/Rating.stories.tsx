import type { Meta, StoryObj } from '@storybook/react';

import Rating from './index';

const meta = {
  title: 'Rating',
  component: Rating,
  tags: ['autodocs'],
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RatingDefault: Story = {
  args: {
    rating: 3,
    isVisibleNumber: true,
  },
};
