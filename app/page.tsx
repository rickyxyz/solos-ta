import PositionFilter from '@/components/PositionFilter';
import CardPlayer from '@/components/CardPlayer';
import { fetchPlayers } from '@/lib/actions/player.actions';

async function HomePage() {
  const playerData = await fetchPlayers();

  return (
    <main className='flex min-h-screen flex-col items-start gap-6 px-8 py-4'>
      <header className='flex w-full'>
        <PositionFilter />
      </header>
      <div className='grid w-full grid-flow-row grid-cols-responsive-3 gap-x-4 gap-y-5'>
        {playerData.map((player, index) => (
          <CardPlayer
            key={`player_card-${index}-${player.username}`}
            player={player}
            mode='list'
          />
        ))}
      </div>
    </main>
  );
}

export default HomePage;
