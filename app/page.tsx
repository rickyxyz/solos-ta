import PositionFilter from '@/components/PositionFilter';
import CardPlayer from '@/components/CardPlayer';
import { fetchPlayers } from '@/lib/actions/player.actions';
import { PlayerFilter, playerFilter } from '@/types/player';
import Link from 'next/link';

interface HomePageProps {
  searchParams: { filter: string };
}

async function HomePage({ searchParams }: HomePageProps) {
  const filter = playerFilter.includes(searchParams.filter as PlayerFilter)
    ? (searchParams.filter as PlayerFilter)
    : 'all position';

  const playerData = await fetchPlayers(filter);

  return (
    <main className='flex min-h-screen flex-col items-start gap-6 px-8 py-4'>
      <PositionFilter filter={filter} />
      <section className='grid w-full grid-flow-row gap-x-4 gap-y-5 md:grid-cols-responsive-3 '>
        {playerData.map((player, index) => (
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
