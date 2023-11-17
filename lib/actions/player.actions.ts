'use server';

import { Player, PlayerFilter } from '@/types/player';
import { promises as fs } from 'fs';

export async function fetchPlayers(
  filter: PlayerFilter = 'all position'
): Promise<Player[]> {
  const res = await fs.readFile(
    process.cwd() + '/constants/mocks/source.json',
    'utf-8'
  );

  const data = JSON.parse(res) as Player[];

  const filteredData =
    filter === 'all position'
      ? data
      : data.filter((datum) => datum.position === filter);

  return filteredData;
}
