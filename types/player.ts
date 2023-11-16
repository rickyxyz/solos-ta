export interface Player {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  username: string;
  city: string;
  country: string;
  position: 'goalkeeper' | 'defender' | 'midfielder' | 'forward';
  avatar: string;
}
