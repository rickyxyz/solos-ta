import { fetchPlayers } from '@/lib/actions/player.actions';
import GridPlayer from '@/components/GridPlayer';

async function HomePage() {
  const playerData = await fetchPlayers();

  return <GridPlayer playerData={playerData} filterParam={'all position'} />;
}

export default HomePage;
