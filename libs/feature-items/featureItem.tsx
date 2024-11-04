import { ItemDetails, Skeleton } from '@/components';
import { Suspense } from 'react';
import { fetchData } from '../data/fetchData';
import { Item } from '../types/item';

const ListItem = async ({ id }: { id: string }) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const item: Item = await fetchData(`items/${id}`);

  return <ItemDetails item={item} />;
};

export default async function FeatureItem({ id }: { id: string }) {
  return (
    <Suspense fallback={<Skeleton length={1} />}>
      <ListItem id={id} />
    </Suspense>
  );
}
