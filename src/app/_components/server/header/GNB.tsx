'use client';

import { List, ListItem } from '@chakra-ui/react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useEffect } from 'react';

export const GNB = () => {
  const router = useRouter();
  const params = useSearchParams();
  const path = usePathname();

  const tabs = params.get('tabs');

  const handleNavigate = (where: string) => {
    router.push(`${path}?tabs=${where}`);
  };
  useEffect(() => {
    console.log(params.entries());
    for (const [key, value] of params.entries()) {
      console.log(`${key} : ${value}`);
    }
  });

  return (
    <>
      <List listStyleType='none' display='flex' gap='20px'>
        <ListItem
          fontSize='22px'
          fontWeight={tabs === null || tabs === 'home' ? 'bold' : 'nomal'}
          onClick={() => {
            handleNavigate('home');
          }}
        >
          홈
        </ListItem>
        <ListItem
          fontSize='22px'
          fontWeight={tabs === 'portfolio' ? 'bold' : 'nomal'}
          onClick={() => {
            handleNavigate('portfolio');
          }}
        >
          포트폴리오
        </ListItem>
      </List>
    </>
  );
};
