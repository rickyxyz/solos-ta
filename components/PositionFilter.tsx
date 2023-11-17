'use client';

import { PlayerFilter, playerFilter } from '@/types/player';
import { ChangeEvent, useState } from 'react';

function PositionFilter() {
  const [filter, setFilter] = useState<PlayerFilter>('all position');

  function onChange(event: ChangeEvent<HTMLSelectElement>) {
    setFilter(event.target.value as PlayerFilter);
  }

  return (
    <div className='flex items-center gap-1 rounded-full bg-white px-4 py-1 text-lg font-semibold drop-shadow-md'>
      <label htmlFor='filter' className='hidden'>
        position
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
