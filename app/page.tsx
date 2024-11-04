import { Card } from '@/components';
import SearchInput from '@/components/search-input';
import FeatureItems from '@/libs/feature-items/featureItems';

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = (await searchParams)?.query || '';
  return (
    <div className='p-6'>
      <Card classNames='max-w-[30rem]'>
        <SearchInput />
        <FeatureItems query={query} />
      </Card>
    </div>
  );
}
