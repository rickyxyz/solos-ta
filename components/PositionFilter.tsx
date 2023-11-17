'use client';

import { PlayerFilter, playerFilter } from '@/types/player';
import { useRouter, useSearchParams } from 'next/navigation';

import { ChangeEvent } from 'react';

function PositionFilter() {
  const router = useRouter();
  const params = useSearchParams();
  const filter = playerFilter.includes(params.get('filter') as PlayerFilter)
    ? (params.get('filter') as PlayerFilter)
    : 'all position';

  function onChange(event: ChangeEvent<HTMLSelectElement>) {
    router.replace(`/?filter=${event.target.value}`);
  }

  return (
    <div className='flex items-center gap-1 rounded-full bg-white px-4 py-1 text-lg font-semibold drop-shadow-md'>
      <label htmlFor='filter' className='hidden'>
        filter by position
      </label>
      <select
        id='filter'
        name='filter'
        value={filter}
        onChange={onChange}
        className='block w-36 rounded-lg bg-white py-1 capitalize'
      >
        {playerFilter.map((filterOption) => (
          <option
            key={`filter-${filterOption}`}
            value={filterOption}
            className='capitalize'
          >
            {filterOption}
          </option>
        ))}
      </select>
    </div>
  );
}

export default PositionFilter;
