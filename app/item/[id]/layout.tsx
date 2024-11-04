import React from 'react';

export default function Item({
  children,
  breadcrumb,
}: {
  children: React.ReactNode;
  breadcrumb: React.ReactNode;
}) {
  return (
    <div className='p-6 flex flex-col gap-4'>
      {breadcrumb}
      {children}
    </div>
  );
}
