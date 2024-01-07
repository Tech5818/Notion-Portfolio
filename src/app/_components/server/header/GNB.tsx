import { List, ListItem } from '@chakra-ui/react';

export const GNB = () => {
  return (
    <>
      <List listStyleType='none' display='flex' gap='20px'>
        <ListItem fontSize='22px'>홈</ListItem>
        <ListItem fontSize='22px'>포트폴리오</ListItem>
      </List>
    </>
  );
};
