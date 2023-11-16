import type { Meta, StoryObj } from '@storybook/react';
import CardPlayer from '../components/CardPlayer';
import { Player } from '@/types/player';

const meta = {
  title: 'Component/Player Card',
  component: CardPlayer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardPlayer>;
export default meta;

type Story = StoryObj<typeof meta>;

const playerData: Player = {
  firstName: 'Peter',
  lastName: 'Schmeichel',
  email: 'peter@manutd.com',
  phoneNumber: '+4524123123',
  username: 'pschmeicel',
  city: 'Gladsaxe',
  country: 'Denmark',
  position: 'goalkeeper',
  avatar: '/peter.webp',
};

export const ListCard: Story = {
  args: {
    player: playerData,
    mode: 'list',
  },
};

export const SingularCard: Story = {
  args: {
    player: playerData,
    mode: 'singular',
  },
};
