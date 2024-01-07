import { Box, Flex } from '@chakra-ui/react';
import { Logo } from './Logo';
import { GNB } from './GNB';

export const Header = () => {
  return (
    <>
      <Flex
        as='header'
        h='90px'
        boxShadow='0 2px 2px rgba(0, 0, 0, 0.2)'
        alignItems='center'
        p='0 20px'
      >
        <Logo />
        <Box flex='1' />
        <GNB />
      </Flex>
    </>
  );
};
