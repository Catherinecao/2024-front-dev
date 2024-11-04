'use client';

import React from 'react';
import type { Item } from '@/libs/types/item';
import { format } from 'date-fns';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const ItemDetails = ({ item }: { item: Item }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleOpen = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <div className='flex flex-col w-full'>
      <div className='flex gap-4 items-center'>
        <p className='text-md font-semibold'>{item.name}</p>
        <div>
          Status:{' '}
          <span className='rounded-full bg-slate-200 px-3 py-1'>
            {item.status}
          </span>
        </div>
        <p className='font-mono text-sm text-slate-600'>
          Created at: {format(item.createdAt, 'dd-mm-yy')}
        </p>
        <div className='ml-auto'>
          <button
            onClick={toggleOpen}
            className='bg-black text-white rounded-full flex px-4 py-1 text-sm items-center'
          >
            See more
            <motion.div
              className='ml-auto'
              animate={{
                rotateZ: isOpen ? 180 : 0,
              }}
            >
              <ChevronDown className='text-md' />
            </motion.div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='overflow-hidden'
            initial={{ height: 0 }}
            animate={{
              height: 'auto',
            }}
            exit={{ height: 0 }}
          >
            <div className='pt-6'>
              <p className='text-sm'>{item.description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { ItemDetails };
