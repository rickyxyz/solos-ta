import PositionFilter from '@/components/PositionFilter';
import CardPlayer from '@/components/CardPlayer';
import { fetchPlayers } from '@/lib/actions/player.actions';
import { PlayerFilter, playerFilter } from '@/types/player';
import Link from 'next/link';

async function HomePage({
  searchParams,
}: {
  searchParams: { filter: string };
}) {
  const filter = playerFilter.includes(searchParams.filter as PlayerFilter)
    ? (searchParams.filter as PlayerFilter)
    : 'all position';

  const playerData = await fetchPlayers(filter);

  return (
    <main className='flex min-h-screen flex-col items-start gap-6 px-8 py-4'>
      <header className='flex w-full'>
        <PositionFilter />
      </header>
      <div className='grid w-full grid-flow-row gap-x-4 gap-y-5 md:grid-cols-responsive-3'>
        {playerData.map((player, index) => (
          <Link
            key={`player_card-${index}-${player.username}`}
            href={`/player/${player.username}`}
            className='cursor-pointer'
          >
            <CardPlayer player={player} mode='list' />
          </Link>
        ))}
      </div>
    </main>
  );
}

export default HomePage;
