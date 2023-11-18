import type { Meta, StoryObj } from '@storybook/react';
import PositionFilter from '@/components/PositionFilter';

const meta = {
  title: 'Component/Dropdown Filter',
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    layout: 'centered',
    backgrounds: {
      default: 'gray',
      values: [
        {
          name: 'white',
          value: '#ffffff',
        },
        {
          name: 'gray',
          value: '#e8e8e8',
        },
      ],
    },
  },
  component: PositionFilter,
} satisfies Meta<typeof PositionFilter>;
export default meta;

type Story = StoryObj<typeof meta>;

export const PositionFilterDefault: Story = {
  name: 'Position Filter',
};
