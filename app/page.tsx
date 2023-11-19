import { fetchPlayers } from '@/lib/actions/player.actions';
import { PlayerFilter, playerFilter } from '@/types/player';
import GridPlayer from '@/components/GridPlayer';

interface HomePageProps {
  searchParams: { filter: string };
}

async function HomePage({ searchParams }: HomePageProps) {
  const filter = playerFilter.includes(searchParams.filter as PlayerFilter)
    ? (searchParams.filter as PlayerFilter)
    : 'all position';

  const playerData = await fetchPlayers(filter);

  return <GridPlayer playerData={playerData} filterParam={filter} />;
}

export default HomePage;
