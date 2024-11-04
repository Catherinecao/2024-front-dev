import { Card } from '@/components';
import { fetchData } from '@/libs/data/fetchData';
import FeatureItem from '@/libs/feature-items/featureItem';
import { Item } from '@/libs/types/item';

export async function generateStaticParams() {
  const items = await fetchData('items');

  return items.map((item: Item) => ({
    id: item.id,
  }));
}

export default async function ItemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return (
    <Card classNames='border border-black p-4 max-w-3xl'>
      <FeatureItem id={id} />
    </Card>
  );
}
