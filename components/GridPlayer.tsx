'use client';

import { Player, PlayerFilter } from '@/types/player';
import Link from 'next/link';
import CardPlayer from './CardPlayer';
import { useMemo, useState } from 'react';
import PositionFilter from './PositionFilter';

interface GridPlayerProps {
  playerData: Player[];
  filterParam: PlayerFilter;
}

function GridPlayer({ playerData, filterParam }: GridPlayerProps) {
  const [filter, setFilter] = useState<PlayerFilter>(filterParam);
  const filteredData = useMemo<Player[]>(() => {
    if (filter === 'all position') return playerData;
    return playerData.filter((player) => player.position === filter);
  }, [filter, playerData]);

  return (
    <main className='flex min-h-screen flex-col items-start gap-6 px-8 py-4'>
      <PositionFilter filter={filter} setFilter={setFilter} />
      <section className='grid w-full grid-flow-row gap-x-4 gap-y-5 md:grid-cols-responsive-3 '>
        {filteredData.map((player, index) => (
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

export default GridPlayer;
