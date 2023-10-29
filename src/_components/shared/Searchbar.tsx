'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui';

export default function Searchbar({ routeType }: { routeType: string }) {
  const router = useRouter();
  const [search, setSearch] = useState<string>('');

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      console.log('debounced');
      if (search) {
        router.push(`/${routeType}?q=` + search);
      } else {
        router.push(`/${routeType}`);
      }
    }, 400);
    return () => clearTimeout(delayDebounceFn);
  }, [search, routeType]);

  return (
    <div className="flex items-center space-x-4">
      <Image
        src="/assets/search-gray.svg"
        alt="search"
        width={30}
        height={30}
      />

      <Input value={search} onChange={handleChangeSearch} />
    </div>
  );
}
