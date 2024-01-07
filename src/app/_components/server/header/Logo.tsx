import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { Center, Flex, Text } from '@chakra-ui/react';

export const Logo = () => {
  return (
    <>
      <Flex alignItems='center' gap='0.5rem' cursor='pointer' userSelect='none'>
        <Center w='65px' h='65px' border='3px solid #333' borderRadius='50%'>
          <FontAwesomeIcon icon={faLayerGroup} fontSize='40px' color='#333' />
        </Center>
        <Text fontSize='1.8rem' fontFamily='Pretendard-bold'>
          신권호의 포트폴리오
        </Text>
      </Flex>
    </>
  );
};
