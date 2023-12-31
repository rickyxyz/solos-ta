'use client';

import { PlayerFilter, playerFilter } from '@/types/player';
import { ChangeEvent } from 'react';

interface PositionFilterProps {
  filter: PlayerFilter;
  setFilter: (filter: PlayerFilter) => void;
}

function PositionFilter({
  filter = 'all position',
  setFilter,
}: PositionFilterProps) {
  function onChange(event: ChangeEvent<HTMLSelectElement>) {
    setFilter(event.target.value as PlayerFilter);
  }

  return (
    <form className='flex items-center gap-1 rounded-full bg-white px-4 py-1 text-lg font-semibold drop-shadow-md'>
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
    </form>
  );
}

export default PositionFilter;
