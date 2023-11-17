import { test, expect } from '@playwright/test';
import { fetchPlayers } from '../lib/actions/player.actions';

test('fetchPlayers can return object', async () => {
  const json = await fetchPlayers();

  expect(json).toBeInstanceOf(Array);
});

test('fetchPlayers without filter can return multiple players', async () => {
  const json = await fetchPlayers();

  expect(json.length).toBe(11);
});

test('fetchPlayers with filter can return mulitple players', async () => {
  const json = await fetchPlayers('defender');

  expect(json.length).toBe(4);
});
