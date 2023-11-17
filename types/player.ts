const playerPosition = [
  'defender',
  'forward',
  'goalkeeper',
  'midfielder',
] as const;
type PlayerPosition = (typeof playerPosition)[number];

export const playerFilter = ['all', ...playerPosition] as const;
export type PlayerFilter = (typeof playerFilter)[number];

export interface Player {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  username: string;
  city: string;
  country: string;
  position: PlayerPosition;
  avatar: string;
}
