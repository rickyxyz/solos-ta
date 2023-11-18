import { Player } from '@/types/player';
import Image from 'next/image';

interface CardPlayerProps {
  player: Player;
  mode?: 'singular' | 'list';
}

function CardPlayer({ player, mode = 'singular' }: CardPlayerProps) {
  const detailData: (keyof Player)[] = [
    'city',
    'country',
    'phoneNumber',
    'email',
  ];

  return (
    <article
      className={
        style.card_default +
        (mode === 'singular' ? style.card_singular : style.card_list)
      }
    >
      <Image
        src={player.avatar}
        alt={`photo of ${player.firstName} ${player.lastName}`}
        width={500}
        height={500}
        priority
        className='aspect-square h-full w-auto rounded-md object-cover object-top'
      />
      <div className='flex w-full flex-col gap-4'>
        <header>
          <h1 className='text-2xl font-bold'>
            {player.firstName} {player.lastName}
          </h1>
          <h2 className='text-lg font-medium capitalize text-zinc-500'>
            {player.position}
          </h2>
        </header>
        <div className='flex flex-col gap-x-2 gap-y-1'>
          {detailData.map((detail) => (
            <div
              key={`card-${player.username}-${detail}`}
              className='grid grid-cols-[0.5fr,1fr] gap-2'
            >
              <span className='add-colon-right'>
                {detail === 'phoneNumber' ? 'phone' : detail}
              </span>
              <span
                className={`truncate ${detail !== 'email' && 'capitalize'}`}
              >
                {player[detail] || '-'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

const style = {
  card_default:
    'flex w-full flex-col gap-5 rounded-xl bg-white p-5 drop-shadow-md ',
  card_singular: 'max-h-min max-w-[90vw] xl:max-w-md ',
  card_list:
    'duration-300 ease-out hover:drop-shadow-xl md:h-56 md:flex-row md:pr-11 ',
};

export default CardPlayer;
