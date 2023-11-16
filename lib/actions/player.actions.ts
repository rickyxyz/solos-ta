'use server';

import { Player } from '@/types/player';
import { promises as fs } from 'fs';

export async function fetchPlayers(): Promise<Player[]> {
  const res = await fs.readFile(
    process.cwd() + '/constants/mocks/source.json',
    'utf-8'
  );

  const json = JSON.parse(res) as Player[];

  return json;
}
