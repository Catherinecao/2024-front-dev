import { ListItem, Skeleton } from '@/components';
import { Suspense } from 'react';
import type { Item } from '../types/item';
import { fetchData } from '../data/fetchData';

const ListItems = async ({ query }: { query?: string }) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const items: Item[] = await fetchData('items', query);

  return items.length
    ? items.map((item: Item) => <ListItem key={item.id} item={item} />)
    : 'Search not found';
};

export default async function FeatureItems({ query }: { query?: string }) {
  return (
    <>
      <Suspense fallback={<Skeleton length={5} />}>
        <ListItems query={query} />
      </Suspense>
    </>
  );
}
