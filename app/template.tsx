import React from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
  return <div className='animate-fade min-h-screen'>{children}</div>;
}
