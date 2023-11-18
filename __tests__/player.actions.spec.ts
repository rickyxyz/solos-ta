import { test, expect } from '@playwright/test';
import { fetchPlayer, fetchPlayers } from '../lib/actions/player.actions';

test('fetchPlayers can return object', async () => {
  const json = await fetchPlayers();

  expect(json).toBeInstanceOf(Array);
});

test('fetchPlayers without filter can return multiple players', async () => {
  const json = await fetchPlayers();

  expect(json.length).toBe(11);
});

test('fetchPlayers with filter can return filtered player', async () => {
  const json = await fetchPlayers('goalkeeper');

  expect(json.length).toBe(1);
});

test('fetchPlayer will throw error when called when called with an empty string', async () => {
  await expect(fetchPlayer('')).rejects.toThrow(
    'fetchPlayer was called with an empty string'
  );
});

test('fetchPlayer can return undefined', async () => {
  const json = await fetchPlayer('a username not in DB');

  expect(json).toBeUndefined();
});

test('fetchPlayer can return a player', async () => {
  const json = await fetchPlayer('pschmeicel');

  expect(json).toEqual(expect.objectContaining({ email: 'peter@manutd.com' }));
});
