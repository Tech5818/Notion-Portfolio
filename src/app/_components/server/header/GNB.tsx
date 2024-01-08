'use client';

import { List, ListItem } from '@chakra-ui/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export const GNB = () => {
  const router = useRouter();
  const params = useSearchParams();

  const tabs = params.get('tabs');

  useEffect(() => {
    console.log(tabs);
  });

  return (
    <>
      <List listStyleType='none' display='flex' gap='20px'>
        <ListItem
          fontSize='22px'
          fontWeight={tabs === null || tabs === 'home' ? 'bold' : 'nomal'}
        >
          홈
        </ListItem>
        <ListItem
          fontSize='22px'
          fontWeight={tabs === 'portfolio' ? 'bold' : 'nomal'}
        >
          포트폴리오
        </ListItem>
      </List>
    </>
  );
};
