'use server';

import { Player, PlayerFilter } from '@/types/player';
import { promises as fs } from 'fs';
import path from 'path';

const pathName = path.join(process.cwd(), 'public', 'source.json');

export async function fetchPlayers(
  filter: PlayerFilter = 'all position'
): Promise<Player[]> {
  const res = await fs.readFile(pathName, 'utf-8');

  const data = JSON.parse(res) as Player[];

  const filteredData =
    filter === 'all position'
      ? data
      : data.filter((datum) => datum.position === filter);

  return filteredData;
}

/**
 * Fetch a player data
 *
 * @remarks
 * This function will throw an error when given an empty string
 *
 */
export async function fetchPlayer(
  username: string
): Promise<Player | undefined> {
  if (!username) {
    throw new Error('fetchPlayer was called with an empty string');
  }

  const res = await fs.readFile(pathName, 'utf-8');

  const data = JSON.parse(res) as Player[];

  const filteredData = data.find((datum) => datum.username === username);

  return filteredData;
}
