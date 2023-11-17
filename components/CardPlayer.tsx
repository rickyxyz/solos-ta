import { Player } from '@/types/player';
import Image from 'next/image';

interface CardPlayerProps {
  player: Player;
  mode?: 'singular' | 'list';
}

function CardPlayer({ player, mode = 'singular' }: CardPlayerProps) {
  const data: (keyof Player)[] = ['city', 'country', 'phoneNumber', 'email'];

  return (
    <article
      className={
        'flex w-full cursor-pointer select-none flex-col gap-5 rounded-xl bg-white p-5 drop-shadow-md ' +
        (mode === 'singular' ? 'max-h-min ' : 'md:h-56 md:flex-row md:pr-11 ')
      }
    >
      <Image
        src={player.avatar}
        alt="player's photo"
        width={300}
        height={300}
        priority
        className='aspect-square h-full w-auto rounded-md object-cover object-top'
      />
      <div className='flex w-full flex-col gap-4'>
        <header>
          <h3 className='text-2xl font-bold'>
            {player.firstName} {player.lastName}
          </h3>
          <h4 className='text-lg font-medium capitalize text-zinc-500'>
            {player.position}
          </h4>
        </header>
        <div className='flex flex-col gap-x-2 gap-y-1'>
          {data.map((datum) => (
            <div
              key={`card-${player.username}-${datum}`}
              className='grid grid-cols-[0.6fr,1fr] gap-2'
            >
              <span className='relative capitalize after:absolute after:right-0 after:content-[":"]'>
                {datum === 'phoneNumber' ? 'phone' : datum}
              </span>
              <span className={`${datum !== 'email' && 'capitalize'} truncate`}>
                {player[datum] || '-'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export default CardPlayer;
