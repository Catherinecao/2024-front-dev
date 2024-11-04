'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Breadcrumb = () => {
  const pathName = usePathname();
  return (
    <div className='flex gap-3'>
      <Link href={'/'} className='underline underline-offset-2'>
        Home
      </Link>
      <pre>{pathName}</pre>
    </div>
  );
};

export { Breadcrumb };
