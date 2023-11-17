'use client';

import { PlayerFilter, playerFilter } from '@/types/player';
import { ChangeEvent, useState } from 'react';

function PositionFilter() {
  const [filter, setFilter] = useState<PlayerFilter>('all');

  function onChange(event: ChangeEvent<HTMLSelectElement>) {
    setFilter(event.target.value as PlayerFilter);
  }

  return (
    <div>
      <select
        id='filter'
        name='filter'
        value={filter}
        onChange={onChange}
        className='min-w-28 block w-full rounded-lg bg-gray-50 p-2 text-sm drop-shadow-md'
      >
        {playerFilter.map((filterOption) => (
          <option key={`filter-${filterOption}`} value={filterOption}>
            {filterOption}
          </option>
        ))}
      </select>
    </div>
  );
}

export default PositionFilter;
