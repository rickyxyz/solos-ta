import { test, expect } from '@playwright/test';
import { fetchPlayers } from '../lib/actions/player.actions';

test('can successfully return object', async () => {
  const json = await fetchPlayers();

  expect(json).toBeInstanceOf(Array);
});
