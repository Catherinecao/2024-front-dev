'use client';

import React from 'react';
const Card = ({
  children,
  classNames,
}: {
  children: React.ReactNode;
  classNames?: string;
}) => {
  return <div className={`flex flex-col gap-4 ${classNames}`}>{children}</div>;
};

export { Card };
