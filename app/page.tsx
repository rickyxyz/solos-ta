'use client';

import PositionFilter from '@/components/PositionFilter';
import CardPlayer from '@/components/CardPlayer';
import { fetchPlayers } from '@/lib/actions/player.actions';
import { Player, PlayerFilter } from '@/types/player';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

function HomePage() {
  const [playerData, setPlayerData] = useState<Player[]>([]);
  const [filter, setFilter] = useState<PlayerFilter>('all position');

  const filteredPlayer = useMemo(() => {
    if (filter === 'all position') return playerData;

    return playerData.filter((player) => player.position === filter);
  }, [filter, playerData]);

  useEffect(() => {
    async function fetchData() {
      const playerData = await fetchPlayers();
      setPlayerData(playerData);
    }

    fetchData().catch((e) => {
      console.error(e);
    });
  }, []);

  return (
    <main className='flex min-h-screen flex-col items-start gap-6 px-8 py-4'>
      <PositionFilter filter={filter} setFilter={setFilter} />
      <section className='grid w-full grid-flow-row gap-x-4 gap-y-5 md:grid-cols-responsive-3 '>
        {filteredPlayer.map((player, index) => (
          <Link
            key={`player_card-${index}-${player.username}`}
            href={`/player/${player.username}`}
            className='cursor-pointer'
          >
            <CardPlayer player={player} mode='list' />
          </Link>
        ))}
      </section>
    </main>
  );
}

export default HomePage;
