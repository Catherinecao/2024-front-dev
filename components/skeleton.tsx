'use client';

import { useMemo } from 'react';

type Props = {
  length?: number;
  height?: string;
};
const Skeleton = ({ length = 3, height = 'h-[52px]' }: Props) => {
  const emptyArray = useMemo(() => Array(length).fill(0), [length]);
  return emptyArray.map((_, i) => (
    <div className={`animate-pulse  bg-slate-200 ${height}`} key={i}></div>
  ));
};

export { Skeleton };
