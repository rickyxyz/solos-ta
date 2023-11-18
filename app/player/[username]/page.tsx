import CardPlayer from '@/components/CardPlayer';
import { fetchPlayer } from '@/lib/actions/player.actions';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface PlayerPageProps {
  params: { username: string };
}

async function PlayerPage({ params }: PlayerPageProps) {
  const player = await fetchPlayer(params.username);

  // return 404
  if (!player) {
    notFound();
  }

  return (
    <main className='w-ful relative flex h-full items-center justify-center py-1'>
      <Link
        href={'/'}
        className='absolute left-8 top-4 rounded-full bg-white px-4 py-1 text-lg font-semibold drop-shadow-md duration-300 ease-out hover:drop-shadow-xl'
      >
        ◀ Go Back
      </Link>
      <CardPlayer player={player} />
    </main>
  );
}

export default PlayerPage;
