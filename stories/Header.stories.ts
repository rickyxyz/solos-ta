import type { Meta, StoryObj } from '@storybook/react';
import Header from '@/components/Header';

const meta = {
  title: 'Component/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>;
export default meta;

type Story = StoryObj<typeof meta>;

export const HeaderDefault: Story = {
  name: 'Homepage Header',
};
