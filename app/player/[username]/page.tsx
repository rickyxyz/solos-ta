import CardPlayer from '@/components/CardPlayer';
import { fetchPlayer } from '@/lib/actions/player.actions';
import { notFound } from 'next/navigation';
import Link from 'next/link';

async function PlayerPage({ params }: { params: { username: string } }) {
  const player = await fetchPlayer(params.username);

  if (!player) {
    notFound();
  }

  return (
    <div className='w-ful relative flex h-full items-center justify-center'>
      <Link
        href={'/'}
        className='absolute left-8 top-4 flex items-center rounded-full bg-white px-4 py-1 text-lg font-semibold drop-shadow-md'
      >
        ◀ Go Back
      </Link>
      <CardPlayer player={player} />
    </div>
  );
}

export default PlayerPage;
