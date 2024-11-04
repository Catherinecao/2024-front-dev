'use client';

import type { Item } from '@/libs/types/item';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ListItem = ({ item }: { item: Item }) => {
  return (
    <Link href={`/item/${item.id}`} className='w-full block'>
      <div className='px-4 py-3 border-2 border-black duration-150 ease-in-out hover:shadow-solid flex gap-4 items-center'>
        <p>{item.name}</p>
        <p className='rounded-full bg-slate-200 px-3 py-1 text-sm'>
          {item.status}
        </p>
        <ArrowRight className='ml-auto' />
      </div>
    </Link>
  );
};

export { ListItem };
