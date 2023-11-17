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
        'flex w-full cursor-pointer select-none flex-col gap-5 rounded-xl bg-white p-5 drop-shadow-md' +
        (mode === 'singular' ? `max-h-min ` : ` md:h-56 md:flex-row md:pr-11`)
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
      <div className='flex flex-col gap-4'>
        <header>
          <h3 className='text-2xl font-bold'>
            {player.firstName} {player.lastName}
          </h3>
          <h4 className='text-lg font-medium capitalize text-zinc-500'>
            {player.position}
          </h4>
        </header>
        <div className='grid grid-cols-[1.5fr,2fr] gap-x-2 gap-y-1'>
          {data.map((datum) => (
            <>
              {' '}
              <span className='relative capitalize after:absolute after:right-0 after:content-[":"]'>
                {datum === 'phoneNumber' ? 'phone' : datum}
              </span>
              <span className={`${datum !== 'email' && 'capitalize'}`}>
                {player[datum] || '-'}
              </span>
            </>
          ))}
        </div>
      </div>
    </article>
  );
}

export default CardPlayer;
